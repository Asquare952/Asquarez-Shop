"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";
import { resetPassword } from "@/app/services/api/authService";

const page = () => {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { token } = router.query;

  const handSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(token, password);
      Swal.fire("Success", "Password has been reset", "success");
      router.replace("auth/login");
    } catch (error) {
      Swal.fire("Error", data.message, "error");
    }
  };

  return (
    <section className="container ">
      <section className="pt-[200px] flex justify-center">
        <div className="flex flex-col gap-2 shadow-md p-5">
          <h2>Enter new password</h2>
          <form onSubmit={handSubmit} className="flex flex-col gap-3">
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="border text-blackShades-200 rounded py-2 pr-5 pl-2 outline-none"
            />
            <div className="text-center">
              <button
                type="submit"
                className=" bg-redShades-200 text-white-200 py-1 px-2 rounded"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default page;
