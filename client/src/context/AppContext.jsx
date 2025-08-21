import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const AppContent = createContext();

const AppContextProvider = ({ children }) => {
  axios.defaults.withCredentials = true;

  const backendUrl = "https://mern-auth-backend-rp7b.onrender.com";
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(false);

  const getUserData = async () => {
  try {
    const { data } = await axios.get(`${backendUrl}/api/auth/me`);
    if (data.success) {
      setUserData(data.userData);
      setIsLoggedin(true);
    }
  } catch (err) {
    if (err.response?.status !== 401) {
      toast.error("Something went wrong");
    }
    setUserData(false);
    setIsLoggedin(false);
  }
};


  // ✅ Call on first render
  useEffect(() => {
  if (document.cookie.includes("token=")) {
    getUserData();
  }
}, []);


  const value = {
    backendUrl,
    isLoggedin,
    setIsLoggedin,
    userData,
    setUserData,
    getUserData,
  };

  return <AppContent.Provider value={value}>{children}</AppContent.Provider>;
};

export default AppContextProvider;
