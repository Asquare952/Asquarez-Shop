'use client'

import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
import { FiUser } from "react-icons/fi";

const profileDropdown = ({ dropDown, closeDropDown }) => {
  return (
    <>
      <section
        className={`absolute z-[10] bg-blackShades-200 bg-opacity-50 p-5 rounded-md right-0  top-20 ${
          dropDown ? "block" : "hidden"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-[13px] drop-down">
          <Link href="/" onClick={closeDropDown}>
            <FiUser />
            <span>Manage My Account</span>
          </Link>
          <Link href="/" onClick={closeDropDown}>
            <FiShoppingBag />
            <span>My Order</span>
          </Link>
          <Link href="/" onClick={closeDropDown}>
            <MdOutlineCancel />
            <span>My Cancellation</span>
          </Link>
          <Link href="/" onClick={closeDropDown}>
            <FaRegStar />
            <span>My Reviews</span>
          </Link>
          <Link href="/" onClick={closeDropDown}>
            <TbLogout2 />
            <span>Logout</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default profileDropdown;
