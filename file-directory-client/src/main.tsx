import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import router from "./router";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (_, query) => {
      console.log("query", query.meta);
      if (query.meta?.errorMessage) {
        toast.error(
          (query.meta.errorMessage as unknown as string) ??
          "Something went wrong!"
        );
      }
    },
  }),
});


ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={ queryClient }>
    <RouterProvider router={ router } />
    <Toaster />
  </QueryClientProvider>
);
