import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function formikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  return (
    <>
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <h1 className="text-4xl font-bold text-center mt-10 mb-6">
          Registration Form
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Form submitted", values);
            alert("Form submitted successfully!");
          }}
        >
          <Form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Username
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}
export default formikForm;
