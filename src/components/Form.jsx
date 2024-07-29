// Learning forms in react

import React, { useId, useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isFriendly: true,
    employment: "",
    favColor: ""
  });

  // console.log(formData.favColor);
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormaData) => ({
      ...prevFormaData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }


  function handleSubmit(event){
    // event.preventDefault()
    console.log(formData)
    // submitToApi(formData)
  }

  const id = useId()
  return (
    <form className="flex flex-col px-5" onSubmit={handleSubmit}>
      <label htmlFor={`${id}--firstname`} >First Name</label>
      <input
        type="text"
        placeholder="First Name"
        className="h-6 w-32 border border-black "
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        id={`${id}--firstname`}
      />
      <label  htmlFor={`${id}--lastname`} ></label>
      <input
        type="text"
        placeholder="Last Name"
        className="h-6 w-32 "
        name='"LastName'
        value={formData.lastName}
        onChange={handleChange}
        id={`${id}--lastname`}
      />
      <label  htmlFor={`${id}--email`} ></label>
      <input
        type="email"
        placeholder="email"
        className="h-6 w-32 "
        name='"email'
        value={formData.email}
        onChange={handleChange}
        id={`${id}--email`}
      />
      <label  htmlFor={`${id}--comments`} ></label>
      <textarea
        value={formData.comment}
        name="comment"
        className="h-6 w-32 "
        onChange={handleChange}
        id={`${id}--comments`}

      />

      <label htmlFor="isFrienfly" className="flex gap-2">
        <input
          type="checkbox"
          id="isFrienfly"
          checked={formData.isFriendly}
          name="isFriendly"
          onChange={handleChange}
          
        />
        Are you friendly?
      </label>
      <br />
      <br />

      <fieldset className="outline-slate-400 outline px-2">
        <legend className="bg-slate-200 text-wrap p-3">
          Current employment status
        </legend>
        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
          className="mr-1"
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          checked={formData.employment === "part-time"}
          onChange={handleChange}
          className="mr-1"
        />
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          checked={formData.employment === "full-time"}
          onChange={handleChange}
          className="mr-1"
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>

      <br />

      <select
        name="favColor"
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        // className="mb-10"
      >
        <option value=""> -- Choose -- </option>
        <option value="red">Red ❤️</option>
        <option value="blue">Blue 💙</option>
        <option value="orange">Orange 🧡</option>
        <option value="green">Green 💚</option>
        <option value="indigo">Indigo 💜</option>
        <option value="yellow">Yellow 💛</option>
      </select>

      <br />
      <br />
      <button >Submit</button>
    </form>
  );
};

export default Form;
