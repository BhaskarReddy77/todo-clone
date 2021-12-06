import React from "react";
import { FaRegCalendarAlt, FaRegCalendar, FaInbox } from "react-icons/fa";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  console.log({ selectedTab });
  return (
    <div className="main-side">
      <div onClick={() => setSelectedTab("INBOX")} className="inbox">
        {" "}
        <FaInbox className="icon" /> Inbox
      </div>
      <div onClick={() => setSelectedTab("TODAY")} className="today">
        {" "}
        <FaRegCalendarAlt className="icon" />
        Today
      </div>
      <div onClick={() => setSelectedTab("NEXT_7")} className="next7">
        {" "}
        <FaRegCalendar className="icon" />
        Next 7 days
      </div>
    </div>
  );
};

export default Sidebar;
