import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/",
        element: <p className='text-white-default' >hello fff</p>,
      },
    ],
  },
]);
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Root from './routes/route.tsx';
import ErrorPage from './routes/ErrorPage.tsx';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(

  <QueryClientProvider client={queryClient}>

    <RouterProvider router={router} />
  </QueryClientProvider>


)
