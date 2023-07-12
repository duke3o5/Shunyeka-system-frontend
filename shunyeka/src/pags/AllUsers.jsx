import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../redux/action";
import { useNavigate } from "react-router-dom";

export const AllUsers = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const users = useSelector((store) => store.userReducer.users);
  // console.log(users);

  useEffect(() => {
    dispatch(getUsers());
  }, [users]);

  const handleDelete=(id)=>{
    dispatch(deleteUser(id))
    // dispatch(getUsers());
  }

  return (
    <div>
      <table className="statsTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {users &&
            users.map((el) => {
              return (
                <tr key={el._id}>
                  <td>{el._id}</td>
                  <td>{el.name}</td>
                  <td>
                    <button onClick={()=>navigate(`/${el._id}`)}>View</button>
                  </td>
                  <td>
                  <button onClick={()=>navigate(`update/${el._id}`)}>Edit</button>
                  </td>
                  <td>
                  <button onClick={()=>handleDelete(`delete/${el._id}`)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
