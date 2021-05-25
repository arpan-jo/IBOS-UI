import React, { useEffect, useState } from 'react';
import UserData from '../UserData/UserData';
import './LoadUser.css';

const LoadUser = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      fetch('https://fast-fjord-43483.herokuapp.com/getUsers')
         .then(res => res.json())
         .then(data => setUsers(data));
   }, []);

   return (
      <div>
         <h4 style={{ marginLeft: '15%', marginTop: '50px' }}>ALL USERS:</h4>
         <table>
            <tbody>
               <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
               </tr>
               {users.map(user => (
                  <UserData key={user._id} user={user} />
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default LoadUser;
