import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Profile} from "./components/Profile/Profile";
import {Footer} from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Sidebar/>
        <div className="app-wrapper__content">
          <Route component={Profile} path={'/profile'}/>
          <Route component={Dialogs} path={'/dialogs'}/>
          <Route component={News} path={'/news'}/>
          <Route component={Music} path={'/music'}/>
          <Route component={Settings} path={'/settings'}/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
