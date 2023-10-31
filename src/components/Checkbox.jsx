const Checkbox = ({ label, id, name, value, checked, onChange }) => {
  return (
    <div style={{ display: "inline-block", marginRight: "0.5rem" }}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={(event) => onChange(event)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
