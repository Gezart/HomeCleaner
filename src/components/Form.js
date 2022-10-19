import React from 'react'
// import { useState } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';


const FormComp = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
      message: Yup.string().required("Message is required"),
  });


  const onSubmit = async (values, onSubmitProps) => {


    const formData = new FormData();

    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("email", values.email);
    formData.append("message", values.message);

    await axios.post(`http://3.74.252.24/wp-json/contact-form-7/v1/contact-forms/578/feedback`, formData, {
      headers: {
        Authorization: `Basic YWRtaW46QWRtaW4xMjM=` 
      }
    });

    console.log("Form data", values);
    onSubmitProps.resetForm();
  };

  return (
    <div className="form">
      <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize>
        {(formik) => {
          return (
            <Form className="name">

              <div className="name">
                <div className="form-data">
                  <label htmlFor="firstName">First Name</label>
                  <Field type="text" name="firstName" id="firstName" />
                  <ErrorMessage name="firstName" component={TextError} />

                </div>

                <div className="form-data">
                  <label htmlFor="lastName">Last Name</label>
                  <Field type="text" name="lastName" id="lastName" />
                  <ErrorMessage name="lastName" component={TextError} />

                </div>
              </div>
              <div className="form-data">
                <label htmlFor="email">Email</label>
                <Field type="text" name="email" id="email" />
                <ErrorMessage name="email" component={TextError} />

              </div>

              <div className="form-data">
                <Field as="textarea" rows={5} name="message" id="message" />
                <ErrorMessage name="message" component={TextError} />

              </div>
              <button type='submit'>
                <span>Submit</span>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 0.75L6 6L0.75 11.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </Form>
          )



        }}

      </Formik>
    </div>
  )
}

const TextError = () => {
  return (
    <p style={{ color: "red", marginTop: "5px" }}>This field is required</p>
  )
}

export default FormComp



