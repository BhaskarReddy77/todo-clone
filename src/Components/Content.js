import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Task from "./Task";

const Content = () => {
  const [selectedTab, setSelectedTab] = useState("INBOX");
  return (
    <div>
      <section className="content">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <Task selectedTab={selectedTab} />
      </section>
    </div>
  );
};

export default Content;
