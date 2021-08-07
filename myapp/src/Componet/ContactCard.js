import React from "react";
// import user from "../images/user.png";
import '../Css/ContactCard.css';
import { Link } from "react-router-dom"

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      {/* <img className="ui avatar image" src={user} alt="user" /> */}
      <div className="content">
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
        <i
          // className="trash alternate outline icon"
          className=" far fa-trash-alt "
          style={{ color: "red", marginTop: "7px" }}
          onClick={() => props.clickHander(id)}
        ></i>
        <div>
          <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
            <i
              className="far fa-edit"
              style={{ color: "blue", marginTop: "7px" }}
            ></i>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default ContactCard;