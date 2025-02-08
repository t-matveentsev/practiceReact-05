import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { fetchUserById } from "../../services/api";
import s from "./UserDetails.module.css";

const UserDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const location = useLocation();
  const goBackUrl = useRef(location?.state ?? "/users");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchUserById(userId);
      setUser(data);
    };
    getData();
  }, [userId]);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Link to={goBackUrl.current}>Go Back</Link>
      <button onClick={() => navigate(-1)}>Back -1</button>
      UserDetails #{userId}
      <img src={user.image} />
      <h2>
        {user.firsName} {user.lastName}
      </h2>
      <p>{user.email}</p>
      <nav className={s.navDetails}>
        <NavLink to="info">Info</NavLink>
        <NavLink to="posts">Posts</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserDetails;
