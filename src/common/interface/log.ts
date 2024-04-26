export enum VitacoreEnum {
  NEWS = 'NEWS',
  DELAY = 'DELAY',
  AUSENCIES = 'AUSENCIES',
  OBSEVATIONS = 'OBSEVATIONS',
}


export interface ILog {
  title: string;
  text: string;
  status: boolean;
  type: VitacoreEnum;
  radicate: string;
  teacher?: string;
}
