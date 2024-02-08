import './App.css';
import Navbar from './components/Navbar';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import FAQs from './components/FAQs';
import DailyTasksTwo from './components/DailyTasksTwo';
// import Footer from './components/Footer';
import DailyTasks from './components/DailyTasks';


import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>  


            <Route path="/" element={isLoggedIn ? <Home /> : <LogIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>

            {/* sign up se log in jane ke liye be route ko "/" kiya hai "/login" ke bajaye
                because abhi bina authentication ke route clear karne me issues aarahe hain */}
            {/* <Route path="/login" element={<LogIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route> */}
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/faqs" element={<FAQs />}></Route>

            <Route path="daily-tasks" element={<DailyTasks/>}></Route>
            <Route path="daily-tasks2" element={<DailyTasksTwo/>}> </Route>

          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
