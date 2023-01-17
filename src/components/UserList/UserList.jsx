import Card from '../ui/Card';
import UserItem from '../UserItem/UserItem';
import style from './UserList.module.css';

const UserList = (props) => {
  return (
      <Card className={style.users}>
          {props.users.map(user => {
          return <ul> <UserItem
            key={user.id}
            id={user.id}
            onDelete={props.onDeleteUser}>
              {user.name} ({user.age} in year)
            </UserItem>
            </ul>
          })}
      </Card>
  );
};

export default UserList;