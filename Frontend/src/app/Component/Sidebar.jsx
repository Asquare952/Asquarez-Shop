import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
const Sidebar = ({ isOpen, toggleSidebar, links, Value }) => {
  const {} = links[Value];
  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".sidebar")) {
        toggleSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, toggleSidebar]);
  
  return (
    <>
      <aside className={`sidebar px-6 ${isOpen ? "active" : ""}`}>
        <section className="flex flex-col gap-5">
          <div className="flex gap-4 items-center">
            <IoMdClose onClick={toggleSidebar} className=" text-2xl" />
            <h3>Logo</h3>
          </div>
          <nav className="flex flex-col">
            {links.map((items, index) => {
              return (
                <Link
                  key={items.id}
                  href={items.path}
                  onClick={() => setValue(index)}
                  className="links"
                >
                  {items.title}
                </Link>
              );
            })}
          </nav>
        </section>
      </aside>

      {isOpen && <div className="overlay"></div>}
    </>
  );
};

export default Sidebar;
