"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next/client";
import { toast } from "sonner";
import { myFetch } from "@/utils/myFetch";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    }

    const res = await myFetch("/auth/login", {
      method: "POST",
      body: payload
    })

    // console.log("Response Data:", res);
    if (res.success) {
      setCookie("accessToken", res?.data?.accessToken);
      setCookie("userRole", res?.data?.role);
      toast.success("Login successful!");
      router.push("/");
    } else {
      toast.error(res.message || "Failed to login.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md">

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900">
          Welcome Back
        </h1>

        <p className="text-gray-500 text-sm mt-1 mb-6">
          Sign in to your Admin account to manage chefs and bookings.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>

            <input
              type="email"
              required
              placeholder="Enter your email address"
              {...register("email")}
              className="w-full bg-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black/20"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                {...register("password")}
                className="w-full bg-gray-200 rounded-xl px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-black/20"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-linear-to-r from-gray-800 to-gray-900 text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>

        </form>
      </div>
    </div>
  );
}
