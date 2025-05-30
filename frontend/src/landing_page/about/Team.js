import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/shubham.jpeg"
            style={{ borderRadius: "15%", width: "50%" }}
          />
          <h4 className="mt-5">Shubham Shukla</h4>
          <h6>Creator</h6>
        </div>
        <div className="col-6 p-3">
            <p>
            This project is a clone of Zerodha, built to explore and replicate the design, structure, and user experience of one of India’s leading trading platforms.
            </p>
            <p>
            Developed as a personal learning project, it demonstrates UI/UX replication using modern web technologies.
            </p>
            <p>
            I do not own any rights to Zerodha's brand or content—this is purely for educational and portfolio purposes.
            </p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;