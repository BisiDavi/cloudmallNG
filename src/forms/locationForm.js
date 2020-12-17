// import { Field, reduxForm } from "redux-form";

const LocationForm = () => {
  return (
    <div className="locationForm">
      <form>
        <Field name="location" type="text" component="input" />
        <button type="submit">Confirm Address</button>
      </form>
    </div>
  );
};

export default LocationForm;
