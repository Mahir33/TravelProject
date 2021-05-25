import React from "react";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import { Input } from "semantic-ui-react";

function MobileSearch() {
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
