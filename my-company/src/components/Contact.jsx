import React from "react";
function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    age: 0,
    email: "",
  });
  const handleChange = (event) => {
    const { name, value } = event;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = () => {};
  return (
    <>
      <div style={{ padding: "20px" }}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxWidth: "400px",
          }}
        >
          <h1>Contact Us</h1>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Please Enter Name"
            value={formData.name}
          />
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            required
            placeholder="Please Enter Age"
            value={formData.age}
            onChange={handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Please Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
        </form>
      </div>
    </>
  );
}
export default Contact;
