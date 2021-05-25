import React, { useState } from 'react';

const CheckData = () => {
   const Style = {
      padding: 'auto',
      width: '100%',
      margin: '0 auto',
   };

   const [data, setData] = useState([
      {
         moduleName: 'Products',
         activityName: 'Juice',
         isCreate: false,
         isView: false,
         isEdit: false,
         isDelete: false,
         isApprove: false,
      },
      {
         moduleName: 'Products',
         activityName: 'Tea',
         isCreate: false,
         isView: false,
         isEdit: false,
         isDelete: false,
         isApprove: false,
      },
      {
         moduleName: 'Products',
         activityName: 'Milk',
         isCreate: false,
         isView: false,
         isEdit: false,
         isDelete: false,
         isApprove: false,
      },
      {
         moduleName: 'Products',
         activityName: 'Bread',
         isCreate: false,
         isView: false,
         isEdit: false,
         isDelete: false,
         isApprove: false,
      },
      {
         moduleName: 'Products',
         activityName: 'Eggs',
         isCreate: false,
         isView: false,
         isEdit: false,
         isDelete: false,
         isApprove: false,
      },
   ]);

   // handle input checkbox
   const handleCheckBox = (name, e) => {
      let newData = [];
      data.forEach(item => {
         if (item.activityName === name) {
            const newItem = { ...item };
            newItem[e.target.name] = e.target.checked;
            newData.push(newItem);
         } else {
            newData.push(item);
         }
      });
      setData(newData);
   };

   return (
      <div>
         <h2 style={{ textAlign: 'center', marginTop: '60px' }}>
            Task 2: Checkbox
         </h2>
         <table>
            <tbody>
               <tr>
                  <th>Module Name</th>
                  <th>Activity Name</th>
                  <th>Create</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  <th>Approve</th>
               </tr>
               {data.map(item => (
                  <tr>
                     <td>{item.moduleName}</td>
                     <td>{item.activityName}</td>
                     <td>
                        <input
                           style={Style}
                           type="checkbox"
                           name="isCreate"
                           checked={item.isCreate}
                           onChange={e => handleCheckBox(item.activityName, e)}
                        />
                     </td>
                     <td>
                        <input
                           style={Style}
                           type="checkbox"
                           name="isView"
                           checked={item.isView}
                           onChange={e => handleCheckBox(item.activityName, e)}
                        />
                     </td>
                     <td>
                        <input
                           style={Style}
                           type="checkbox"
                           name="isEdit"
                           checked={item.isEdit}
                           onChange={e => handleCheckBox(item.activityName, e)}
                        />
                     </td>
                     <td>
                        <input
                           style={Style}
                           type="checkbox"
                           name="isDelete"
                           checked={item.isDelete}
                           onChange={e => handleCheckBox(item.activityName, e)}
                        />
                     </td>
                     <td>
                        <input
                           style={Style}
                           type="checkbox"
                           name="isApprove"
                           checked={item.isApprove}
                           onChange={e => handleCheckBox(item.activityName, e)}
                        />
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
         <p style={{ textAlign: 'center', marginBottom: '40px' }}>
            Developed by Arpan Chakma
         </p>
      </div>
   );
};

export default CheckData;
