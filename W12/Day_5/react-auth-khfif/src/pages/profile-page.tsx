import axios from "axios";

import { Button } from "@/components/ui/button";
import { SvgLoader } from "./signup-page";
import { useUser } from "@/lib/hooks";
import { mutate } from "swr";

export function Profile() {
  const { user, isLoading, isValidating } = useUser({ redirectTo: '/'});

  async function logout() {
    await axios
      .post("http://localhost:3030/api/auth/logout", "LOGOUT", {
        withCredentials: true,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
      await mutate(user);
      window.location.reload();
    // navigate("/");
  }

  return (
    <div className="w-full h-screen bg-white">
      <div className="h-full w-full bg-white text-black flex flex-col items-center justify-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Profile.
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Welcome back, if you want to logout, click{" "}
          <Button
            type="button"
            onClick={logout}
            className="relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
          >
            here
          </Button>
        </p>
        {isLoading || isValidating ? (
          <SvgLoader />
        ) : (
          user && (
            <>
              <p className="text-left">Your session:</p>
              <pre>{JSON.stringify(user.data, null, 2)}</pre>
            </>
          )
        )}
      </div>
    </div>
  );
}
