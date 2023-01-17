import Card from '../ui/Card';
import Button from '../ui/Button';
import ErrorModal from '../ui/ErrorModal';
import style from './AddUser.module.css';
import { useState } from 'react';



const AddUser = (props) => {
const [userName, setUserName] = useState('')
const [age, setAge] = useState('')
const [error, setError] = useState(null)

const userNameChangeHandler = (event) => {
setUserName(event.target.value)
}

const ageChangeHandler = (event) => {
  setAge(event.target.value)
}

const submitHandler = (event) => {
  event.preventDefault()
  if(userName.trim().length === 0 || age.length === 0) {
    setError({
      title: 'Invaid value, inputs should not be empty!',
      message: 'Please, enter a not empty values!'
    })
    return
  }

  if(age < 1) {
    setError({
      title: 'Invalid age value!',
      message: 'Please, enter a number more than 1 !'
    })
    return
  }

  const user = {
     name: userName,
     age: age,
     id: Math.random().toString()
  }
  props.onAddUser(user)
  setUserName('')
  setAge('')
}

const closeModalHandler = () => {
  setError(null)
}

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={closeModalHandler}/>}
      <Card className={style.input}>
          <form onSubmit={submitHandler}>
            <label htmlFor="username">User Name</label>
            <input id='username' type="text"  onChange={userNameChangeHandler} value={userName}/>
            <label htmlFor="age">Age</label>
            <input id='age' type="number" onChange={ageChangeHandler} value={age}/>
            <Button>Add User</Button>
          </form>
      </Card>
    </div>
  );
};

export default AddUser;