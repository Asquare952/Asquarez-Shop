import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blackShades-200 py-6 w-full text-greyShades-300 mt-20">
      <section className="container grid grid-cols-2 lg:grid-cols-5 gap-20">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-lg lg:text-2xl">Logo</h2>
            <p className="font-medium text-xl">Subscribe</p>
            <p className="font-normal text-sm">Get 10% off your first order</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="font-medium text-base lg:text-xl">Support</h3>
          <ol className="flex flex-col gap-4">
            <li className="font-medium text-base">18 Akanji Odutolu</li>
            <li className="font-medium text-sm md:text-base">Asquarez@gmail.com</li>
            <li className="font-medium text-base">+234 9137139186</li>
          </ol>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="font-medium text-base lg:text-xl">Account</h3>
          <ol className="flex flex-col gap-4">
            <li className="font-normal text-base">
              <Link href="#">My Account</Link>
            </li>
            <li className="font-normal text-base">
              <Link href="/login">Login / Register</Link>
            </li>
            <li className="font-normal text-base">
              <Link href="cart">Cart</Link>
            </li>
            <li className="font-normal text-base">
              <Link href="/wishlist">Wishlist</Link>
            </li>
            <li className="font-normal text-base">
              <Link href="/products">Shop</Link>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="font-medium text-base lg:text-xl">Quick Link</h3>
          <ol className="flex flex-col gap-4">
            <li className="font-normal text-base">
              <Link href="#">Privay Policy</Link>
            </li>
            <li className="font-normal text-base">
              <Link href="#">Terms Of Use</Link>
            </li>
            <li className="font-normal text-base">
              <Link href="#">FAQ</Link>
            </li>
            <li className="font-normal text-base">
              <Link href="/contact">Contact</Link>
            </li>
          </ol>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="font-medium text-base lg:text-xl">Socials</h3>
          <div className="flex items-center gap-6">
            <Link href="#">
              <FaFacebookF />
            </Link>
            <Link href="#">
              <FaXTwitter />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
            <Link href="#">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
