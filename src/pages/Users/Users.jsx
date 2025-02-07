import { useEffect, useState } from "react";
import { fetchUsers } from "../../services/api";
import UsersList from "../../components/UsersList/UsersList";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getData();
  }),
    [];
  return (
    <div>
      <UsersList users={users} />
    </div>
  );
};

export default Users;
