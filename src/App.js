import React, { createContext, useState } from "react";
import "./App.css";
import MainBox from "./MainBox";

export const appContext = React.createContext();

function App() {
  return (
    <>
      <div id="note_application" className="mt-5">
        <MainBox />
      </div>
    </>
  );
}

export default App;
