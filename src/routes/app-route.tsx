import { lazy } from 'react';
import HomePageLayout from 'Layout/HomeLayout';
import Loadable from 'components/common/Loadable';


// ===========================||  ROUTING ||=========================== //

const HomePage = Loadable(lazy(() => import("pages/Home")));



export const HomeRoutes = {
  path: "/",
  element:<HomePageLayout />,
  children: [
    {
        path: '/',
        element: <HomePage />,
    },
    
  ],
};