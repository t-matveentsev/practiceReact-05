import { Link, useLocation } from "react-router-dom";
import s from "./UsersList.module.css";

const UserList = ({ users }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <Link
              className={s.nameLink}
              to={`/users/${item.id}`}
              state={location}
            >
              {item.firstName} {item.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
