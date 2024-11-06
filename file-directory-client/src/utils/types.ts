
export interface IFolderStructure {
  id?:number | string;
  name: string;
  type: 'folder' | 'file';
  parentId?: number | null,
  children?: IFolderStructure[];
}

export interface IFolderResponse {
  status?: string | null;
  message?: string;
  data?: IFolderStructure;
}


export interface RenameDirectoryArgs {
    id: number;
    data: IFolderStructure;
}

export interface FileDirectoryProps {
  folderData: IFolderStructure;
  refresh: () => void;
}

export interface InputProps {
  name?: string;
  saveDirectory: (name: string) => void;
  cancel: () => void;
}

export interface DeleteDirectoryParams {
    id: number;
    type: string;
}