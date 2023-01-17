import Button from '../ui/Button';
import style from './UserItem.module.css';
import { useState } from 'react';
import Modal from '../ui/Modal';
const UserItem = (props) => {
  const [confirm, setConfirm] = useState(null);
  const deleteHandler = () => {
    if (!confirm) {
      setConfirm({
        title: "Deleting a user",
        message: "Are you sure you want to delete?",
      });
    }
  };

  const closeModalHandler = () => {
    setConfirm(null);
  };

  const onAgreeHandler = () => {
    props.onDelete(props.id)
    
  
 
  };

  return (
    <li className={style.user}>
      {props.children}
      <Button onClick={deleteHandler} id={props.id}>Delete</Button>
      {confirm && 
                  <Modal
                    id={props.id}
                    title={confirm.title}
                    message={confirm.message}
                    onConfirm={closeModalHandler}
                    onOkey={onAgreeHandler}
                  />
                }
    </li>
  );
};

export default UserItem;