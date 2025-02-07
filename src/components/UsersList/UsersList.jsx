import { Link } from "react-router-dom";
import s from "./UsersList.module.css";

const userList = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            <Link className={s.nameLink} to={`/users/${item.id}`}>
              {item.firstName} {item.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default userList;
