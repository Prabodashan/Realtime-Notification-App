import React, { useState } from "react";
import "./Card.css";

const Card = ({ post, socket, user }) => {
  const [liked, setLiked] = useState(false);

  const handleNotification = (type) => {
    if (type === 1) {
      setLiked(!liked);
    }
    socket.emit("sendNotification", {
      senderName: user,
      receiverName: post.username,
      type,
    });
  };

  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      <img src={post.postImg} alt="" className="postImg" />
      <div className="interaction">
        {liked ? (
          <img
            src="/img/heartFilled.svg"
            alt=""
            className="cardIcon"
            onClick={handleNotification}
          />
        ) : (
          <img
            src="/img/heart.svg"
            alt=""
            className="cardIcon"
            onClick={() => handleNotification(1)}
          />
        )}
        <img
          src="/img/comment.svg"
          alt=""
          className="cardIcon"
          onClick={() => handleNotification(2)}
        />
        <img
          src="/img/share.svg"
          alt=""
          className="cardIcon"
          onClick={() => handleNotification(3)}
        />
        <img src="/img/info.svg" alt="" className="cardIcon infoIcon" />
      </div>
    </div>
  );
};

export default Card;
