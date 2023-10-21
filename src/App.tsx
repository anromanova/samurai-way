import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Sidebar/>
      <div className="app-wrapper__content">
        {/*<Profile/>*/}
        <Dialogs/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
