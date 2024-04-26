"use client";

// import Book from "@/assets/icons/accessRapid/Book"
// import Clear from "@/assets/icons/accessRapid/Clear"
// import Calendar from "@/assets/icons/accessRapid/Calendar"
// import File from "@/assets/icons/accessRapid/File"
import { useEffect, useMemo, useState } from "react"
import { useStudents } from "@/hooks/useStudents"
import { useLog } from "@/hooks/useLog"
import { format, isToday, isWithinInterval, subDays, startOfDay } from "date-fns"
import { es } from 'date-fns/locale'
import { useRouter } from "next/navigation"
import Link from "next/link";


const accessRapid = [
  {
    name: 'Devocionales',
    path: '/devocionals',
    icon: <></>,
    bgColor: 'bg-[#fbebeb]',
    fill: 'fill-[#eeabab]'
  },
  {
    name: 'Aseo',
    path: '/clear',
    icon: <></>,
    bgColor: 'bg-[#ccc7eb]',
    fill: 'fill-[#4d3da9]'
  },
  {
    name: 'Horario Clases',
    path: '/clear',
    icon: <></>,
    bgColor: 'bg-[#b5f4c5]',
    fill: 'fill-[#0b4a1b]'
  },
  {
    name: 'Mi Carpeta',
    path: 'https://drive.google.com/drive/u/1/folders/1xIDTMBccIcpx4zy7md4_9V9OqbsDKz9R',
    icon: File,
    bgColor: 'bg-[#f4f2b5]',
    fill: 'fill-[#4a480b]'
  }
];

export const Teachers = () => {
  const router = useRouter();
  const { getAllLogs } = useLog()
  const [listLogs, setListLogs] = useState<any>([])
  const { studentsIfTeacher } = useStudents()

  const todayLogs = useMemo(() => {
    return listLogs.filter((log: any) => isToday(new Date(log.createdAt)));
  }, [listLogs]);

  const lastWeekLogs = useMemo(() => {
    return listLogs.filter((log: any) =>
      isWithinInterval(new Date(log.createdAt), {
        start: subDays(startOfDay(new Date()), 7),
        end: subDays(startOfDay(new Date()), 1),
      })
    );
  }, [listLogs]);


  const loadLogs = async () => {
    const respo = await getAllLogs();
    setListLogs(respo);
  };

  const getStudent = useMemo(() => (id: string) => {
    return studentsIfTeacher.find((student: any) => student.id === id);
  }, [studentsIfTeacher]);

  const handleNavigation = (path: string) => {
    if (/^https?:\/\//.test(path)) {
      window.open(path, '_blank');
    } else {
      router.push(path);
    }
  };

  useEffect(() => {
    loadLogs()
  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [])

  const translateEnumToSpanish = (value: string) => {
    const translations = {
      NEWS: 'Bitácora',
      DELAY: 'Retardo',
      AUSENCIES: 'Ausencias',
      OBSEVATIONS: 'Observador',
    };
    //@ts-ignore
    return translations[value] || value;
  };

  const translateEnumRoute = (value: string) => {
    const translations = {
      NEWS: 'log',
      DELAY: 'delay',
      AUSENCIES: 'ausencies',
      OBSEVATIONS: 'observations',
    };
    //@ts-ignore
    return translations[value] || value;
  };

  const RenderLog = (log: any) => {
    console.log('log', log?.log)

    return (
      <Link className="bg-white border-[1px] p-2 my-2 rounded-sm shadow-md relative"
        href={`${translateEnumRoute(log?.log?.type)}/${log?.log?._id}`}
      >
        <div className="bg-green-300 text-green-800 w-20 rounded-lg text-center absolute right-1">
          <p className="text-xs py-2">{translateEnumToSpanish(log.log.type)}</p>
        </div>
        <div className="flex">
          <h3 className="font-bold mr-1 text-lg truncate w-60">{log?.log?.title}</h3>
        </div>
        <div>
          <p>Estudiantes:</p>
          {log?.log?.userId?.map((studentId: string) => {
            const student: any = getStudent(studentId);
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="flex">
                {/* <img
                  key={studentId}
                  //@ts-ignore
                  src={student?.imageUrl}
                  //@ts-ignore
                  alt={student?.name}
                  className="w-8 h-8 rounded-full border-2 border-white object-fill"
                /> */}
                <p key={studentId} className="flex items-center">
                  {student?.firstName}
                </p>
              </div>
            );

          }
          )}

        </div>
        <div className="flex">
          <h3 className="font-bold mr-1">Profesor:</h3>
          <span>{log?.log?.teacher}</span>
        </div>
      </Link>
    )
  }


  return (
    <div>
      <div className="flex overflow-x-auto py-2 space-x-4 my-4">
        {accessRapid.map((item, index) => (
          <div
            key={index}
            onClick={() => handleNavigation(item.path)}
            className="flex flex-col items-center cursor-pointer"
          >
            <div
              className={`p-3 rounded-full mb-1 flex items-center justify-center ${item.bgColor} text-white`}
              style={{ width: '50px', height: '50px' }}
            >
              {/* <item.icon width={24} height={24} className={item.fill} /> */}
            </div>
            <span className="text-xs text-center">{item.name}</span>

          </div>
        ))}
      </div>
      <div className="my-4">
        <h2 className="text-sm text-blue-600 font-bold">Hoy
          {
            format(new Date(), ' do MMMM', { locale: es })
          }
        </h2>
        {todayLogs && todayLogs.map((log: any) => (
          <RenderLog log={log} key={log._id} />
        ))}

        {todayLogs.length === 0 && <p className="text-gray-600 mt-3">No hay registros</p>}

        <h3 className="text-sm text-blue-600 font-bold mt-4">Última semana {format(subDays(new Date(), 7), 'do MMMM', { locale: es })} - {format(new Date(), 'do MMMM', { locale: es })}
        </h3>
        {lastWeekLogs && lastWeekLogs.map((log: any) => (
          todayLogs ? <RenderLog log={log} key={log._id} /> : <p key={log._id}>No hay registros</p>
        ))}

        {lastWeekLogs.length === 0 && <p className="text-gray-600 mt-3">No hay registros</p>}
      </div>
    </div>
  );
};

