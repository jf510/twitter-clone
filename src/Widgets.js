import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter"></input>
      </div>

      <div className="widgets__widgetsContainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed />
        <TwitterTimelineEmbed
          sourceType=""
          screenName=""
          options={{ height: 400 }}
        />
        <TwitterShareButton url="" options={{}} />
      </div>
    </div>
  );
}

export default Widgets;
