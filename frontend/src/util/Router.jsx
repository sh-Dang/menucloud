import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
import Table from "../pages/Table/Table";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path:"table",
        element: <Table/>
      }

      // 여기에 다른 페이지 라우트를 추가할 수 있습니다.
      // 예: { path: "login", element: <LoginPage /> }
    ],
  },
]);

export default router;
