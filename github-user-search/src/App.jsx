import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
//import { useSilentAuth } from "./services/useSilentRefresh";
import ProtectedRoute from "./components/ProtectedRoute";
import PrivateRoute from "./components/PermissionRoute";
import SearchResult from "./components/searchResult";
function App() {
  //useSilentAuth();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                {/* this is the default route */}
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/searchResults" element={<SearchResult />} />
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin" element={<div>Admin Page</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
