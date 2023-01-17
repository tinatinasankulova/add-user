import { useState } from 'react';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';

function App() {

const [users, setUsers] = useState([])

const addUserInfo = userInfo => {
  setUsers([...users, userInfo])
}


const deleteItemHandler = userinfo => {
  setUsers(prevState => {
    const updatedInfo = prevState.filter(user => user.id !== userinfo);
    return updatedInfo;
  });
};
let content = (
  <h3 style={{ textAlign: 'center', color: 'white' }}>No users found. Maybe add one?</h3>
)
if (users.length > 0) {
  content = (
    <UserList users={users} onDeleteUser={deleteItemHandler} />
  );
}

  return (
    <div>
    <AddUser onAddUser={addUserInfo}/>
   {content}
    </div>
  );
}

export default App;
