import React from "react";
import {FaTelegramPlane} from "react-icons/fa";
import {FaRegComment} from "react-icons/fa";
import {AiOutlineLike} from "react-icons/ai";
import {CgArrowsExchangeAlt} from "react-icons/cg";

function ProfileComponent(props) {
  return (
    <>
    

        
        <div className="icon-bar">
          <AiOutlineLike className="icon-bar__icon" />
          <FaRegComment className="icon-bar__icon" />
          <FaTelegramPlane className="icon-bar__icon" />
        </div>
      

      
      <div className="users-comments">
        <p>@daniela: this pic is great!</p>
        <p>@cassandra: this is awesome, I want to go there!</p>
        <p>@bella: Now I have an idea for a great holiday!</p>
      </div>
      <div className="comment-type">
        <label htmlFor="comments" />
        <textarea
          id="comments"
          name="comments"
          rows="4"
          cols="35"
          placeholder="Write a comment..."
        />
      </div>
    </>
  );
}

export default ProfileComponent;
