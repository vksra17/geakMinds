import React, { useState } from 'react';
import './App.css';
function App() {
  const [data, setData] = useState({
    name: "",
    mobilenumber: ""
  })
  const onUserChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (data.name === "" || data.name == null || data.mobilenumber === "" || data.mobilenumber == null) {
      alert("Enter valid details")

    } else
      if (data.mobilenumber.length !== 10) {
        alert("enter 10 digit mobile number")
        console.log(data.mobilenumber.length)
      }
      else {
        alert("Data saved successfully")
      }
  }

return (
  <>
    <div >
      <form onSubmit={onSubmit} className="c1">
        <label>UserName
          <input name="name"
            onChange={onUserChange}
            value={data.name}
            type="text"
          />
        </label>
        <label>Mobile number
          <input name="mobilenumber"
            type="text"
            value={data.mobilenumber}
            onChange={onUserChange}
          />
        </label>
        <button type="submit"> Add user</button>
      </form>
    </div>
  </>)
};

export default App;
