import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/root";
import Directory from "./pages/directory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Directory />
        ),
      },
    ],
  },
]);

export default router;
