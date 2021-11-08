import React, { useState, useEffect } from "react";
import { devices } from "../components/DeviceItem";
const Devices = () => {
    const [phones, setPhones] = useState(null);
    useEffect(()=>{
        setPhones(devices)

    },[])
    const value=[
        "apple",
        "samsung",
        "nokia",
    ];

    const onChange = (e) =>{
        if(e.target.value == "") {
            setPhones(devices)
            return
        }
        
       setPhones(devices.filter((phone)=>phone.brand ==e.target.value))
    };
  return (
    <div className="container">
      <label>Browser Select</label>
      <select onChange={onChange} className="browser-default">
        <option value="">
         choose brand
        </option>
        {value.map((key)=>(<option key={key} value={key}>{key}</option>

        ))}
      </select>
      <table>
        <thead>
          <tr>
            {Object.keys(devices[0]).map((field) => (
              <th key={field}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {phones && phones.map((device) => (
            <tr key={device.id}>
              <td>{device.id}</td>
              <td>{device.name}</td>
              <td>{device.brand}</td>
              <td>{device.description}</td>
              <td>{device.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Devices;
