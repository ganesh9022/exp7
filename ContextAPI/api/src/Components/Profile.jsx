import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

const Profile = () => {
const { user } = useContext(UserContext);

  if (!user) {
    return <div className="welcome">Please login</div>;
  } else {
    return (
      <div>
        <div className="welcome">welcome {user.username}</div>
      </div>
    );
  }
};

export default Profile;
