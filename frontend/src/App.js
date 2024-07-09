import React from "react";
import ReactDOM from "react-dom/client";
import VideoList from "./components/VideoList";

const AppLayout = () => {
  return (
    <>
      <h1>Youtube Frontend</h1>
      <VideoList/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
