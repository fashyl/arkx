import { SignupButton } from "./buttons/signup-button";
// import { LogoutButton } from "./buttons/logout-button";
import { LoginButton } from "./buttons/login-button";
// import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  // const { user, isAuthenticated, isLoading } = useAuth0(); 
  return (
    <nav className="navbar">
      <div className="brand">Phonebook</div>
      <div className="buttons">
        {/* {!isAuthenticated && console.log(isAuthenticated) && ( */}
          <>
            <SignupButton />
            <LoginButton />
          </>
        {/* )} */}
        {/* {!isLoading && user && ( */}
          <>
            {/* <LogoutButton /> */}
          </>
        {/* )} */}
      </div>
    </nav>
  );
};

export default Navbar;
