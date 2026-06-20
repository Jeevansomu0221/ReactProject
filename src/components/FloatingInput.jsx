function FloatingInput({ label, required = false, id, ...props }) {
  return (
    <div className="form-group">
      <div className="floating-input-wrapper">
        <label htmlFor={id}>
          {label}
          {required && <span className="required">*</span>}
        </label>
        <input id={id} className="floating-input" {...props} />
      </div>
    </div>
  );
}

export default FloatingInput;
