import { Fragment, useContext, useState } from "react";
import SideMenu from "../components/site-menu";
import DAYS from "../data/days";
import ENTRIES from "../data/entries";
import { AppContext } from "../layout/layout";

export default function HeatMap() {
  let [selectedUser, setUser] = useState(undefined);
  let { heatmap } = useContext(AppContext);

  let combined = [...heatmap, ...ENTRIES];

  let filtered =
    selectedUser != undefined
      ? combined.filter((v) => v.name === selectedUser)
      : combined;

  return (
    <div className="flex space-x-5 items-start container mt-5 mx-auto">
      <div className="grid grid-cols-8 heatmap">
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
                className={`bg-green-${
                  filtered.filter((v) => v.day === day && v.time === hr).length
                }00`}
                key={day}
              ></div>
            ))}
          </Fragment>
        ))}
      </div>
      <SideMenu user={selectedUser} setUser={setUser} data={combined} />
    </div>
  );
}
