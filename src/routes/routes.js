import { Routes, Route } from "react-router-dom";
// PAGES!!
import Signup from "../pages/signup";
import Dashboard from "../pages/dashboard";
import Signin from "../pages/signin";
import Details from "../pages/credentials";
import FormPage from '../pages/formPage.js';


export const Router = () => {
   return (
      <Routes>
         <Route path="/" element={<Signin />} />
         <Route path="signup" element={<Signup />} />
         <Route path="dashboard" element={<Dashboard />} />
         <Route path="details" element={<Details />} />
         <Route path="formpage" element={<FormPage />} />
      </Routes>
   );
};
