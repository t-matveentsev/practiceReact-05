import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchUserById } from "../../services/api";
import s from "./UserDetails.module.css";

const UserDetails = () => {
  const { userId } = useParams();

  const [user, setUser] = useState(null);

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
