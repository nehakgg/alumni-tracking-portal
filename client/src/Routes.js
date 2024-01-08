import React from 'react';
import { Outlet,Route } from 'react-router-dom';
import Header from './Components/Header';
import Body from './Components/Body';
import TextEffect from './Components/TextEffect';
import NotableAlumni from './Pages/NotableAlumni';

const Routes = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  );
}

export default Routes;
