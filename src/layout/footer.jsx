export default function footer() {
  return (
    <footer className="footer items-center p-3 bg-base-200 pl-6">
      <aside className="items-center grid-flow-col">
        <a target="_blank" href="..">
          <img
            src="https://i.imgur.com/ZflavaZ.png"
            alt="App icon"
            className="w-11 h-11 rounded-3xl mr-1"
          />
        </a>
        <p>
          Copyright©{" "}
          <a target="_blank" href=".." className="underline ml-1">
            Min's Scheduler
          </a>{" "}
          — All rights reserved
        </p>
      </aside>
    </footer>
  );
}
