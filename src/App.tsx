import React, { useState } from 'react';
import Math from './components/Math';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { SidebarData } from './components/SidebarData';
import DemoContent from './pages/DemoContent';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                {
                    SidebarData.map((item) => {
                        return (
                            <Route path={item.path} exact>
                                <DemoContent title={item.title} />
                            </Route>
                        )
                    })
                }
            </Switch>
        </Router>
    );
}

export default App;
