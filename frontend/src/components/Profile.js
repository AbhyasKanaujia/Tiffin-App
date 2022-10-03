import React from "react";

const Profile = ({ user }) => {
  return (
    <div>
      {user.name}{" "}
      <img
        src={`${
          user.image
            ? user.image
            : "https://img.icons8.com/windows/32/000000/user.png"
        }`}
        alt=""
      />
    </div>
  );
};

export default Profile;
