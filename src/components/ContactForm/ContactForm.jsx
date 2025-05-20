import { Formik, Form, Field } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const fieldId = useId();

  return (
    <Formik
      inicialContacts={{
        username: "",
        email: "",
      }}
      onSubmit={() => {}}
    >
      <Form className={css.form}>
        <Field
          type="text"
          name="username"
          className={css.field}
          id={`${fieldId}-username`}
        />
        <Field
          type="tel"
          name="tel"
          className={css.field}
          id={`${fieldId}-tel`}
        />
      </Form>
    </Formik>
  );

  // <form className={css.form} onSubmit={handleSubmit}>
  //   <input className={css.field} type="text" name="text" />
  //   <input className={css.field} type="text" name="number" />
  //   <button type="submit">Add contact</button>
  // </form>
  //
}
