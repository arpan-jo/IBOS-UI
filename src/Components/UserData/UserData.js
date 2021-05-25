import React from 'react';

const UserData = props => {
   const { _id, email, name } = props.user;

   const handleDelete = id => {
      fetch('https://fast-fjord-43483.herokuapp.com/deleteUser', {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ id }),
      })
         .then(res => res.json())
         .then(result => {
            if (result === true) {
               window.location.reload();
            }
         });
   };

   return (
      <tr>
         <td>{name}</td>
         <td>{email}</td>
         <td>
            <button onClick={() => handleDelete(_id)} className="deleteBtn">
               Delete
            </button>
         </td>
      </tr>
   );
};

export default UserData;
