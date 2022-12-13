import { FC } from 'react';
import { TData } from './CardList';

const Card: FC<{ user: TData }> = ({ user }) => {
  return (
    <div className="card">
      <div className="box">
        <img src={`https://ui-avatars.com/api/?name=${user.name}&rounded=true&background=random&size=32`} alt={user.name}/>
        <h2>{user.name}</h2>
      </div>
      <div className="box">
        <span className="email"></span><p>{user.email}</p>
      </div>
      <div className="box">
        <span className="phone"></span><p>{user.phoneNumber}</p>
      </div>
      <div className="box">
        <span className="address"></span><p>{user.address}</p>
      </div>

    </div>
  )
}

export default Card