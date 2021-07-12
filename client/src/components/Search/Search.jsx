import React, {useState} from "react";
import {Input} from "semantic-ui-react";
import {PropContainer} from "../../PropContainer";
import {Link, useHistory} from "react-router-dom";


function MobileSearchComp() {
  const {setUsername, setRegistered} = React.useContext(PropContainer);
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");


  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  };

  return (
    <div className="profile-container">
      <div className="search-input">
        <Input
          icon="search"
          type="text"
          placeholder="Search..."
          className="semantic-input"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default MobileSearchComp;
