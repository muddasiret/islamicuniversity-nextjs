import React from "react";
import { useFormik } from "formik";
import Layout from "../components/layout";
import { BASE_URL } from "../Common/constants";

const Contact = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      const body = { data: values };
      console.log(values);
      alert(JSON.stringify(values, null, 2));
      fetch(`${BASE_URL}/api/contact-forms`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((res) => {
        console.log(res.json());
      });
    },
  });

  const errorClasses = "text-red-600";
  const inputClasses = "border-2 rounded-md p-1";
  const inputGroupClasses = "mb-5";

  return (
    <Layout>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Your Name (required)</label>
        <div className={inputGroupClasses}>
          <input
            id="name"
            name="name"
            type="text"
            className={inputClasses}
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.name ? (
            <div className={errorClasses}>{formik.errors.name}</div>
          ) : null}
        </div>

        <label htmlFor="email">Your Email (required)</label>
        <div className={inputGroupClasses}>
          <input
            id="email"
            name="email"
            type="email"
            className={inputClasses}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className={errorClasses}>{formik.errors.email}</div>
          ) : null}
        </div>

        <label htmlFor="subject">Subject</label>
        <div className={inputGroupClasses}>
          <input
            id="subject"
            name="subject"
            type="text"
            className={inputClasses}
            onChange={formik.handleChange}
            value={formik.values.subject}
          />
        </div>

        <label htmlFor="message">Message</label>
        <div className={inputGroupClasses}>
          <textarea
            id="message"
            name="message"
            type="text"
            className={inputClasses}
            onChange={formik.handleChange}
            value={formik.values.message}
          />
        </div>

        <button className="border-2 mt-5 p-2 rounded-md	" type="submit">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Contact;
