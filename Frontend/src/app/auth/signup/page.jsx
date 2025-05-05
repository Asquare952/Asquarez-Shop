"use client";

// import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { Formik } from "formik";
import * as yup from "yup";
import { registerUser } from "@/app/utils/api/auth";
import Swal from "sweetalert2";

// define yup validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const page = () => {
  const [formError, setFormError] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  // const onSubmit = (data) => console.log("User Data:", data);

  // handle register click
  const handleRegisterClick = async (data) => {
    try {
      await registerUser(data);
      const values = getValues();
      Swal.fire({
        icon: "success",
        title: "Account Created Successfully",
        text: "You can now login",
      });
      reset(); //clear the form after success
      if (
        !values.name ||
        !values.email ||
        !values.password ||
        Object.keys(errors).length > 0
      ) {
        setFormError("Please fill out the form correctly before registering");
      } else {
        setFormError("");
        router.push("/auth/login");
        setInterval(5000);
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: err.response?.data?.error || "Something went wrong",
      });
    }
  };

  return (
    <section className="pt-5">
      <div className="form-container p-5">
        <div className="flex flex-col gap-12 form">
          <Link href="/">
            <FaArrowLeft />
          </Link>
          <div className="flex flex-col gap-6">
            <h3 className=" font-medium text-4xl ">Create an account</h3>
            <p className="font-normal text-base">Enter your details below</p>
          </div>
          {formError && <span className="text-red-950 m-0">{formError}</span>}
          <form
            onSubmit={handleSubmit(handleRegisterClick)}
            className="flex flex-col gap-10"
          >
            <input
              {...register("name")}
              placeholder="Name"
              className="form-input outline-none pb-4"
            />
            {errors.name && (
              <span className="text-red-800 m-0 p-0">
                {errors.name.message}
              </span>
            )}
            <input
              {...register("email")}
              placeholder="Email"
              className="form-input outline-none pb-4"
            />
            {errors.email && (
              <span className="text-red-800 m-0 p-0">
                {errors.email.message}
              </span>
            )}
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="form-input outline-none pb-4"
            />
            {errors.password && (
              <span className="text-red-800 m-0 p-0">
                {errors.password.message}
              </span>
            )}

            <button
              type="submit"
              className="text-center bg-redShades-200 rounded-md py-4 px-28 text-greyShades-300"
            >
              Create account
            </button>
          </form>

          <div className="flex flex-col items-center gap-6">
            <p>
              Already have account?{" "}
              <a href="/auth/login" className="underline">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
