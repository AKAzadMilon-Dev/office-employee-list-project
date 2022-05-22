import { Routes, Route } from "react-router-dom";
import EmployeeList from './components/EmployeeList';
import TodaysClass from './components/TodaysClass';
import PostActivity from './components/PostActivity';
import ActivityList from './components/ActivityList';
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employeelist" element={<EmployeeList />} />
        <Route path="/todaysclass" element={<TodaysClass />} />
        <Route path="/postactivity" element={<PostActivity />} />
        <Route path="/activitylist" element={<ActivityList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
