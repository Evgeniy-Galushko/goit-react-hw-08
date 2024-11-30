import { Formik, Form, Field } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contacts/operations";

export default function ContactForm() {
  const idName = useId();
  const idNumber = useId();
  const regs = {
    // "^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
    name: "^[а-яА-Яa-zA-Z ]{3,50}$",
    number: "[0-9]{3}[0-9]{3}[0-9]{4}",
    // /(\d{3})(\d{3})(\d{2})(\d{2})/
  };

  const pattern = Yup.object().shape({
    name: Yup.string()
      .matches(regs.name, "Too Short!")
      // .min(3, 'Too Short!')
      // .max(50, 'Too Long!')
      .required("Required"),
    number: Yup.string()
      .matches(regs.number, "Too Short!")
      // .min(3, 'Too Short!')
      // .max(50, 'Too Long!')
      .required("Required"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));

    actions.resetForm();
  };

  const initialValues = {
    name: "",
    number: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={pattern}
    >
      <Form className={s.form}>
        <div className={s.formDiv}>
          <label className={s.label} htmlFor={idName}>
            Name
          </label>
          <Field
            name="name"
            type="text"
            id={idName}
            className={s.field}
            placeholder="enter your name"
          />
          <ErrorMessage name="name" component="span" className={s.error} />
        </div>
        <div className={s.formDiv}>
          <label className={s.label} htmlFor={idNumber}>
            Number
          </label>
          <Field
            name="number"
            type="tel"
            id={idNumber}
            className={s.field}
            placeholder="enter your phone number"
          />
          <ErrorMessage name="number" component="span" className={s.error} />
        </div>
        <button type="submit" className={s.formButton}>
          Add contact{" "}
        </button>
      </Form>
    </Formik>
  );
}
