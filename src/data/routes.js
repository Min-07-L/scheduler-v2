import Index from "../routes/_index";
import HeatMap from "../routes/heat-map";
import Schedule from "../routes/schedule";

const ROUTES = [
  { path: "/", title: undefined, element: <Index /> },
  { path: "/schedule", title: undefined, element: <Schedule /> },
  { path: "/heatmap", title: "Heatmap", element: <HeatMap /> },
];

export { ROUTES };
