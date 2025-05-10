"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { forgotPassword } from "@/app/services/api/authService";

const page = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      Swal.fire("Success", data.message, "success");
      setEmail("");
    } catch (error) {
      Swal.fire("Error", data.message, "error");
    }
  };

  return (
    <section className="container ">
      <section className="pt-[200px] flex justify-center">
        <div className="flex flex-col gap-2 shadow-md p-5">
          <h2>Enter email to reset password</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="border text-blackShades-200 rounded py-2 pr-5 pl-2 outline-none"
            />
            <div className="text-center">
              <button
                type="submit"
                className=" bg-redShades-200 text-white-200 py-1 px-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default page;
