import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [gender, setGender] = useState(user.gender);
  const [showToast , setShowToast] = useState(false);
  const dispatch = useDispatch();

  const saveProfile = async () => {
    const profile = await axios.patch(
      BASE_URL + "/profile/edit",
      { firstName, lastName, age, gender, photoUrl, about },
      {
        withCredentials: true,
      }
    );
    dispatch(addUser(profile?.data?.data));
    setShowToast(true);
    setTimeout(() => {
        setShowToast(false);
    },3000);
  };

  useEffect(() => {
    saveProfile();
  }, []);

  return (
    <>
      <div className="flex justify-center ">
        <div className="card bg-base-300  w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center">Profile Update </h2>
            <label className="form-control w-full max-w-xs ">
              <div className="label">
                <span className="label-text">FirstName</span>
              </div>
              <input
                type="text"
                value={firstName}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <div className="label"></div>
            </label>
            <label className="form-control w-full max-w-xs ">
              <div className="label">
                <span className="label-text">LastName</span>
              </div>
              <input
                type="text"
                value={lastName}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  setlastName(e.target.value);
                }}
              />
              <div className="label"></div>
            </label>
            <label className="form-control w-full max-w-xs ">
              <div className="label">
                <span className="label-text">Gender</span>
              </div>
              <input
                type="text"
                value={gender}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <div className="label"></div>
            </label>
            <label className="form-control w-full max-w-xs ">
              <div className="label">
                <span className="label-text">Photo-Url</span>
              </div>
              <input
                type="text"
                value={photoUrl}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  setPhotoUrl(e.target.value);
                }}
              />
              <div className="label"></div>
            </label>
            {/* <p className="text-red-600">{error}</p> */}
            <div className="card-actions justify-center my-2">
              <button className="btn btn-primary " onClick={saveProfile}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
       <div className="toast toast-top toast-center">
        {showToast && <div className="alert alert-success">
          <span>Profile saved successfully.</span>
        </div>}
      </div>
    </>
  );
};

export default EditProfile;
