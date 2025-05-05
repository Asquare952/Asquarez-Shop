import React from 'react'
import { BiPhone } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";

const ContactUs = () => {
  return (
    <>
      <div className="pt-[80px]">
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          <div className="shadow-md p-5">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="bg-redShades-200 p-3 rounded-full text-white-200">
                    <BiPhone className="text-2xl" />
                  </div>
                  <p>Call To Us</p>
                </div>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +234 9137139189</p>
              </div>
              <hr className="text-lg" />
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="bg-redShades-200 p-3 rounded-full text-white-200">
                    <MdOutlineMail className="text-2xl" />
                  </div>
                  <p>Write To Us</p>
                </div>
                <p>
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p>Emails: customer@asquareztech.com</p>
                <p>Emails: support@asquareztech.com</p>
              </div>
            </div>
          </div>
          <div className="shadow-md p-4">
            <form action="" className="flex flex-col gap-8">
              <div className="flex flex-col lg:flex-row items-center gap-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-greyShades-400 py-2 pl-5 pr-4 outline-none w-full"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-greyShades-400 py-2 pl-5 pr-4 outline-none w-full"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-greyShades-400 py-2 pl-5 pr-4 outline-none w-full"
                />
              </div>
              <textarea
                name=""
                id=""
                placeholder="Message"
                className="bg-greyShades-400 py-2 pl-5 pr-4 outline-none h-52"
              ></textarea>
              <div className="flex justify-end">
                <button className="bg-redShades-200 text-white-200 py-4 px-12 rounded">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs
