import { addDirectory } from "../api/directory-api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useAddDirctory = () => {
    return useMutation({
        mutationFn: addDirectory,
        onSuccess: (data) => {
            if (data) {
                toast.success("Folder added successfully");
            } else {
                toast.error(data?.message ?? "Something went wrong");
            }
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};

export default useAddDirctory;
