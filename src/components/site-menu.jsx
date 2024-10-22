import DAYS from "../data/days";
import { PEOPLE, TIMES } from "../data/leader-board";

export default function SideMenu({ user, setUser, data }) {
  return (
    <div>
      <Participants user={user} setUser={setUser} data={data} />
      <br />
      <Overlaps data={data} />
    </div>
  );
}

function Participants({ user, setUser, data }) {
  let map = {};
  for (let v of data) {
    if (!map[v.name]) map[v.name] = 0;
    map[v.name]++;
  }

  let rank = Object.keys(map);
  rank.sort((a, b) => map[b] - map[a]);

  return (
    <div className="p-2 bg-gray-100">
      <h1 className="font-bold text-xl mb-2">Participants</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {rank.map((name, i) => (
            <tr
              className="button"
              role="button"
              key={i}
              onClick={() => {
                user == name ? setUser(undefined) : setUser(name);
              }}
            >
              <td>{i + 1}</td>
              <td>
                <div className={name === user ? "font-bold" : ""}>{name}</div>
              </td>
              <td>{map[name]} hrs</td>
              <td>
                <button className="btn btn-primary btn-sm">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Overlaps({ data }) {
  let map = {};
  for (let v of data) {
    let key = JSON.stringify([v.day, v.time]);
    if (!map[key]) map[key] = 0;
    map[key]++;
  }

  let rank = Object.keys(map);
  rank.sort((a, b) => map[b] - map[a]);

  return (
    <div className="bg-gray-100 p-2">
      <h1 className="font-bold text-xl mt-5 mb-2">Suggestions</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Slot</th>
            <th># available</th>
          </tr>
        </thead>
        <tbody>
          {rank.slice(0, 5).map((slot, i) => {
            let [day, time] = JSON.parse(slot);
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  {DAYS[day]} {time % 12 || 12} {time < 12 ? "AM" : "PM"}
                </td>
                <td>{map[slot]} people</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
