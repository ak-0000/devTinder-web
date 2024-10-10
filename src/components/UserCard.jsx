import React from "react";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img className="w-44 mt-10"
          src={
            user.photoUrl
              ? user.photoUrl
              : "https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
          }
          alt="photo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user.firstName + " " + user.lastName}</h2>
        <p>{user.about}</p>
        {user.age && user.gender && <p>{user.age +" "+ user.gender }</p>}
        <div className="card-actions justify-center m-4 ">
          <button className="btn btn-primary mr-4">Ignore 😒</button>
          <button className="btn btn-secondary ml-4">Interested ❤️</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
