import React, { useState } from "react";
import "./AdminServicesTableRow.css";

const AdminServicesTableRow = ({ service }) => {
  console.log(service);
  const [selectedStatus, setSelectedStatus] = useState(service.status);

  const handleDropdownChange = (e) => {
    const newSelected = e.target.value;
    setSelectedStatus(newSelected);

    const newValue = {
      status : newSelected
    }

<<<<<<< HEAD
     fetch(`https://infinite-wave-15770.herokuapp.com/updateOrderStatus/${service._id}`, {
=======
    fetch(`https://infinite-wave-15770.herokuapp.com/updateOrderStatus/${service._id}`, {
>>>>>>> 7b5966342dd4e7c99eb1f8df511a39cecd2885d0
      method: "PUT",
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(newValue),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("order status updated successfully");
        }
      });

  };

  return (
    <tr>
      <td>{service.name}</td>
      <td>{service.email}</td>
      <td>{service.category}</td>
      <td>{service.details}</td>
      <td>
        <select
          className={`text-${selectedStatus}`}
          value={selectedStatus}
          onChange={handleDropdownChange}
        >
          <option className="text-Pending" value="Pending">
            Pending
          </option>
          <option className="text-Done" value="Done">
            Done
          </option>
          <option className="text-OnProcess" value="OnProcess">
            On Process
          </option>
        </select>
      </td>
    </tr>
  );
};

export default AdminServicesTableRow;