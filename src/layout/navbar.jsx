import { Link } from "react-router-dom";
import { ROUTES } from "../data/routes";
import { useContext, useState } from "react";
import { AppContext } from "./layout";

export default function Navbar() {
  let { user, setUser } = useContext(AppContext);
  return (
    <div className="w-full flex justify-center bg-base-200 relative">
      <div className="navbar w-full h-18 flex justify-between">
        <div className="navbar-start mr-6">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              {ROUTES.map((r) => (
                <li key={r.title}>
                  <Link to={r.path}>{r.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost rounded-lg normal-case text-xl ml-3">
            Scheduler
          </Link>
        </div>
        <div className="navbar-end gap-2 mr-48">
          {user ? (
            <div className="dropdown dropdown-end flex">
              <div className="flex items-center space-x-2">
                <div className="font-bold mr-3">{user.name}</div>
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar flex-1"
                >
                  <img
                    alt="logo"
                    src={user.img}
                    className="w-11 rounded-full inline"
                  />
                </label>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={() => setUser(undefined)}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <button className="btn btn-neutral" onClick={() => setJoinCode(true)}>
              Join
            </button>
          )}
        </div>
      </div>
      
    </div>
  );
}

