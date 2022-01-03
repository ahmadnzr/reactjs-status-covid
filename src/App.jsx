import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
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
      <Dashboard covidStatus={covidStatus} />
      {/* <TotalGraph covidStatus={covidStatus} /> */}
    </>
  );
};

export default App;
