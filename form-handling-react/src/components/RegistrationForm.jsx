import React from "react";
import { useState } from "react";
function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted", formData);
      alert("Form submitted successfully!");
    }
  };
  return (
    <>
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <h1 className="text-4xl font-bold text-center mt-10 mb-6">
          Add a New Recipe
        </h1>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-xl sm:min-w-2xl md:min-w-4xl lg:w-full mx-auto bg-white p-8 rounded-lg shadow-md"
        >
          <div className="mb-4 border-2 border-gray-200 rounded-lg overflow-hidden p-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-bold mb-2"
            >
              Username
            </label>
            {errors.username && (
              <p className="text-red-500 text-xs italic">{errors.username}</p>
            )}
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default RegistrationForm;
