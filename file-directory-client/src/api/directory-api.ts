import API from ".";
import { IFolderStructure } from "../utils/types";

export async function addDirectory(data:IFolderStructure) {
  const response = await API.post("directory", data);
  return response.data;
}
export async function renameDirectory(id:number,data: IFolderStructure) {
  const response = await API.put(`directory/${id}`, data);
  return response.data;
}

export async function deleteDirectory(id: number,type:string) {
  const response = await API.delete(`directory/${id}`, {
    data:{type}
  });
  return response.data;
}