import React from 'react';
import {FaTelegramPlane} from "react-icons/fa";
import {FaRegComment} from "react-icons/fa";
import {AiOutlineLike} from "react-icons/ai";
import {CgArrowsExchangeAlt} from "react-icons/cg";
import {GiAirplaneDeparture} from 'react-icons/gi';

function GalleryCard(props){
    return (
    <div className="card">
        <img className="img one" src={props.src} alt="" />

          <div className="text text-one">
            <p className="card-date">December 2021</p>
            <h3 className="card-header">Name, location {props.placeName} 
              <GiAirplaneDeparture 
                className="airplane" 
                />
            </h3>
            <p>Example place description {props.placeDescr}</p>
            
            <div className="description">
              <p className="description__from-user">
              <span className="bold">{props.username}</span>: Example comment from uploader{props.picDescUser}
              </p>
            </div>
      
      
            <div className="profile">
              <div className="profile__container">
                  <img 
                    className="profile__container--photo" 
                    src={props.src} alt="" 
                  />
                <div className="profile__container--user-data">
                  <p className="full-name">{props.name}</p>
                  <p className="username">{props.username}</p>
                </div>
                <div className="profile__container--likes">
                  <p>Likes: {props.likesNum}</p>
                  <button className="like-ico">
                    <AiOutlineLike />
                  </button>
                  
                </div>
              </div>
            </div>

          

        </div>
        
    </div> 
    )
}

export default GalleryCard;