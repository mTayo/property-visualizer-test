import { lazy } from 'react';


import { Navigate } from 'react-router-dom';
import HomePageLayout from 'Layout/HomeLayout';
import Loadable from 'components/common/Loadable';


// ===========================|| DASHBOARD ROUTING ||=========================== //

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