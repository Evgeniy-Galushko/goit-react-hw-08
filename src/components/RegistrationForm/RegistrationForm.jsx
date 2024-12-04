import { Formik, Form, Field } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import s from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const idUsername = useId();
  const idName = useId();
  const idNumber = useId();
  const regs = {
    username: /^[а-яА-Яa-zA-Z0-9 ]{3,50}$/,
    email:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    password:
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/,
  };

  const pattern = Yup.object().shape({
    name: Yup.string()
      .matches(regs.username, "Too Short!")
      // .min(3, 'Too Short!')
      // .max(50, 'Too Long!')
      .required("Required"),
    email: Yup.string()
      .matches(regs.email, "Too Short!")
      // .min(3, 'Too Short!')
      // .max(50, 'Too Long!')
      .required("Required"),
    password: Yup.string()
      .matches(
        regs.password,
        "Пароль должен содержать: хотя бы одно число; !@#$%^&* - строка содержит хотя бы один спецсимвол; строка содержит хотя бы одну латинскую букву в нижнем регистре; строка содержит хотя бы одну латинскую букву в верхнем регистре; строка состоит не менее, чем из 8 вышеупомянутых символов."
      )
      // .min(3, 'Too Short!')
      // .max(50, 'Too Long!')
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  return (
    <div className={s.formik}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={pattern}
      >
        <Form className={s.form}>
          <h1 className={s.headline}>Sign up</h1>
          <div className={s.formDiv}>
            <label className={s.label} htmlFor={idUsername}>
              Username
            </label>
            <Field
              name="name"
              type="text"
              id={idUsername}
              className={s.field}
              placeholder="enter username"
              required
            />
            <ErrorMessage name="name" component="span" className={s.error} />
          </div>
          <div className={s.formDiv}>
            <label className={s.label} htmlFor={idName}>
              Email
            </label>
            <Field
              name="email"
              type="text"
              id={idName}
              className={s.field}
              placeholder="your@email.com"
              required
            />
            <ErrorMessage name="email" component="span" className={s.error} />
          </div>
          <div className={s.formDiv}>
            <label className={s.label} htmlFor={idNumber}>
              Password
            </label>
            <Field
              name="password"
              type="password"
              id={idNumber}
              className={s.field}
              placeholder="enter password"
              required
            />
            <ErrorMessage
              name="password"
              component="span"
              className={s.error}
            />
          </div>
          <button type="submit" className={s.formButton}>
            Sign up
          </button>
        </Form>
      </Formik>
    </div>
  );
}
