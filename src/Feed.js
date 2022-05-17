import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      {/** HEADER */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/** TWEETBOX */}
      <TweetBox />

      {/** POST */}
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          
      {/** POST */}
      {/** POST */}
      {/** POST */}
      {/** POST */}
    </div>
  );
}

export default Feed;
