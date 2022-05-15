import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import SidebarOption from "./SidebarOption";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import ListIcon from "@mui/icons-material/List";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Sidebar() {
  return (
    <div className="sidebar">
      {/** Twitter icon */}
      <TwitterIcon />

      {/** Sidebar option */}

      <SidebarOption Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarksIcon} text="Bookmarks" />
      <SidebarOption Icon={ListIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />

      {/** Sidebar option */}
      {/** Sidebar option */}
      {/** Sidebar option */}
    </div>
  );
}

export default Sidebar;
