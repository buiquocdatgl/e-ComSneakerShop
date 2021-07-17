import React, {Suspense} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {pages} from './pages/pages'
import Header from './components/Layout/Header/Header';
import Sidebar from './components/Layout/Sidebar/Sidebar';
import Footer from './components/Layout/Footer/Footer';
import { useEffect } from 'react';
import { getSneakers } from './api/getSneakers';
import { db, userCollection } from './firebase/firebase';
import { useState } from 'react';
import firebase from './firebase/firebase';


function App() {

  const [sneakers, setSneakers] = useState([])
  // useEffect(() => {

  //   const getSneakers = () =>{
  //     var newReturn;
  //     const newdoc= userCollection.doc.then(data =>{
  //       const newData = data.docs.map(doc =>{
  //         if(doc.exists) return doc.data()
  //       })
  //       return setSneakers(newData)
  //     })

  //     return newReturn = newdoc;
  //   }
  //   setSneakers(getSneakers);
  //   console.log(setSneakers);
  // },[])

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
