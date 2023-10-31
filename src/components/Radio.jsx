const Radio = ({ label, id, name, value, checked, onChange }) => {
  return (
    <div style={{ display: "inline-block", marginRight: "0.5rem" }}>
      <input
        type="radio"
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

export default Radio;
