import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editeUsers, getSingleUsers } from "../redux/action";
import { useNavigate, useParams } from "react-router-dom";

export const EditUser = () => {
  const [users, setUsers] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((store) => store.userReducer.users);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers((prev) => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    const data = user.find((el) => el._id == id);
    // console.log(id)
    setUsers(data);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editeUsers(users, id)).then(() => {
      alert("User updated");
      navigate("/");
    });
    // console.log(users)
  };
  return (
    <div>
      <h2>User Edit Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={users.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={users.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone: </label>
          <input
            type="tel"
            name="phone"
            value={users.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};
