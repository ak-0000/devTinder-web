import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed); // Fetching feed from Redux store
  const dispatch = useDispatch();

  const getFeed = async () => {
    // Fetch feed only if it's not already loaded
    if (feed && feed.length > 0) return;
    
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data || [])); // Dispatching fetched data to store, or empty array if no data
    } catch (err) {
      console.error("Error fetching feed", err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []); // Fetch feed on component mount

  // Handling the case where there are no users in the feed
  if (!feed || feed.length === 0) {
    return (
      <h1 className="flex justify-center mt-20 text-bold text-white text-lg">
        No more users
      </h1>
    );
  }

  // Rendering user cards when feed has data
  return (
    <div className="flex justify-center my-10">
      <UserCard user={feed[0]} />
    </div>
  );
};

export default Feed;
