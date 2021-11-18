import React, { useEffect, useState } from "react";
import MyModal from "../components/MyModal/MyModal";
import UserList from "../components/UserList";
import Loader from"react-loader-spinner"
import axios from 'axios';

function Users() {
  const[loading, setLoading] = useState(true);




    const fetchUsers = async () =>{
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(users.data)
      setLoading(false);
 }
  useEffect(()=>{
    fetchUsers();

  },[])
  const [users, setUsers] = useState(null);
  const [user, setUser] = useState({
    username: "",
    name: "",
    phone: "",
    gmail: "",
  });
  

  const onChange = (event) => {
    if (event.target.id == "username") {
      setUser({ ...user, username: event.target.value });
    }
     else if (event.target.id == "name") {
        setUser({ ...user, name: event.target.value });
    
      }
      else if (event.target.id == "phone") {
        setUser({ ...user, phone: event.target.value });
    
      }
       else {
      setUser({ ...user, email: event.target.value });
    }
  };

  const addUser = () => {
    setUser({ ...user, id: Math.random() * 1 });
    setUsers([...users, user]);
    clear();
  };

  const clear = () => {
    setUser({username:"", name: "", phone: "", email:""});
  };

const [showModal,setShowModal] = useState(false);

  const deleteUser = (id) => {
    const confirm = window.confirm("Ты действительно хочешь удалить?");
    if (confirm) setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="App">
      <div className="container">
        <MyModal visible={showModal} setVisible={setShowModal}>
        {
          <>

             <div className="input-field col s6">
            <i className="material-icons prefix m-2">person</i>
            <input
              id="username"
              type="text"
              value={user.username}
              class="validate"
              placeholder="Enter Username"
              onChange={onChange}
            />
          </div>




          <div className="input-field col s6">
            <i className="material-icons prefix">account_circle</i>
            <input
              id="name"
              type="text"
              class="validate"
              value={user.name}
              placeholder="Enter Name"
              onChange={onChange}
            />
           
          </div>
          <div className="input-field col s6">
            
          

            <i className="material-icons prefix">email</i>
            <input
              id="email"
              type="email"
              value={user.email}
              class="validate"
              placeholder="Enter Email"
              onChange={onChange}
            />
          </div>
          <div className="input-field col s6">
            
          

            <i className="material-icons prefix">phone</i>
            <input
              id="phone"
              type="tel"
              value={user.phone}
              class="validate"
              placeholder="Enter Phone"
              onChange={onChange}
            />

             <a
              className="waves-effect waves-light btn m-1"
              onClick={() => addUser()}
            >
              Add
            </a>
            <a
              className="waves-effect waves-light right btn m-1"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </a>
          </div>
        </>
        }
        </MyModal>

        <div className="row m-1">
          <div className="col s4">
            <a
              class="waves-effect waves-light btn"
              onClick={() => setShowModal(true)}
            >
              Add user
            </a>
          </div>

          <div className="col s8">
           

          </div>
        </div>
        {loading?(
            <Loader
              className="center"
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
            />
        ) :(
        <UserList search removeUser={deleteUser}>
          {users}
        </UserList>
        )}
      </div>
    </div>
  );
}

export default Users;
