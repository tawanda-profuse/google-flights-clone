import { Suspense, useState, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";
import Sidebar from "./components/Sidebar";
import Loading from "./components/Loading";
import Travel from "./pages/Travel";
import NotFound from "./pages/NotFound";
const FlightsHome = lazy(() => import("./pages/FlightsHome"));
const FlightsExplore = lazy(() => import("./pages/FlightsExplore"));

function App() {
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <>
      <TopNavbar setSideMenu={setSideMenu} />
      <Sidebar open={sideMenu} setOpen={setSideMenu} />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Travel />}></Route>
          <Route path="/travel/flights" element={<FlightsHome />}></Route>
          <Route path="/travel/explore" element={<FlightsExplore />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
