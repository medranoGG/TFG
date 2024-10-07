import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Lets play",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2,
    title: "Dashboard",
    newTab: false,
    path: "/#featuresTab",
  },
  {
    id: 3,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 3.1,
        title: "Sign In",
        newTab: false,
        path: "/auth/login",
      },
      {
        id: 3.2,
        title: "Sign Up",
        newTab: false,
        path: "/auth/register",
      },
      {
        id: 3.3,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },
];

export default menuData;
