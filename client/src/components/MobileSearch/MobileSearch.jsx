import React, { useState } from "react";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import { Input } from "semantic-ui-react";

function MobileSearch() {
  const [popup, setPopup] = useState(false);

  const togglePop = () => {
    setPopup(true);
  };
  return (
    <>
      <div className="search-container">
        <h1>Search</h1>
        <Input
          icon="search"
          placeholder="Search..."
          className="semantic-input"
        />

        <div className="album">
          <div onClick={togglePop}>
            <img
              src="https://source.unsplash.com/collection/190727/400x500"
              alt="profile"
            />
          </div>
          <img
            src="https://source.unsplash.com/collection/190728/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/1907200/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/190726/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/190723/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/1907289/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/190727/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/190728/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/1907200/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/190726/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/190723/400x500"
            alt="profile"
          />
          <img
            src="https://source.unsplash.com/collection/1907289/400x500"
            alt="profile"
          />
        </div>
      </div>

      <MobileNavbar />
    </>
  );
}

export default MobileSearch;
