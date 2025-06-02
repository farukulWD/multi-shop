import { useState } from "react";
import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { OctagonAlertIcon } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z.string().min(2).email("Invalid email address"),
  password: z.string().min(1, "Password must be required"),
  rememberMe: z.boolean().optional().default(false),
});

export default function Signin() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);


  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    setPending(true);
    setError(null);
    console.log({data})
    // try {
    //   const response = await api.post("/auth/signin", data);
    //   console.log(response.data);
    //   await api.get("/auth/profile").then((res) => setUser(res.data));
    //   navigate("/");
    // } catch (err) {
    //   if (
    //     err &&
    //     typeof err === "object" &&
    //     "response" in err &&
    //     err.response &&
    //     typeof err.response === "object" &&
    //     "data" in err.response &&
    //     err.response.data &&
    //     typeof err.response.data === "object" &&
    //     "message" in err.response.data
    //   ) {
    //     setError((err.response as any).data.message);
    //   } else {
    //     setError("Signin failed");
    //   }
    // } finally {
    //   setPending(false);
    // }
  };

  return (
    <div className="flex flex-col gap-6">
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="p-6 md:p-8"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center justify-center ">
                  <h1 className="text-2xl   font-bold">Welcome Back</h1>
                  <p className="text-muted-foreground text-balance ">
                    Login to your account
                  </p>
                </div>
                <div className="grid gap-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            placeholder="m@example.com"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            {...field}
                            placeholder="*********"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2">
                        <FormControl>
                          <Checkbox
                            id="rememberMe"
                            checked={field.value}
                            onCheckedChange={(checked) =>
                              field.onChange(checked)
                            }
                            onBlur={field.onBlur}
                            name={field.name}
                            ref={field.ref}
                            className=""
                          />
                        </FormControl>
                        <FormLabel className="text-sm">Remember me</FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
                {!!error && (
                  <Alert className="bg-destructive/10 border-none">
                    <OctagonAlertIcon className="h-4 w-4 !text-destructive" />

                    <AlertTitle className="">{error}</AlertTitle>
                  </Alert>
                )}
                <Button
                  disabled={pending}
                  type="submit"
                  className="w-full bg-radial from-green-700 to bg-green-900  cursor-pointer"
                >
                  Sign In
                </Button>

                <div className="text-sm  text-center">
                  Don&apos;t have an account?{" "}
                  <Link
                    to={"/auth/sign-up"}
                    className="underline underline-offset-4"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </form>
          </Form>
          <div className="bg-radial from-green-700 to bg-green-900 relative hidden md:flex flex-col gap-y-4 items-center justify-center">
            <img src="/logo.svg" alt="meet ai" className="h-[90px] w-[90px]" />
            <p className="font-semibold text-white text-2xl">Multi Shop</p>
          </div>
        </CardContent>
      </Card>

      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of services</a>{" "}
        and <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
}
