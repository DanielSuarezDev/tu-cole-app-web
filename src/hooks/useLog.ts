import { ILog } from "@/common/interface/log";
import { createLogServices, getAllLogsServices } from "@/services/log/log.service";

export const useLog = () => {
  const createLog = async (data: ILog) => {
    const response = await createLogServices(data);
    return response;
  };

  const getAllLogs = async () => {
    const response = await getAllLogsServices();
    return response;
  }
  return { createLog, getAllLogs };
};
