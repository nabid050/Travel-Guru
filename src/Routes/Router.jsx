import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/Home/Home";
import TourDetails from "../Components/TourDetails/TourDetails";
import Flights from './../Components/Flights/Flights';
import Hotels from "../Components/Hotels/Hotels";
import Tours from "../Components/Tours/Tours";
import Visa from "../Components/Visa/Visa";
import VisaDetails from "../Components/Visa/VisaDetails";
import VisaApplyForm from "../Components/Visa/VisaApplyForm";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
         path: "tours",
        Component: Tours,
      },
  {
    path: "/tour/:slug",
    component: TourDetails,
  },
  {
        path: "/flights",
        Component: Flights,
      },
      {
        path: "hotels",
        Component: Hotels,
      },
      {
        path: "visa",
        Component: Visa,
      },

      {
        path: "visa/:slug",
        Component: VisaDetails,
      },

      {
        path: "visa/apply/:slug",
        Component: VisaApplyForm,
      }]);