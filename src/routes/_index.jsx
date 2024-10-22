import { useContext, useState } from "react";
import { AppContext } from "../layout/layout";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Index() {
  let [joinCode, setJoinCode] = useState(undefined);
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex justify-center items-center space-x-5">
      <Link to="/schedule"><button className="btn btn-lg btn-primary">CREATE</button></Link>
      <button className="btn btn-lg btn-primary" onClick={()=>setJoinCode(true)}>JOIN</button>
      {joinCode && <JoinCode navigate={navigate} close={() => setJoinCode(undefined)} />}
    </div>
  );
}

function JoinCode({ close, navigate }) {
  let { setUser } = useContext(AppContext);
  function onSubmit(ev) {
    ev.preventDefault();
    setUser({
      img: "https://img.pikbest.com/backgrounds/20191105/cool-planet-texture-background-image_2844004.jpg!sw800",
      name: "Min Lim",
      username: "Min.Lim07",
      grade: "11th",
      position: "Treasurer",
      email: "readbug.lim@gmail.com",
      interest: "Fun Math Puzzles",
      joined: `Oct 2nd 2023`,
    });
    close();
    navigate("/schedule")
  }
  return (
    <div
      className="w-screen h-screen absolute flex justify-center items-center z-10"
      style={{ backgroundColor: "rgb(0, 0, 0, 0.3)" }}
    >
      <form
        onSubmit={onSubmit}
        className="p-10 bg-base-100 space-y-3 rounded-xl relative"
      >
        <button
          onClick={close}
          className="absolute btn btn-xs btn-error right-2 top-2 text-center"
        >
          X
        </button>
        <div className="text-3xl font-bold py-5 text-center">
          Enter Join Code
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-xl flex-grow">Join code: </div>
          <input
            name="password"
            type="password"
            className="w-72 input input-sm input-primary"
          />
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-xl flex-grow">Password: </div>
          <input
            name="password"
            type="password"
            className="w-72 input input-sm input-primary"
          />
        </div>
        <div className="flex justify-center pt-5">
          <button className="btn btn-primary" onClick={onSubmit}>
            Join Meeting
          </button>
        </div>
      </form>
    </div>
  );
}
