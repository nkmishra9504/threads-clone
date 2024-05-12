import { Button } from "@/components/ui/button";
import img from "../assets/threads-background.webp";
import instagram from "../assets/instagram.png";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "@/schemas/loginSchema";
import { z } from "zod";
import { Link } from "react-router-dom";

function Login() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="relative">
      <div className="absolute inset-0 border-2">
        <img src={img} alt="" className="w-full h-[510px]" />
      </div>
      <div className="absolute flex justify-center top-48 items-center w-full flex-col">
        <h1 className="font-bold">Login with your instagram account</h1>
        <div className="w-96 mt-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Username, phone or email"
                        {...field}
                        className="p-4 h-14 text-white rounded-xl bg-slate-800"
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
                    <FormControl>
                      <Input
                        placeholder="Password"
                        type="password"
                        {...field}
                        className="p-4 h-14 text-white rounded-xl bg-slate-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="w-full h-14 rounded-xl text-gray-300 bg-zinc-800"
                type="submit"
              >
                Log in
              </Button>
            </form>
          </Form>
          <div className="text-center text-gray-500 mt-2">
            <Link to="/">Forgot Password?</Link>
          </div>
        </div>
        <div className="flex justify-center items-center mt-3">
          <div className="w-44 h-[1px] bg-gray-300"></div>
          <div className="m-2">or</div>
          <div className="w-44 h-[1px] bg-gray-300"></div>
        </div>
        <div className="w-full flex justify-center items-center mt-4">
          <div className="w-96 flex justify-start items-center border border-gray-300 gap-9 p-4 rounded-xl cursor-pointer">
            <div className="w-[15%]">
              <img src={instagram} alt="" className="h-14" />
            </div>
            <div className="font-bold">Continue with instagram</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
