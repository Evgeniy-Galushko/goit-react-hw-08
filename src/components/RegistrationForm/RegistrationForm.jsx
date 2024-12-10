import { Formik, Form, Field } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId, useState } from "react";
import s from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";
import ModalAgreement from "../ModalAgreement/ModalAgreement";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const idUsername = useId();
  const idName = useId();
  const idNumber = useId();
  const idCheckbox = useId();

  const [disablet, setDisablet] = useState(false);
  const [modalAgreement, setModalAgreement] = useState(false);

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

  const handleChange = (e) => {
    setDisablet(e.target.checked);
  };

  const handleClick = () => {
    setModalAgreement(true);
  };

  const handleClickClose = () => {
    setModalAgreement(false);
  };

  return (
    <div className={s.formik}>
      <ModalAgreement
        isOpen={modalAgreement}
        isClose={handleClickClose}
        // editСontact={editableContact}
        // handleSubmit={handelSubmitEditContact}
      />
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
          <label htmlFor={idCheckbox} className={s.checkbox}>
            <Field
              type="checkbox"
              id={idCheckbox}
              name="agree"
              checked={disablet}
              onChange={handleChange}
            />
            <span className={s.checkboxSpan}>
              I agree to the{" "}
              <NavLink onClick={handleClick} className={s.checkboxSpanCollor}>
                Terms and Conditions!
              </NavLink>
            </span>
          </label>
          <button type="submit" className={s.formButton} disabled={!disablet}>
            Sign up
          </button>
        </Form>
      </Formik>
    </div>
  );
}
