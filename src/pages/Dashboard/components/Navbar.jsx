import logo from "../../../static/brand/logo-light.svg";
import { RxDashboard } from "react-icons/rx";
import { BiTask, BiUser, BiLogOut } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [itemID, setItemID] = useState();
  const items = [
    {
      name: "Dashboard",
      icon: <RxDashboard />,
      childLinks: [
        {
          name: "Overview",
          path: "/overview",
        },
        {
          name: "Calender",
          path: "/calender",
        },
      ],
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: <BiTask />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <FaProjectDiagram />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <BiUser />,
    },
    {
      name: "Logout",
      icon: <BiLogOut />,
    },
  ];

  return (
    <section className="w-64 h-full bg-gray-900">
      <aside className="w-full h-full px-7 py-10">
        <div className="logo w-48 mx-auto mb-3">
          <img className="w-full" src={logo} alt="" />
        </div>
        <nav className="mt-7">
          <p className="font-bold text-gray-600 text-lg">Menu</p>
          <ul className="flex flex-col text-white mx-auto gap-5 mt-3">
            {items.map((item, i) => {
              return (
                <div>
                  <Link to={item.path} key={i}>
                    <li
                      className={`flex justify-start items-center px-3 py-1 rounded-md gap-3 text-lg font-bold ${
                        isClicked && i == itemID ? " bg-[#333A48]" : ""
                      }`}
                      onClick={() => {
                        setIsClicked((prev) => !prev);
                        setItemID(i);
                      }}
                    >
                      <span>{item.icon}</span> {item.name}{" "}
                      <span className="ml-auto text-xl">
                        {item.hasOwnProperty("childLinks") ? (
                          isClicked && i == itemID ? (
                            <MdExpandMore />
                          ) : (
                            <MdExpandLess />
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </li>
                  </Link>
                  {item.childLinks && (
                    <ul
                      className={`pl-8 mt-2 flex flex-col gap-2 ${
                        isClicked && i == itemID ? "block" : "hidden"
                      }`}
                    >
                      {item.childLinks.map((item, i) => {
                        return (
                          <Link to={item.path} key={i}>
                            <li>
                              <span>{item.name}</span>
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </ul>
        </nav>
      </aside>
    </section>
  );
};

export default Navbar;
