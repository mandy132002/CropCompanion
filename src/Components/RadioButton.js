export const RadioButton = (props) => {
    const { changed, userType, label, value } = props;
    return (
      <div className="RadioButton">
        <input
          onChange={changed}
          value={value}
          type="radio"
          checked={userType}
        />
        <label>{label}</label>
      </div>
    );
  };