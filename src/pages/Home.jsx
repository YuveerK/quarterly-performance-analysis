import React from "react";
import Navbar from "../components/Navbar";
import EditableTable from "../components/home/EditableTable";

const Home = () => {
  return (
    <div className="w-full h-[calc(100vh-70px)] flex items-center justify-center">
      <EditableTable />
    </div>
  );
};

export default Home;
