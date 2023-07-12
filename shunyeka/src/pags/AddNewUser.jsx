import React, { useState } from "react";
import '../styles/addData.css';
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action";

export const AddNewUser = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const dispatch= useDispatch();
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePhoneChange = (e) => {
      setPhone(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newUser = { name, email, phone };
      setUsers([...users, newUser]);
      setName('');
      setEmail('');
      setPhone('');

      const obj={
        name,
        email,
        phone
      }

      dispatch(addUser(obj)).then(()=>{
        alert("User added")
      })
      // console.log(obj)
    };
  
    return (
      <div className="mainDiv">
        <h2>User Form</h2>
        <form onSubmit={handleSubmit}className="form">
          <div>
            <label>Name: </label>
            <input type="text" value={name} onChange={handleNameChange} required />
          </div>
          <div>
            <label>Email: </label>
            <input type="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <label>Phone: </label>
            <input type="number" value={phone} onChange={handlePhoneChange} required />
          </div>
          <button type="submit">Add User</button>
        </form>
        {/* <h2>Saved Users</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}, <strong>Phone:</strong> {user.phone}
            </li>
          ))}
        </ul> */}
      </div>
  );
};
