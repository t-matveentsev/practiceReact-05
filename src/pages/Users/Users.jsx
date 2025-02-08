import { useEffect, useState } from "react";
import { fetchUsers } from "../../services/api";
import UsersList from "../../components/UsersList/UsersList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const handleChangeQuery = (value) => {
    searchParams.set("query", value);
    setSearchParams(searchParams);
  };
  const filterData = users.filter((user) =>
    user.firstName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} query={query} />
      <UsersList users={filterData} />
    </div>
  );
};

export default Users;
