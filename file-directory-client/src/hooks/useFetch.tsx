import { useQuery } from "@tanstack/react-query";
import { IFolderResponse } from "../utils/types";
import API from "../api";

export default function useFetch() {
  async function fetchFolderStructure(): Promise<IFolderResponse> {
    const response = await API.get(
      "folder-structure",
    );
    return response.data;
  }

  const query = useQuery({
    queryKey: ["FOLDER_STRUCTURE"],
    queryFn: fetchFolderStructure,
    meta: {
      errorMessage: "Failed to fetch folder structure",
    },
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
  });

  return {
    isLoading: query?.isLoading,
    refresh: query.refetch || (() => { }),
    //@ts-ignore
    data: query?.data?.structure || [],
  };
}
