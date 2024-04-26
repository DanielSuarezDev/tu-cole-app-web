'use client';

import React, { FC } from 'react';
import { Dropdown } from 'flowbite-react';
import { useRouter } from 'next/navigation';

import { User } from '../../../assets/icons';
import { Divider } from '../Divider/Divider';
import { useAuth } from '../../../../../hooks/useAuth';
import { Typography } from '../Typography/Typography';
import { useScrollPosition } from '../../../../../hooks/useScrollPosition';
import { showHelps } from '../../../../../commons/config';
import LogoFullSvg from '../../../../../assets/icons/LogoFull';
import { IStoreFront } from '../../../../../commons/types/storeFront';
import Link from 'next/link';

type ItemsMenu = {
  [key: string]: {
    subMenus: {
      [key: string]: {
        active?: boolean;
        label: string;
        url: string;
      };
    }[];
  };
};

function extractSubMenuInfo(subMenu: { [key: string]: object }) {
  return Object.keys(subMenu).map((key) => subMenu[key]);
}

// Función para procesar cada menú principal
function processMainMenus(data: ItemsMenu) {
  const mainMenus = Object.keys(data);
  return mainMenus.map((menu) => {
    const subMenus = data[menu].subMenus;
    const extractedSubMenus = subMenus.map(extractSubMenuInfo).flat();
    return {
      menuName: menu,
      subMenus: extractedSubMenus as [
        {
          label: string;
          url: string;
        },
      ],
    };
  });
}

const additionalStyles = (childCount: number) => {
  switch (childCount) {
    case 2:
      return 'childCount-2-specific-styles'; // Replace with your custom Tailwind classes
    case 3:
      return 'childCount-3-specific-styles'; // Replace with your custom Tailwind classes
    default:
      return '';
  }
};
interface Props {
  childCount?: number;
  subtitle?: string;
  items?: ItemsMenu;
  userMenu?: {
    subMenus: [
      {
        [key: string]: {
          active?: boolean;
          label: string;
          url: string;
        };
      },
    ];
  };
  dataCode?: {
    role?: string;
    email?: string;
    storeFront?: IStoreFront;
    environment?: string;
  };
  attributes?: { [key: string]: string | undefined };
}

export const Header: FC<Props> = ({
  childCount = 2,
  subtitle,
  items,
  userMenu,
  dataCode,
  attributes,
}) => {
  const { replace } = useRouter();
  const { logout } = useAuth();
  const menuInformation = items && processMainMenus(items);
  const scrollPosition = useScrollPosition();

  return (
    <div
      id="header-main-top"
      className="bg-black h-28 w-full fixed top-0 z-10 "
    >
      {showHelps && (
        <code
          onClick={() => {
            alert(JSON.stringify(attributes, null, 2));
          }}
          className="text-white text-xs"
        >
          {JSON.stringify({
            ...dataCode,
            storeFront: {
              name: dataCode?.storeFront?.name,
              type: dataCode?.storeFront?.businessunit?.type,
            },
          })}
        </code>
      )}
      <header
        className={`bg-white text-black h-21 w-full p-6 border-b border-gray-200 rounded-t-3xl flex justify-between items-center ${additionalStyles(
          childCount,
        )} transition ${
          scrollPosition > 0 ? 'fixed top-7 rounded-none' : 'absolute bottom-0'
        }  `}
      >
        <div className="flex items-center gap-6 self-stretch h-auto">
          <LogoFullSvg />
          <Divider orientation="vertical" />
          {subtitle && (
            <Typography type="l2" bold otherClasses="text-grey-500 !mb-0">
              {subtitle}
            </Typography>
          )}
        </div>
        <nav
          id="header-main"
          className="flex gap-14 items-center self-stretch h-auto"
        >
          {menuInformation?.map((menu) => {
            return menu?.subMenus?.length > 0 ? (
              <Dropdown
                key={menu.menuName + 'dropdown'}
                label=""
                inline
                as="button"
                renderTrigger={() => (
                  <button>
                    <Typography
                      key={menu.menuName}
                      type="l3"
                      bold
                      otherClasses="cursor-pointer px-4 py-3.5 rounded-md uppercase"
                    >
                      {menu.menuName}
                    </Typography>
                  </button>
                )}
              >
                {menu?.subMenus
                  .map((subMenu, index) => {
                    return (
                      <>
                        <Link href={subMenu.url}>
                          <Dropdown.Item
                            key={
                              menu.menuName + 'dropdown-menu' + subMenu.label
                            }
                            className="inline text-left hover:!bg-grey-100 hover:!text-secondary pt-[18px] px-[24px] pb-[16px]"
                          >
                            <Typography
                              type="b3"
                              color="text-grey-900"
                              otherClasses="!mb-0 capitalize block "
                            >
                              {subMenu.label}
                            </Typography>
                          </Dropdown.Item>
                        </Link>
                        {index !== menu.subMenus.length - 1 && (
                          <Divider
                            key={
                              menu.menuName +
                              'dropdown-menu-divider' +
                              subMenu.label
                            }
                            orientation="horizontal"
                            className="block border-[#EEEEEE]"
                          />
                        )}
                      </>
                    );
                  })
                  .flat()}
              </Dropdown>
            ) : (
              <button>
                <Typography
                  key={menu.menuName}
                  type="l3"
                  bold
                  otherClasses="cursor-pointer px-4 py-3.5 rounded-md uppercase"
                >
                  {menu.menuName}
                </Typography>
              </button>
            );
          })}
        </nav>
        <Dropdown
          label=""
          inline
          renderTrigger={() => (
            <button id="header-user-icon">
              <User />
            </button>
          )}
        >
          {userMenu?.subMenus.map((subMenus) =>
            Object.values(subMenus)
              .filter((subMenu) => !subMenu.label.includes('Logout'))
              .map((subMenu) => (
                <Link
                  key={subMenu.label + 'dropdown-menu' + subMenu.label}
                  href={subMenu.label.includes('Logout') ? '#' : subMenu.url}
                >
                  <Dropdown.Item
                    as="a"
                    href={subMenu.label.includes('Logout') ? '#' : subMenu.url}
                    className="text-left capitalize inline shadow hover:!bg-grey-100 hover:!text-secondary pt-[18px] px-[24px] pb-[16px]"
                  >
                    <Typography
                      type="b3"
                      color="text-grey-900"
                      otherClasses="!mb-0 capitalize block "
                    >
                      {subMenu.label}
                    </Typography>
                  </Dropdown.Item>
                </Link>
              )),
          )}
          <Dropdown.Item
            onClick={async () => {
              await logout();
              replace('/auth/login');
            }}
            className="px-4 text-lecapitalize inline hover:!bg-grey-100 hover:!text-secondary pt-[18px] px-[24px] pb-[16px]"
          >
            <Typography
              type="b3"
              color="text-grey-900"
              otherClasses="!mb-0 capitalize block "
            >
              Logout
            </Typography>
          </Dropdown.Item>
        </Dropdown>
      </header>
    </div>
  );
};
