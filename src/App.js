import React                          from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Alert}                        from "./components/Alert.js";
import {Navbar}                       from "./components/Navbar.js";
import {AlertState}                   from "./context/alert/AlertState.js";
import {FirebaseState}                from "./context/firebase/FirebaseState.js";
import {About}                        from "./pages/About.jsx";
import {Home}                         from "./pages/Home.jsx";


function App() {
   return (
      <FirebaseState>
         <AlertState>
            <BrowserRouter>
               <Navbar/>
               <div className="container pt-4">
                  <Alert/>
                  <Switch>
                     <Route path={'/'} exact component={Home}/>
                     <Route path={'/about'} component={About}/>
                  </Switch>
               </div>
            </BrowserRouter>
         </AlertState>
      </FirebaseState>         
   );
}

export default App;
