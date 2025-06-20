"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginInForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Email</FormLabel>
              <FormControl>
                <Input
                  className="md:h-[52px]"
                  placeholder="Enter you email"
                  {...field}
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
              <FormLabel className="font-bold">Password</FormLabel>
              <FormControl>
                <Input
                  className="md:h-[52px]"
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-[#60E5AE] hover:bg-[#498069] duration-500 text-black md:h-[60px] text-xl font-medium"
        >
          Login
        </Button>
      </form>

      <section className="flex justify-between mt-10 lg:mt-28 mb-4">
        <div className="flex items-center">
          <input
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500"
          />
          <label htmlFor="checked-checkbox" className="ms-2 text-[#667085]">
            Remember me
          </label>
        </div>
        <p className="text-[#667085] mt-2">Forgot password ?</p>
      </section>

      <div className="flex items-center my-5">
        <div className="flex-grow h-px bg-[#667085]" />
        <span className="mx-4 text-sm text-gray-500">Or</span>
        <div className="flex-grow h-px bg-[#667085]" />
      </div>

      <p className="text-center text-black text-sm">
        Don’t have an account?
        <Link href="/singup" className="font-bold text-xl ml-2">
          Sing Up
        </Link>
      </p>
    </Form>
  );
};

export default LoginInForm;
