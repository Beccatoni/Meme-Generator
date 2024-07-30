import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    Email: "",

    Password: "",

    ConfirmPassword: "",

    Newsletter: false,
  });

  console.log(formData.Newsletter)

  function handleChange(event) {
    const { name, value, checked, type } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault()
    if(formData.Password !== formData.ConfirmPassword){
        alert("Passwords should match!")
    }
    else{
      
        alert("successfully logged in");
    }
    console.log(formData);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[30rem] h-[28rem] bg-indigo-200 flex flex-col justify-center rounded-md gap-5 px-10 py-10  shadow-xl "
    >
      <input
        type="email"
        value={formData.Email}
        name="Email"
        placeholder="Email address"
        onChange={handleChange}
        className="bg-transparent border rounded-lg px-2 h-[3rem] w-full"
      />
      <input
        type="password"
        value={formData.Password}
        name="Password"
        id="pass"
        placeholder="Password"
        onChange={handleChange}
        className="bg-transparent border rounded-lg px-2 h-[3rem] w-full"
      />
      <input
        type="password"
        value={formData.ConfirmPassword}
        name="ConfirmPassword"
        id="conf-pass"
        onChange={handleChange}
        placeholder="Confirm password"
        className="bg-transparent border rounded-lg px-2 h-[3rem] w-full"
      />

      <label htmlFor="check" className="flex gap-2">
        
        <input
          type="checkbox"
          checked={formData.Newsletter}
          id="check"
          name="Newsletter"
          onChange={handleChange}
        />
        I want to join the newsletter
      </label>
      <button className="bg-indigo-700 h-10 w-24 rounded-lg text-white font-bold">
        Sign up
      </button>
    </form>
  );
};

export default Signup;
