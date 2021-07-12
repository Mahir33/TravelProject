import React, { useContext } from "react";
import { PropContainer } from "../../../PropContainer";
import { FaWindowClose } from "react-icons/fa";

function ShowAirlinesPopup() {
  const { airlines, setAirlines, location } = useContext(PropContainer);
  return airlines ? (
    <div className="airlines">
      <div className="airlines-inner">
        <div className="close">
          <FaWindowClose onClick={() => setAirlines(false)} />
        </div>
        <div className="widget">
          <iframe
            className="iframe"
            title="skyscanner"
            src="https://widgets.skyscanner.net/widget-server/widgets/iframe?skyscannerWidget=FlightSearchWidget&locale=en-GB&market=DE&currency=EUR&originGeoLookup=true&buttonColour=dawn"
          ></iframe>
        </div>
      </div>
    </div>
  ) : null;
}

export default ShowAirlinesPopup;
