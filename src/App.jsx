import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Dashboard from "./pages/Dashboard";
import TotalGraph from "./pages/TotalGraph";

const App = () => {
  const [covidStatus, setCovidStatus] = useState([]);

  useEffect(() => {
    const getStatus = async () => {
      const response = await axios.get(
        "https://covid19.mathdro.id/api/countries/indonesia"
      );

      setCovidStatus(response.data);
    };

    getStatus();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard covidStatus={covidStatus} />} />
        <Route
          path="/graph"
          element={<TotalGraph covidStatus={covidStatus} />}
        />
      </Routes>
    </>
  );
};

export default App;
