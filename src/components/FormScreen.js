import React, { useEffect, useState, useLayoutEffect } from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { formAddToItem } from "../actions/formActions";
import PhoneInput from "react-phone-input-2";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import "react-phone-input-2/lib/style.css";
import { add, update, remove, setItems } from "../actions/form.action";

export const FormScreen = () => {
  const dispatch = useDispatch();
  const formReducer = useSelector(({ formReducer }) => formReducer);
  const [formData, setFormData] = useState({
    id: -1,
    prefix: '',
    firstname: '',
    lastname: '',
    selectedData: '',
    nationality: '',
    citizen: '',
    gender: '',
    phonenumber: '',
    salary: '',
    passport: '',
  });

  const handleEdit = ({ item, index }) => {
    console.log("item", item);
    setFormData({ ...item, id: index })
  }

  const handleDelete = (index) => {
    dispatch(remove(index));
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.id > -1) {
      dispatch(update(formData));
    } else {
      dispatch(add(formData));
    }
    setFormData({
      id: -1,
      prefix: '',
      firstname: '',
      lastname: '',
      selectedData: '',
      nationality: '',
      citizen: '',
      gender: '',
      phonenumber: '',
      salary: '',
      passport: '',
    })
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Create Account</h2>
          </li>
          <li>
            <label>TiHe</label>
            <select value={formData.prefix} onChange={(e) => setFormData({ ...formData, prefix: e.target.value })}>
              <option value="mr">Mr.</option>
              <option value="miss">miss</option>
            </select>
          </li>

          <li>
            <label htmlFor="firstname">FirstName</label>
            <input
              type="firstname"
              name="firstname"
              id="firstname"
              value={formData.firstname}
              onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
            ></input>
          </li>
          <li>
            <label htmlFor="lastname">Lastname</label>
            <input
              type="lastname"
              name="lastname"
              id="lastname"
              value={formData.lastname}
              onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
            ></input>
          </li>
          <li>
            <div>
              <label>Birthday</label>
              <DatePicker
                selected={formData.selectedData}
                onChange={(data) => setFormData({ ...formData, selectedData: data })}
                dateFormat="MM/dd/yyyy"
                isClearable
                showYearDropdown
              />
            </div>
          </li>
          <li>
            <label>nationality</label>
            <select
              value={formData.nationality}
              onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
            >
              <option value="thai">thai</option>
              <option value="loa">loa</option>
            </select>
          </li>
          <li>
            <label>citizen id</label>
            <input
              type="citizen"
              id="citizen"
              name="citizen"
              value={formData.citizen}
              onChange={(e) => setFormData({ ...formData, citizen: e.target.value })}
            ></input>
          </li>
          <li>
            <div value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
              <input type="radio" value="Male" name="gender" /> Male
              <input type="radio" value="Female" name="gender" /> Female
              <input type="radio" value="Other" name="gender" /> Other
            </div>
          </li>
          <li>
            <PhoneInput
              placeholder="Enter phone number"
              value={formData.phonenumber}
              onChange={phonenumber => setFormData({ ...formData, phonenumber: phonenumber })}
            />
          </li>
          <li>
            <label>Pass port No.</label>
            <input
              type="passport"
              id="passport"
              name="passport"
              value={formData.passport}
              onChange={(e) => setFormData({ ...formData, passport: e.target.value })}
            />
          </li>
          <li>
            <label>Expected Salary:</label>
            <input
              type="salary"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
            />
          </li>

          <li>
            <button type="submit" className="button primary">
              Submit
            </button>
          </li>
        </ul>
      </form>
      <div>
        {/* <table>
          <tbody>
            {formReducer.map(data, index => {
              return (
                <tr key={index}>
                  <td>{data.firstname}</td>
                </tr>
              )
            })}
          </tbody>
        </table> */}

        <table>
          <thead>
            <tr>
              <input type="checkbox"></input>
              <th>NAME</th>
              <th>GENDER</th>
              <th>MOBILE PHONE</th>
              <th>NATIONALITY</th>
            </tr>

          </thead>
          <tbody>
            {formReducer.map((item, index) => {
              return (<tr key={index}>
                {/* <th scope="row">
                  <input onChange={(event) => {
                    let checken = event.target.checked;

                  }} type="checkbox" checked={item.select}></input>
                </th> */}
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.gender}</td>
                <td>{item.phonenumber}</td>
                <td>{item.nationality}</td>
                <td><button onClick={() => handleEdit({ item, index })}>Edit</button></td>
                <td><button onClick={() => handleDelete(index)}>Delete</button></td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
