import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addrequest } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);
  const fetchdata = async () => {
    try {
      if (requests) return;
      const res = await axios.get(BASE_URL + "/user/request/received", {
        withCredentials: true,
      });
      dispatch(addrequest(res?.data?.data));
    } catch (err) {
      //
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (!requests) return;
  if (requests.length === 0) return <h1>No connections found</h1>;

  return (
    <div className="text-center my-10 ">
      <h1 className="text-bold text-white text-3xl">Connections</h1>
      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;
        return (
          <div
            key={_id}
            className="flex rounded-lg m-4 p-4 bg-base-300 mx-auto w-1/2 mt-6"
          >
            <div>
              <img
                className="w-20 h-20 rounded-full"
                alt="photo"
                src={photoUrl}
              />
            </div>
            <div className="text-left ">
              <h1 className="font-bold text-lg">
                {firstName + " " + lastName}
              </h1>
              {age && gender && <p>{age + " " + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
