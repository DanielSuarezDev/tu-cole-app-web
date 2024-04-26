/* eslint-disable @next/next/no-img-element */
import { Divider } from '@/components/Divider/Divider';
import { Typography } from '@/components/Typography/Typography';
import { ButtonLogin } from './components/ButtonLogin';

const Login = () => {
  return (
    <div className="w-full mt-2 scale-105 flex justify-center	">
      <div className="bg-grey-50 rounded-lg shadow p-8 mx-6 sm:w-[390px] h-auto flex flex-col wrap justify-center items-center gap-5">
        <div className="w-full h-full flex flex-col justify-between text-left">
          <div className="mt-8 text-center">
            <img
              //@ts-ignore
              src="./images/Logo-Full.png"
              alt="Paramount Logo"
              className="object-contain"
            />
          </div>
            <Typography
              type="b3"
              bold={false}
              color="text-grey-800"
              otherClasses="mt-[9px] mr-0 mb-0 ml-2 text-center"
            >
              Guiando al conocimiento, formando corazones, entregando siervos...
            </Typography>
          <Divider styles="my-4 border border-grey-100" />
          <ButtonLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
