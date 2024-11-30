import { Formik, Form, Field } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import s from "./LoginForm.module.css";

export default function LoginForm() {
  const idName = useId();
  const idNumber = useId();
  const regs = {
    // "^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
    email:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    password:
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/,
  };

  const pattern = Yup.object().shape({
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
    console.log(values);
    actions.resetForm();
  };

  const initialValues = {
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
          <div className={s.formDiv}>
            <label className={s.label} htmlFor={idName}>
              Email
            </label>
            <Field
              name="email"
              type="text"
              id={idName}
              className={s.field}
              placeholder="enter your email"
            />
            <ErrorMessage name="email" component="span" className={s.error} />
          </div>
          <div className={s.formDiv}>
            <label className={s.label} htmlFor={idNumber}>
              Password
            </label>
            <Field
              name="password"
              type="text"
              id={idNumber}
              className={s.field}
              placeholder="enter password"
            />
            <ErrorMessage
              name="password"
              component="span"
              className={s.error}
            />
          </div>
          <button type="submit" className={s.formButton}>
            Log in
          </button>
        </Form>
      </Formik>
    </div>
  );
}
