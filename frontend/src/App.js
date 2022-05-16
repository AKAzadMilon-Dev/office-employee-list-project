import EmployeeList from './components/EmployeeList';
import { Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import TodaysClass from './components/TodaysClass';
import PostActivity from './components/PostActivity';
import ActivityList from './components/ActivityList';

function App() {
  return (
    <>
        {/* <Menu></Menu> */}
        <Routes>
          <Route path="/employeelist" element={<EmployeeList />} />
          <Route path="/todaysclass" element={<TodaysClass />} />
          <Route path="/postactivity" element={<PostActivity />} />
          <Route path="/activitylist" element={<ActivityList />} />
        </Routes>
    </>
  );
}

export default App;
