"use client";

import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const handleClick = () => alert("Me gusta el post");

  return (
    <div style={{ marginTop: 10 }}>
      {liked ? (
        <span style={{ cursor: "pointer" }} onClick={handleClick}>
          {"\u1F494"}
        </span>
      ) : (
        <span style={{ cursor: "pointer" }} onClick={handleClick}>
          {"😍"}
        </span>
      )}
    </div>
  );
}
