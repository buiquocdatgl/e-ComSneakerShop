import React, {lazy, Suspense} from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {pages} from './pages/pages'
import Header from './components/Layout/Header/Header';
import Sidebar from './components/Layout/Sidebar/Sidebar';
import Footer from './components/Layout/Footer/Footer';


function App() {
  return (
    <Suspense fallback={ <div>...loading</div> }>
          <Router>
            <Header />
            <Sidebar />
            <div className="ground-container">
              <div className="main-container">
                <Switch>
                  {pages.map((page) => (
                    <Route path={page.path} exact={page.exact} component={page.component} />
                  ))}
                </Switch>
                <Footer />
              </div>
            </div>
          </Router>
    </Suspense>
  );
}

export default App;
