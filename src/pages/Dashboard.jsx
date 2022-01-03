import axios from "axios";
import { useEffect, useState } from "react";
import covid from "../img/covid19.png";
const Dashboard = () => {
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

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="dashboard">
      <div className="header">
        <img src={covid} alt="" className="logo" />
        <span className="source">
          data source (API) from :{" "}
          <a href="https://github.com/mathdroid/covid-19-api">
            https://github.com/mathdroid/covid-19-api
          </a>{" "}
        </span>
        <h2 className="title">Coronavirus disease (COVID-19) status</h2>
        <span className="country">Indonesia</span>
        <span className="lastUpdate">
          last updated: {covidStatus?.lastUpdate}
        </span>
      </div>
      <div className="content">
        <div className="status positive">
          <span className="emot">😔</span>
          <span className="statusTitle">Positif</span>
          <span className="statusTotal">
            {formatNumber(covidStatus["confirmed"]?.value)}
          </span>
        </div>
        <div className="status death">
          <span className="emot">😓</span>
          <span className="statusTitle">Meninggal</span>
          <span className="statusTotal">
            {formatNumber(covidStatus["deaths"]?.value)}
          </span>
        </div>
        <div className="status recover">
          <span className="emot">😀</span>
          <span className="statusTitle">Sembuh</span>
          <span className="statusTotal">
            {formatNumber(covidStatus["recovered"]?.value)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
