"use client";

import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import { loginUser } from "@/app/utils/api/auth";
import { useAuth } from "@/app/context/AuthContext";
import Swal from "sweetalert2";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

// handle register click

const Page = () => {
  const [formError, setFormError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // const onSubmit = (data) => console.log("User Data:", data);

  const handleLoginClick = async (data) => {
    try {
      const res = await loginUser(data);
      const values = getValues();
      const {user, token} = res.data;
      login(user, token);
      Swal.fire({
        icon: "success",
        title: "Login Successfull",
        timer: 1000,
      });

      console.log("API responce", res.data);

      if (!values.email || !values.password || Object.keys(errors).length > 0) {
        setFormError("Please fill out the form correctly before login");
      } else {
        setFormError("");
        router.push("/");
        setInterval(5000);
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: err.response?.data?.error,
      });
    }
  };

  return (
    <>
      <section className=" pt-10">
        <div className="form-container p-5">
          <div className="flex flex-col gap-12 form">
            <Link href="/register">
              <FaArrowLeft />
            </Link>
            <div className="flex flex-col gap-6">
              <h3 className=" font-medium md:text-4xl ">
                Log in to Asquarez Tech
              </h3>
              <p className="font-normal text-base">Enter your details below</p>
            </div>
            <form
              className="flex flex-col gap-10"
              onSubmit={handleSubmit(handleLoginClick)}
            >
              <input
                type="email"
                placeholder="Email"
                className="form-input outline-none pb-4"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-800">{errors.email.message}</span>
              )}

              <input
                type="password"
                placeholder="Password"
                className="form-input outline-none pb-4"
                {...register("password")}
              />
              {errors.password && (
                <span className="text-red-800">{errors.password.message}</span>
              )}
              <button
                type="submit"
                className="text-center bg-redShades-200 rounded-md py-4 px-12 text-greyShades-300"
              >
                Log in
              </button>
            </form>
            <div className="flex items-center flex-col   justify-between">
              <div>
                <p>
                  Don't have an account?
                  <Link href="/auth/signup" className=" underline">
                    Sign Up
                  </Link>
                </p>
              </div>
              <Link
                href="/auth/forgot-password"
                className="text-redShades-200 text "
              >
                Forget Password?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
