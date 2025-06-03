import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import api from "../api/axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Eye, EyeOff, OctagonAlertIcon } from "lucide-react";

// Define schema with zod
const formSchema = z.object({
  username: z.string().min(2, "Username is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/\d/, "Must contain at least one number.")
    .regex(/[!@#$%^&*(),.?":{}|<>]/, "Must contain one special character."),
  shops: z
    .array(z.object({ name: z.string().min(3, "Shop name is required") }))
    .min(3, "You must add at least 3 shops")
    .max(4, "You can add up to 4 shops"),
});

export default function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  type SignupFormValues = z.infer<typeof formSchema>;

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      shops: [{ name: "" }, { name: "" }, { name: "" }],
    },
    mode: "onChange",
  });

  const { watch } = form;

  const {
    fields: shopFields,
    append,
    remove,
    update,
  } = useFieldArray({
    control: form.control,
    name: "shops",
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    setError(null);
    setPending(true);
    try {
      const payload = { ...data, shops: data.shops.filter(Boolean) };
      const res = await api.post("/user/sign-up", payload);
      alert(res.data.message);
      navigate("/signin");
    } catch (err) {
      if (err) console.log(err);
    } finally {
      setPending(false);
    }
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
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-2xl font-bold">Create Account</h1>
                  <p className="text-muted-foreground text-balance">
                    Signup to get started
                  </p>
                </div>

                <div className="grid gap-3">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="yourname" />
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
                          <div className="relative">
                            <Input
                              type={showPassword ? "text" : "password"}
                              {...field}
                              placeholder="*********"
                              className="pr-10"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword((prev) => !prev)}
                              className="absolute cursor-pointer  right-2 top-1/2 -translate-y-1/2 text-sm text-muted-foreground focus:outline-none"
                            >
                              {showPassword ? (
                                <EyeOff className="w-4  h-4" />
                              ) : (
                                <Eye className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {!!error && (
                    <Alert className="bg-destructive/10 border-none">
                      <OctagonAlertIcon className="h-4 w-4 !text-destructive" />
                      <AlertTitle>{error}</AlertTitle>
                    </Alert>
                  )}

                  {shopFields.map((field, index) => (
                    <FormField
                      key={field.id}
                      control={form.control}
                      name={`shops.${index}.name`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Shop {index + 1}{" "}
                            {shopFields.length > 3 &&
                              index === shopFields.length - 1 && (
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  className="ml-2 text-destructive"
                                  onClick={() => remove(index)}
                                >
                                  Remove
                                </Button>
                              )}
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder={`Shop ${index + 1}`}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}

                  {shopFields.length < 4 && (
                    <Button
                      type="button"
                      onClick={() => append({ name: "" })}
                      variant="outline"
                      size="sm"
                    >
                      + Add Shop
                    </Button>
                  )}
                </div>

                {!!error && (
                  <Alert className="bg-destructive/10 border-none">
                    <OctagonAlertIcon className="h-4 w-4 !text-destructive" />
                    <AlertTitle>{error}</AlertTitle>
                  </Alert>
                )}

                <Button
                  disabled={pending}
                  type="submit"
                  className="w-full bg-radial from-green-700 to bg-green-900"
                >
                  Sign Up
                </Button>

                <div className="text-sm text-center">
                  Already have an account?{" "}
                  <a
                    href="/auth/sign-in"
                    className="underline underline-offset-4 text-primary"
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </form>
          </Form>

          <div className="bg-radial from-green-700 to bg-green-900 relative hidden md:flex flex-col gap-y-4 items-center justify-center">
            <img src="/logo.svg" alt="logo" className="h-[90px] w-[90px]" />
            <p className="font-semibold text-white text-2xl">Multi Shop</p>
          </div>
        </CardContent>
      </Card>

      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By signing up, you agree to our <a href="#">Terms of services</a> and{" "}
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
}
