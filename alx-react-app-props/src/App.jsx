import ProfilePage from "./components/ProfilePage";
import { MyContext } from "./components/UserContext";
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <MyContext.Provider value={userData}>
      <ProfilePage />;
    </MyContext.Provider>
  );
}

export default App;
