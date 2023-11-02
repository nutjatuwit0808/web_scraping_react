import { useEffect, useState } from "react";
import "./App.css";
import socketIOClient from "socket.io-client";
import Navbar from "./layouts/navbar";


function App() {
  const [stockCards, setStockCard] = useState([]);

  const socket = socketIOClient("http://localhost:5000"); // Replace with your server URL

  useEffect(() => {
    const newStockData = (stocks_data) => {
      console.log("client stocks_data :: ", stocks_data);
      setStockCard(stocks_data);
    };

    socket.on("schedule-stock", newStockData);
    return () => {
      socket.off("schedule-stock", newStockData);
    };
  }, [socket, stockCards]);

  return (
    <>
      <Navbar/>
      <div className="page_content">
        <div className="card-stocks">
          {stockCards.map((data, index) => {
            return (
              <div key={index} className="card-stock">
                <h5>{data.stock_name}</h5>
                <div className="stock_data">
                  <p>{data.open_price}</p>
                  <p>{data.last_price}</p>
                  <p
                    className={
                      data.change_percent.includes("-")
                        ? "red-text"
                        : "green-text"
                    }
                  >
                    {data.change_percent}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
