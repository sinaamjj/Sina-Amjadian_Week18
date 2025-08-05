import styles from "./FormInput.module.css";

function FormInput({
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  touched,
}) {
  return (
    <div className={styles.inputGroup}>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${touched && error ? styles.errorBorder : ""}`}
      />
      {touched && error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}
export default FormInput;
