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
import { paths } from "./shared/config";
export const App = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  return (
    <div className="app">
      <Navbar />
      {isAuth ? (
        <Routes>
          <Route path={paths.ADD_HABIT} element={<AddHabit />} />
          <Route path={paths.ALL_HABIT} element={<AllHabit />} />
          <Route path={paths.PROFILE} element={<Profile />} />
          <Route path={paths.HABIT_DETAILS} element={<HabitDetails />} />
          <Route path={paths.MAIN} element={<Welcome />} />
          <Route path={paths.LOGIN} element={<Navigate to="/add-habbit" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={paths.MAIN} element={<Welcome />} />
          <Route path={paths.REGISTRATION} element={<Registration />} />
          <Route path="*" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      )}
    </div>
  );
};
