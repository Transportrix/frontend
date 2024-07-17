import BusDetails from "./components/BusDetails";
import Congratulations from "./components/Congratulations";
import Searching from "./components/Searching";
import SelectASeat from "./components/SelectASeat";
import StartHere from "./components/StartHere";
import TellUsMore from "./components/TellUsMore";

export const pages: any = [
  {
    name: "start-here",
    label: "start-here",
    component: <StartHere />,
    number: 1,
  },
  {
    name: "start-here",
    label: "start-here",
    component: <Searching />,
    number: 1,
  },
  {
    name: "start-here",
    label: "start-here",
    component: <BusDetails />,
    number: 1,
  },
  {
    name: "start-here",
    label: "start-here",
    component: <Congratulations />,
    number: 1,
  },
];
