
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./component/Auth"
import Signup  from "./component/signup";
import Home2 from "./component/home";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
    <UserAuthContextProvider>
      <Routes>
        <Route path="/auth" element={<Auth/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<ProtectedRoute><Home2 /></ProtectedRoute>} />
      </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  )
}

export default App