import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SvgLoader } from "./signup-page";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import axios from "axios";

const schema = z.object({
  // All properties are required by default.
  email: z.string().email(),
  password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

export function LoginForm() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const response = await axios.post('http://localhost:3030/api/auth/login', data);
      console.log(response.data);
      navigate('/profile');
    } catch (error: unknown) {
      console.error(error);
      setError("password", {
        message: 'Invalid credentials.'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email")}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                {...register("password")}
                id="password"
                type="password"
                required
              />
            </div>
            {errors.email && (
                <div className="text-red-500 text-xs">
                  Invalide email or password.
                </div>
              ) || errors.password && (
                <div className="text-red-500 text-xs">
                  Invalide email or password.
                </div>
              )}
            <Button disabled={isSubmitting} type="submit" className="w-full">
            { isSubmitting ? <div><SvgLoader /></div> : "Login" }
            </Button>
            <Button variant="outline" className="w-full">
             Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
