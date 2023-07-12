import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleUsers } from "../redux/action";

export const SingleUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.userReducer.singleUser);
  console.log(user);
  //   useEffect(() => {
  //     const newdata = users.find((el) => el.id == id);
  //     setData(newdata);
  //   }, [])

  useEffect(() => {
    dispatch(getSingleUsers(id));
  }, []);

  return (
    <div>
      <table className="statsTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
