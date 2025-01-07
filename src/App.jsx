import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./componants/Body";
import Login from "./componants/Login";
import Profile from "./componants/Profile";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}> 
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile />} />          
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
