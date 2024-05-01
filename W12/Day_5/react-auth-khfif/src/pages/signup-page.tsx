import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios"

// shadcn UI
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  // All properties are required by default.
  email: z.string().email(),
  password: z.string().min(8),
  firstname: z.string().trim(),
  lastname: z.string().regex(/^[A-Z]{1}[a-z\s]{3,23}/gm, "Invalid name format.").trim(),
});

type FormFields = z.infer<typeof schema>;

export function SvgLoader() {
  return (
    <svg
      width="24"
      height="24"
      stroke="#000"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="spinner_V8m1">
        <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3"></circle>
      </g>
    </svg>
  );
}

export function SignupForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await axios.post('http://localhost:3030/api/auth/signup', data);
      navigate('/login')
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  {...register("firstname")}
                  id="firstname"
                  placeholder="Mohammed"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  {...register("lastname")}
                  id="lastname"
                  placeholder="Benj"
                  required
                  />
              </div>
            </div>
                  {errors.firstname && (
                    <div className="text-red-500 text-xs">{errors.firstname.message}</div>
                  ) || errors.lastname && (
              <div className="text-red-500 text-xs">{errors.lastname.message}</div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email")}
                id="email"
                type="email"
                placeholder="johndoe@domain.com"
                required
              />
            </div>
            {(errors.email && (
              <div className="text-red-500 text-xs">{errors.email.message}</div>
            )) ||
              (errors.root && (
                <div className="text-red-500 text-xs">{errors.root.message}</div>
              ))}
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input {...register("password")} id="password" type="password" />
            </div>
            {errors.password && (
              <div className="text-red-500 text-xs">{errors.password.message}</div>
            )}
            <Button disabled={isSubmitting} type="submit" className="w-full">
              {isSubmitting ? (
                <div>
                  <SvgLoader />
                </div>
              ) : (
                "Create an account"
              )}
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Log in
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
