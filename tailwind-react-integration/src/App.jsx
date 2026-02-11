import "./App.css";
import DynamicPositionButton from "./components/button";
import Profile from "./components/profile";
import UserProfile from "./components/UserProfile";
import RunawayButton from "./components/button";

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      {/* <UserProfile /> */}
      <Profile />
      {/* <RunawayButton /> */}
    </div>
  );
}

export default App;
