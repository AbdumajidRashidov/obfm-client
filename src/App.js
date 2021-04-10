import React from 'react'
import { BrowserRouter, Route, useHistory, Switch, Router } from 'react-router-dom'
import './Styles/main.scss';
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Home from './Components/Home/Home'
import AboutFond from './Components/AboutFond/AboutFond'
import Statistica from './Components/Statistica/Statistica'
import PressService from './Components/PressService/PressService'
import VolunteerHelp from './Components/VolunteerHelp/VolunteerHelp'
import Mediateka from './Components/Mediateka/Mediateka'
import Contact from './Components/Contact.js/Contact' 
import UsefulLinks from './Components/UsefulLinks'
import Footer from './Components/Footer';

const Routing = ()=>{
  const history = useHistory()
  
  return (
   
    <Switch>
      <Route path="/" exact>
          <Home></Home>
      </Route>
      <Route path="/aboutfond">
        <AboutFond></AboutFond>
      </Route>
      <Route path="/uzbnews">
          <Home></Home>
      </Route>
      <Route path="/worldnews">
          <Home></Home>
      </Route>
      <Route path="/saxovatnews">
          <Home></Home>
      </Route>
      {/* <Route path="/statistica">
        <Statistica></Statistica>
      </Route>
      <Route path="/press-service">
        <PressService></PressService>
      </Route>
      <Route path="/volunteer-help">
        <VolunteerHelp></VolunteerHelp>
      </Route> */}
      <Route path="/mediateka">
        <Mediateka></Mediateka>
      </Route>
      <Route path="/fotogalereya">
        <Mediateka></Mediateka>
      </Route>
      <Route path="/contact">
        <Contact></Contact>
      </Route>
    </Switch>
      
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar/>
        <Routing />
        <UsefulLinks/>
        <Footer/>
      </BrowserRouter>
    </div>
    
    
    // <div className="App">
    //   
    //   <BrowserRouter>
    //     <Navbar/>
    //     <Router>
    //       <Switch>
    //         <Route exact path="/">
    //           <Home/>
    //         </Route>
    //       </Switch>
    //     </Router>
    //   </BrowserRouter>
      
    // </div>
  );
}

export default App;
