import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteDirectory } from '../api/directory-api';
import { DeleteDirectoryParams } from '../utils/types';


const useDeleteDirectory = () => {
    return useMutation({
        mutationFn: ({ id, type }: DeleteDirectoryParams) => deleteDirectory(id, type),
        onSuccess: (data) => {
            if (data) {
                toast.success("Directory deleted successfully");
            } else {
                toast.error("Something went wrong");
            }
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
};

export default useDeleteDirectory;
