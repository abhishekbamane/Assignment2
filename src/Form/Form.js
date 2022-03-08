import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [index, setIndex] = useState(1);

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIndex(index + 1);
    const exportData = {
      firstName: firstName,
      lastName: lastName,
      index: index
    };
    props.getData(exportData);
    setFirstName("");
    setLastName("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
          <input type='hidden' value={index} />
        <div className="new-expense__control">
          <label>Firstname</label>
          <input type="text" value={firstName} onChange={firstNameHandler} />
        </div>
        <div className="new-expense__control">
          <label>Lastname</label>
          <input type="text" value={lastName} onChange={lastNameHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
