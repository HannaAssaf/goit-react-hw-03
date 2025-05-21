import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Minimum number of letters 3")
    .max(50, "Maximum number of letters 50")
    .required("Required"),
  tel: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Enter the number in format XXX-XX-XX")
    .required("Required"),
});
export default function ContactForm({ onSubmit }) {
  const fieldId = useId();

  const handleSubmit = (values, helpers) => {
    onSubmit(values);
    helpers.resetForm();
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          username: "",
          tel: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className="label" htmlFor={`${fieldId}-username`}>
            Name
          </label>
          <Field
            type="text"
            name="username"
            className={css.field}
            id={`${fieldId}-username`}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={css.error}
          />

          <label className="label" htmlFor={`${fieldId}-tel`}>
            Number
          </label>
          <Field
            type="tel"
            name="tel"
            className={css.field}
            id={`${fieldId}-tel`}
          />
          <ErrorMessage name="tel" component="span" className={css.error} />

          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
