import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomeMenu from "../pages/HomeMenu";
import Penelitian from "../pages/Penelitian";
import Pengabdian from "../pages/Pengabdian";
import Mahasiswa from "../pages/Mahasiswa";
import Dosen from "../pages/Dosen";
import Prestasi from "../pages/Prestasi";
import Publikasi from "../pages/Publikasi";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomeMenu />,
  },
  {
    path: "/penelitian",
    element: <Penelitian />,
  },
  {
    path: "/pengabdian",
    element: <Pengabdian />,
  },
  {
    path: "/mahasiswa",
    element: <Mahasiswa />,
  },
  {
    path: "/dosen",
    element: <Dosen />,
  },
  {
    path: "/prestasi",
    element: <Prestasi />,
  },
  {
    path: "/penelitian/publikasi",
    element: <Publikasi />,
  },
]);
