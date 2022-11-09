import React from "react";
import Cards from "../../components/Home/Cards/Cards";
import Navbar from "../../components/Home/Navbar/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="container-home">
          <div class="row">
            <Cards/>
          </div>
        </div>
      </div>
    </div>
  );
}
