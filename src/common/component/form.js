import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const signupSchema = Yup.object().shape({
  username: Yup.string().required("Please fill this field").min(4),
  email: Yup.string()
    .email("Enter valid email")
    .required("Please fill this field"),
  password: Yup.string().required("Please fill this field").min(10),
});

const AuthForm = (props) => {
  const { type } = props;
  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={signupSchema}
        onSubmit={(values, { setSubmitting }) => {}}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="flex flex-col gap-3">
            {type == "signup" && (
              <div>
                <Field
                  className="bg-[#F5F5F5] h-16 w-full rounded-md px-3 outline-none"
                  name="username"
                  type="text"
                  placeholder="Username"
                />
                {errors.username && touched.username ? (
                  <div className=" text-red-600">{errors.username}</div>
                ) : null}
              </div>
            )}
            <div>
              <Field
                className="bg-[#F5F5F5] h-16 w-full rounded-md px-3 outline-none"
                name="email"
                type="text"
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <div className=" text-red-600">{errors.email}</div>
              ) : null}
            </div>
            <div>
              <Field
                className="bg-[#F5F5F5] h-16 w-full rounded-md px-3 outline-none"
                name="password"
                type="password"
                placeholder="Password"
              />
              {errors.password && touched.password ? (
                <div className=" text-red-600">{errors.password}</div>
              ) : null}
            </div>
            <button className="h-16 w-full bg-[#2F3538] hover:bg-gray-700 text-white rounded-md">
              {type == "signup" ? "Sign Up" : "Continue"}
            </button>
          </Form>
        )}
      </Formik>
      <div className="flex gap-2 w-full justify-center mt-3">
        <span>Already a member?</span>
        {type == "signup" ? (
          <Link to="/login">
            <span className="font-bold underline">Log in</span>
          </Link>
        ) : (
          <Link to="/signup">
            <span className="font-bold underline">Sign up</span>
          </Link>
        )}
      </div>
    </>
  );
};

export default AuthForm;
