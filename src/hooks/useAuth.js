import { useEffect, useState } from 'react'

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
  
    if(token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    
    setIsLoading(false);
  }, []);
  
  const login = async () => {
    setIsLoading(true);
    await sleep(2000);

    const fakeToken = "12345";
    localStorage.setItem("token", fakeToken);
    setIsLoggedIn(true);

    setIsLoading(false);
  }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }

  return {
    isLoggedIn,
    login,
    logout,
    isLoading
  }
}

export default useAuth;