import { useEffect, useState } from "react";

function Modal({ onClose, information }) {
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
  }, [information.title]);

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
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
            <div className="weather-info-modal">
              <div>
                {information.hours.map((dateTime, index) => (
                  <div key={index}>
                    <p> {new Date(dateTime).getHours()}hs</p>
                  </div>
                ))}
              </div>

              <div>
                {information.information.map((item, index) => (
                  <div key={index}>
                    <p>
                      {" "}
                      {item} {symbol}{" "}
                    </p>{" "}
                  </div>
                ))}
              </div>
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
