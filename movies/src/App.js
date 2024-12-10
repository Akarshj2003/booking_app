import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import HomePage from "./components/HomePage.js";
import Movies from "./components/Movies/Movies.js";
import Admin from "./components/Admin/Admin.js";
import Auth from "./components/Auth/Auth.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { adminActions, userActions } from "./store/intex.js";


function App() {
  const dispatch = useDispatch()
  const isAdminLoggedIn =useSelector((state)=>state.admin.isLoggedIn);
  const isUserLoggedIn =useSelector((state)=>state.user.isLoggedIn);
  console.log(isAdminLoggedIn)
  console.log(isUserLoggedIn)
  useEffect(()=>{
    if(localStorage.getItem("userId")){
      dispatch(userActions.login());
    }else if (localStorage.getItem("adminId")){
      dispatch(adminActions.login());
    }
  })
  return (
    <div >
      <Header/>
      <section>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/auth" element={<Auth/>}/>
        </Routes>
      </section>
    </div>
  );
}

export default App;
