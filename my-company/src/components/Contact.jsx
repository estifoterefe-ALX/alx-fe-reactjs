import React from "react";
function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    age: null,
    email: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: name === "age" ? Number(value) : value,
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
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Please Enter Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
        </form>
      </div>
    </>
  );
}
export default Contact;
