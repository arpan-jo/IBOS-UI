import React from 'react';
import { useForm } from 'react-hook-form';
import LoadUser from '../LoadUser/LoadUser';
import './AddUser.css';

const AddUser = () => {
   const { register, handleSubmit } = useForm();
   const onSubmit = data => {
      fetch('https://fast-fjord-43483.herokuapp.com/addUsers', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
      })
         .then(res => res.json())
         .then(result => {
            if (result !== true) {
               alert('This email is already added');
            }
            if (result === true) {
               window.location.reload();
               data = '';
            }
         });
   };
   return (
      <div>
         <h2 style={{ textAlign: 'center', marginTop: '50px' }}>
            Task 1: Creating Users
         </h2>
         <form onSubmit={handleSubmit(onSubmit)} className="add-user">
            <label htmlFor="name">Name :</label>
            <input type="text" name="name" {...register('name')} required />
            <br />
            <label htmlFor="email">Email :</label>
            <input type="email" name="email" {...register('email')} required />
            <br />
            <button className="addBtn" type="submit">
               Add
            </button>
         </form>
         <LoadUser />
      </div>
   );
};

export default AddUser;
