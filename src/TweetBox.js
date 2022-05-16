import React from "react";
import "./TweetBox.css";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

function TweetBox() {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTyD3Ogo63d0zlybYFL5o6Pgf11j3JZtpgaA&usqp=CAU" />
          <input placeholder="What's happening?"></input>
        </div>
        <input
          className="tweetbox__imageInput"
          placeholder="Add image url"
        ></input>
        <Button className="tweetbox__Button">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
