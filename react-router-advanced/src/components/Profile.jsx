import { Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";
function Profile() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Profile Page</div>}>
          <Route path="/details" element={<ProfileDetails />} />
          <Route path="/settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </>
  );
}
export default Profile;
