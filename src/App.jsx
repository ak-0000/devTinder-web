import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Body from "./body";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}> 

          {/* to create the children routes */}
          {/* use outlet at login and profile component to make this route work  */}
          <Route path="/login" element={<Login />}/>   
          <Route path="/profile" element={<Profile />}/> 

          </Route>
          <Route path="/login" element={<div>login page </div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
