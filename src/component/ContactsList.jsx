import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css";

function ContactsList({ contacts, deleteHandler, editHandler }) {
  console.log(contacts);
  return (
    <div className={styles.container}>
      <h3>YOU'R LIST</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contacts Found</p>
      )}
    </div>
  );
}

export default ContactsList;
