import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { CgArrowsExchangeAlt } from 'react-icons/cg';

function ProfileComponent(props){
    return (
      <>
      
        <div className="photo">
          <img 
            src={props.photoUrl} 
            alt="" 
          />

          <CgArrowsExchangeAlt 
            className="photo__toggle-icon"
          />
        </div>

        <div className="profile">
          <div className="profile__container">
            <div className="profile__container--photo">
              <img  
                src={props.src} 
                alt="" 
              />
            </div>
          <div className="profile__container--user-data">
            <p className="full-name">{props.name}</p>
            <p className="username">{props.username}</p>
          </div>
        </div>
          <div className="icon-bar">
            <AiOutlineLike 
              className="icon-bar__icon" 
            />
            <FaRegComment 
              className="icon-bar__icon"
            />
            <FaTelegramPlane 
              className="icon-bar__icon" 
            />
          </div>
        </div>


          <div className="description">
            <p className="description__from-user"><span className="bold">{props.username}</span>: {props.picDescUser}</p>
          </div>
          <div className="comments">
            <p>all comments: {props.commentsNum}</p>
          </div>
          <div className="likes">
            <p>likes: {props.likesNum}</p>
          </div>
          <div className="users-comments">
            <p>@daniela: this pick makes me sick</p>
            <p>@cassandra: I will find you, and kill all your family</p>
            <p>@bella: You stupid men thing</p>
          </div>
          <div className="comment-type">
          <label for="comments" />
          <textarea 
            id="comments" 
            name="comments" 
            rows="4" 
            cols="35" 
            placeholder="Write a comment..."/>
          </div>
      
      </>
    )
}

export default ProfileComponent;