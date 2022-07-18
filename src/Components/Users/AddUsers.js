import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredAgeName, setAgeName] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredAgeName.trim().length === 0
    ) {
      setError({
        title: "Invaild Input",
        message: "please enter vaild input",
      });
      return;
    }
    if (+enteredAgeName < 1) {
      setError({
        title: "Invaild Age",
        message: "please enter vaild age",
      });
      return;
    }

    props.onAdduser(enteredUserName, enteredAgeName);
    setUserName("");
    setAgeName("");
  };

  const userChangeHander = (event) => {
    setUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAgeName(event.target.value);
  };

  const onErrorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={onErrorHandler}
        />
      )}
      <Card cssClass={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={userChangeHander}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredAgeName}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
