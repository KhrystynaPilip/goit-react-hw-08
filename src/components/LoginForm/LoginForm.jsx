import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        console.log("Login success");
      })
      .catch(() => {
        console.log("login error");
      });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      on
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
