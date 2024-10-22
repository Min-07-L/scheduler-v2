import { Fragment, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../layout/layout";
import DAYS from "../data/days";

let isMouseDown = false;

export default function Schedule() {
  const nav = useNavigate();
  let { heatmap, setHeatmap } = useContext(AppContext);

  useEffect(() => {
    const mouseDownListener = () => {
      isMouseDown = true;
    };

    const mouseUpListener = () => {
      isMouseDown = false;
    };

    document.addEventListener("mousedown", mouseDownListener);
    document.addEventListener("mouseup", mouseUpListener);

    // Return a cleanup function to remove the event listeners
    return () => {
      document.removeEventListener("mousedown", mouseDownListener);
      document.removeEventListener("mouseup", mouseUpListener);
    };
  }, []);

  function handleHover(day, time) {
    if (!isMouseDown) return;
    toggleCell(day, time);
  }

  function toggleCell(day, time) {
    if (heatmap.filter((v) => v.day === day && v.time === time).length === 1) {
      setHeatmap(heatmap.filter((v) => v.day != day || v.time != time));
    } else {
      setHeatmap([...heatmap, { name: "Min", day, time }]);
    }
  }

  return (
    <div className="flex flex-col items-center space-y-5 my-5">
      {/* calendar */}
      <div className="grid grid-cols-8 heatmap select-none">
        <div></div>

        {DAYS.map((v) => (
          <div key={v} className="header">
            {v}
          </div>
        ))}

        {new Array(24).fill(0).map((v, hr) => (
          <Fragment key={hr}>
            <div className="header">
              {hr % 12 || 12}:00 {hr < 12 ? "AM" : "PM"}
            </div>
            {new Array(7).fill(0).map((v, day) => (
              <div
                onMouseEnter={() => handleHover(day, hr)}
                onMouseDown={() => toggleCell(day, hr)}
                className={`border ${
                  heatmap.filter((v) => v.day === day && v.time === hr)
                    .length === 1
                    ? "bg-success"
                    : ""
                }`}
                key={day}
              ></div>
            ))}
          </Fragment>
        ))}
      </div>

      {/* buttons */}
      <div>
        <button className="btn btn-primary" onClick={() => nav("/heatmap")}>
          SAVE
        </button>
        <button className="btn btn-primary" onClick={() => setHeatmap([])}>
          RESET
        </button>
      </div>
    </div>
  );
}
