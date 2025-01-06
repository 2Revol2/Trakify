import { Navbar } from "./components/Navbar/Navbar";
import { Navigate, Route, Routes } from "react-router";
import { Welcome } from "./pages/Welcome/Welcome";
import { Login } from "./pages/Auth/Login/Login";
import { Registration } from "./pages/Auth/Registration/Registration";
import { AddHabit } from "./pages/AddHabit/AddHabit";
import { AllHabit } from "./pages/AllHabit/AllHabit";
import { HabitDetails } from "./pages/HabitDetails/HabitDetails";
import { useState } from "react";
import { Profile } from "./pages/Profile/Profile";
export const App = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  return (
    <div className="app">
      <Navbar />
      {isAuth ? (
        <Routes>
          <Route path="/add-habbit" element={<AddHabit />} />
          <Route path="/all-habbit" element={<AllHabit />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/habit/:name" element={<HabitDetails />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Navigate to="/add-habbit" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      )}
    </div>
  );
};
