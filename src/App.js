import React, { useState } from "react";
import AddUsers from "./Components/Users/AddUsers";
import UserList from "./Components/Users/UserList";

function App() {
  const [userList, setUserListFun] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserListFun((prevlast) => {
      return [
        ...prevlast,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUsers onAdduser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
