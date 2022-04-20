import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Routes, Route } from "react-router-dom"
import Footer from "./components/footer/Footer";
import { Context } from "./context/Context";
import { useContext } from "react";

function App() {
  const {user} = useContext(Context);
  return (
    
      <div> 
          <TopBar />
        <main>
          <Routes>
              <Route  path='/' element={<Home />} />
              <Route  path='/login' element={user ? <Home /> :<Login />} />
              <Route  path='/register' element={user ? <Home /> : <Register />} />
              <Route  path='/settings' element={user ? <Settings /> :<Register />} />
              <Route  path='/write' element={user ? <Write /> :<Register />} />
              <Route  path='/post/:postId' element={<Single />} />
          </Routes>
        </main>
        <Footer />
      </div>
     
     
  );
}

export default App;
