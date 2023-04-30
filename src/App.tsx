import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import './styles/tailwind.css';
import VerifyEmail from './Components/MainAppComponent/VerifyEmail';
import HomeAddressForm from './Components/MainAppComponent/HomeAddressForm';
import CreateProfile from './Components/MainAppComponent/CreateProfile';
import ProfilePage from './Components/MainAppComponent/ProfilePage';
import Login from './Components/MainAppComponent/Login';
import { ToastContainer } from 'react-toastify';

const appRouter = createBrowserRouter([
  {
    path:'/',
    errorElement: <Error/>,
    element: <Home/>,
  },
  {
    path:'contact',
    element: <Contact/>,
  },
  {
    path:'/About',
    element: <About/>,
  },
  {
    path:'login',
    element: <Login/>,
  },
  {
    path:'verifyemail',
    element: <VerifyEmail/>,
  },
  {
    path: 'addressForm',
    element: <HomeAddressForm/>
  },
  {
    path: 'CreateProfile',
    element: <CreateProfile/>
  },
  {
    path: 'profilePage',
    element: <ProfilePage/>
  }
])

function App() {
  return (
    <div>
      <ToastContainer/>
       <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
