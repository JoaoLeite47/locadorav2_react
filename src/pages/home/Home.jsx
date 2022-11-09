import React from "react";
import Cards from "../../components/Cards/Cards";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="container-home">
          <div class="row">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}
