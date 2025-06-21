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
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const formSchema = z
  .object({
    email: z.string().email("Invalid email"),
    newPassword: z.string().min(6, "Password must be at least 6 characters"),
    newConfirmPassword: z.string().min(6, "Confirm password is required"),
  })
  .refine((data) => data.newPassword === data.newConfirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

const ResetPasswordForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      newPassword: "",
      newConfirmPassword: "",
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/reset-password`,
        values,
        {
          withCredentials: true,
        }
      );

      toast.success("Password reset successfully. Please log in.");
      form.reset();
      router.push("/login");
    } catch (error: any) {
      const message =
        error.response?.data?.message || "Login failed. Please try again.";
      toast.error(message);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Email Address</FormLabel>
              <FormControl>
                <Input
                  className="xl:h-[52px]"
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Enter New Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    className="xl:h-[52px] pr-12 w-full"
                    {...field}
                  />
                  {isPasswordVisible ? (
                    <IoEyeOutline
                      className="absolute top-1/2 -translate-y-1/2 right-4 text-xl text-[#777777] dark:text-slate-400 cursor-pointer"
                      onClick={() => setIsPasswordVisible(false)}
                    />
                  ) : (
                    <IoEyeOffOutline
                      className="absolute top-1/2 -translate-y-1/2 right-4 text-xl text-[#777777] dark:text-slate-400 cursor-pointer"
                      onClick={() => setIsPasswordVisible(true)}
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="newConfirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Confirm Your Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={isConfirmVisible ? "text" : "password"}
                    placeholder="Re-enter your password"
                    className="xl:h-[52px] pr-12 w-full"
                    {...field}
                  />
                  {isConfirmVisible ? (
                    <IoEyeOutline
                      className="absolute top-1/2 -translate-y-1/2 right-4 text-xl text-[#777777] dark:text-slate-400 cursor-pointer"
                      onClick={() => setIsConfirmVisible(false)}
                    />
                  ) : (
                    <IoEyeOffOutline
                      className="absolute top-1/2 -translate-y-1/2 right-4 text-xl text-[#777777] dark:text-slate-400 cursor-pointer"
                      onClick={() => setIsConfirmVisible(true)}
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full cursor-pointer bg-[#60E5AE] hover:bg-[#498069] duration-500 text-black xl:h-[60px] text-xl font-medium"
        >
          Reset Password
        </Button>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
