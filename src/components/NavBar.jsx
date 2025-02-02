import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleLogout = async () => {
    try {
      const logout = await axios.post(BASE_URL + "/logout" ,{} , {
        withCredentials: true,
      });
      dispatch(removeUser());
      return navigate("/login");
    } catch (err) {
    }
  };
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          🧑‍💻 devTinder
        </Link>
      </div>
      {user && (
        <div className="flex-none gap-2">
          <p>Welcome , {user.firstName}</p>
          <div className="dropdown dropdown-end mx-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user.photoUrl
                      ? user.photoUrl
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIU7E3x2EYvNYP_dM2NVGvkBLsNT0_P6B1w&s"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/connections">connections</Link>
              </li>
              <li>
                <Link to="/requests">requests</Link>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
