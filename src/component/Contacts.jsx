import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Formik, Form } from "formik";

import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";
import styles from "./Contacts.module.css";
import FormInput from "./FormInput";
import { contactSchema } from "../constants/validationSchema";

function Contacts() {
  const {
    contact,
    alert,
    contacts,
    changeHandler,
    addHandler,
    deleteHandler,
    editHandler,
    isEditing,
    editSubmitHandler,
    searchTerm,
    changeSearchHandler,
    filteredContacts,
  } = useContext(Context);

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search Contacts"
          value={searchTerm}
          onChange={changeSearchHandler}
        />
      </div>

      <Formik
        initialValues={contact}
        validationSchema={contactSchema}
        enableReinitialize
        onSubmit={(values, { resetForm }) => {
          if (isEditing) {
            editSubmitHandler(values);
          } else {
            addHandler(values);
          }
          resetForm();
        }}
      >
        {({ values, handleChange, errors, touched }) => (
          <Form className={styles.form}>
            {inputs.map((input, index) => (
              <FormInput
                key={index}
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                value={values[input.name]}
                onChange={handleChange}
                error={errors[input.name]}
                touched={touched[input.name]}
              />
            ))}

            <button type="submit">
              {isEditing ? "Save Changes" : "Add Contact"}
            </button>
          </Form>
        )}
      </Formik>

      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>

      <ContactsList
        contacts={filteredContacts}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
      />
    </div>
  );
}

export default Contacts;
