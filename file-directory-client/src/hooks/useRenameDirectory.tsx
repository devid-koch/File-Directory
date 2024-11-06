import { renameDirectory } from "../api/directory-api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { RenameDirectoryArgs } from "../utils/types";

const useRenameDirctory = () => {
    return useMutation({
        mutationFn: ({ id, data }: RenameDirectoryArgs) => renameDirectory(id, data),
        onSuccess: (data) => {
            if (data) {
                toast.success("Folder renamed successfully");
            } else {
                toast.error(data?.message ?? "Something went wrong");
            }
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};

export default useRenameDirctory;
