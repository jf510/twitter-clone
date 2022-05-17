import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import SidebarOption from "./SidebarOption";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import Button from "@mui/material/Button";
import { BrowserRouter, Router, Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      {/** Twitter icon */}
      <div className="sidebar__header">
        <FlutterDashIcon className="sidebar__twitterIcon" />
        <h2>Warbler</h2>
      </div>
      {/** Sidebar option */}

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={LogoutIcon} text="Logout" />
      <Link to={"/Login"}>
        <SidebarOption Icon={LoginIcon} text="Login" />
      </Link>
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      {/** Sidebar button */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Quack
      </Button>
    </div>
  );
}

export default Sidebar;
