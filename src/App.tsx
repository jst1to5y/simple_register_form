import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";
import { UserDetails } from "./components/UserDetails";
import { IUserData } from "./components/interfaces";

function App() {
  const companyName = "Logo";
  const about = "About Us";
  const [isLogged, setIsLogged] = useState(false);

  // Collect all useState in one State
  const [userData, setUserData] = useState<IUserData>({
    email: "",
    userName: "",
    password: "",
    address: "",
    phone: "",
    fullName: "",
  });

  return (
    <>
      <Navbar
        companyTxt={companyName}
        aboutTxt={about}
        isLogin={isLogged}
        setIsLogin={setIsLogged}
      />

      {isLogged ? (
        <UserDetails user={userData} />
      ) : (
        <RegisterForm
          setIsLoggedIn={setIsLogged}
          userData={userData}
          setUserData={setUserData}
        />
      )}
    </>
  );
}

export default App;
