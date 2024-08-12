import {StatusDTO} from "./StatusDTO";

export interface TaskDTO{
  id: number;
  title: string;
  description: string;
  status: StatusDTO;
}
