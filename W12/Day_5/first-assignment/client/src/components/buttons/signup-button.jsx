import { useAuth0 } from "@auth0/auth0-react";

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/phonebook",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <button className="nav-button" onClick={handleSignUp}>
      Sign Up
    </button>
  );
};