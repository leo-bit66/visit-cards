import React from "react";
import "./css/VisitCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'


function VisitCard(props) {
  return (

    <div id="visit-card" className="card-container" style={{ backgroundColor: props.backgroundColor }}>
      <div className="logo-section">
        <img src={require("./images/logo.png")} alt="Personal Logo"/>
      </div>
      <hr className="divider" />
      <div className="info-section">
        <div className="full-name">{props.fullName}</div>
        <div className="job-title">{props.jobTitle}</div>
        <div className="contact-info">
          <div>
            <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
            <span>{props.phone}</span>
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            <span>{props.email}</span>
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon={faGlobe} />
            <span>{props.website}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitCard;
