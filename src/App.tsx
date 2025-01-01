import { Navbar } from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router";
import { Welcome } from "./components/pages/Welcome/Welcome";
import { Login } from "./components/pages/Sign In/Login/Login";
import { Registration } from "./components/pages/Sign In/Registration/Registration";
import { AddHabit } from "./components/pages/AddHabit/AddHabit";
import { AllHabit } from "./components/pages/AllHabit/AllHabit";
export const App = () => {
  return (
    <div className="app">
      <Navbar />
     
      <Routes>
        
        <Route path="/" element={<Welcome/>} />
        <Route path="/add-habbit" element={<AddHabit/>} />
        <Route path="/all-habbit" element={<AllHabit/>}/>
        <Route path="/profile" />
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>} />
      </Routes>
    </div>
  );
};
