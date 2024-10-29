import "./App.css";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
import { Mosaic } from "react-loading-indicators";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Mosaic color="#32cd32" size="medium" text="" textColor="" />
      </div>
      
    );
  } else {
    return (
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>
            {/* TODO */}
            < Outlet />
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
