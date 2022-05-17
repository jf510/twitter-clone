import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

function Post({
  displayName,
  username,
  verified,
  text,
  image,
  avatar,
  timestamp,
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTyD3Ogo63d0zlybYFL5o6Pgf11j3JZtpgaA&usqp=CAU" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              SomeBot2398
              <span className="post__headerSpecial">
                <VerifiedIcon className="post__badge" /> @SomeBot
              </span>
            </h3>
          </div>
          <div className="post__headerDescription"></div>
        </div>
        <img
          src="https://c.tenor.com/Zln2iys63zwAAAAM/thats-my-opinion-ashwin-ganesh.gif"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
          </div>
      </div>
      
      
  );
}

export default Post;
