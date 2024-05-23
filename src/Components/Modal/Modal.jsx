import { useEffect, useState } from "react";

function Modal({ onClose, information, currentTimeIndex }) {
  const [symbol, setSymbol] = useState("");

  useEffect(() => {
    switch (information.title) {
      case "Temperature":
        setSymbol("°C");
        break;
      case "Wind Speed":
        setSymbol("km/h");
        break;
      case "Rain":
        setSymbol("%");
        break;
      default:
        break;
    }
  }, [symbol, information]);

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{information.title}</p>
          <button
            onClick={onClose}
            className="delete"
            aria-label="close"
          ></button>
        </header>
        <section className="modal-card-body">
          {information ? (
            <div >
              {information.information.map((item, index) => (
                <div key={index} className="weather-info-modal">
                  <p>{" "}{item} {symbol}{" "}</p> {" "}
                  <p> {currentTimeIndex + index}hs</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No information available</p>
          )}
        </section>
        {/* <footer className="modal-card-foot">
       
      </footer> */}
      </div>
    </div>
  );
}

export default Modal;
