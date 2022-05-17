import React, { useState } from "react";
import "./TweetBox.css";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Jordan Fontaine",
      username: "RiskJames",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://www.ctvnews.ca/polopoly_fs/1.2842838.1459624452!/httpImage/image.jpg_gen/derivatives/landscape_960/image.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTyD3Ogo63d0zlybYFL5o6Pgf11j3JZtpgaA&usqp=CAU" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="What's happening?"
          ></input>
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
          className="tweetbox__imageInput"
          placeholder="Add image url"
        ></input>
        <Button onClick={sendTweet} type="submit" className="tweetbox__Button">
          Quack
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
