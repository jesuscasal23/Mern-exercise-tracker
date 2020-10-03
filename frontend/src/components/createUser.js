import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [user, setUser] = useState({
    username: "",
  });

  function onChangeUsername(e) {
    setUser({
      username: e.target.value,
    });
  }

  function onSubmitUsername(e) {
    e.preventDefault();
    const newUser = user.username;

    console.log(newUser);
    axios
      .post("http://localhost:5000/users/add", { username: newUser })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setUser({
      username: "",
    });
  }
  return (
    <div>
      <form onSubmit={onSubmitUsername}>
        <div className="form-group">
          <label> Username: </label>
          <input
            type="text"
            required
            value={user.username}
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Create User" />
        </div>
      </form>
    </div>
  );
};
export default CreateUser;
