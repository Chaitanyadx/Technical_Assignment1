import React, { Fragment, useState } from "react";
import "./App.css";
import UserImageData from "./UserImageData";
import UserFormData from "./UserFormData";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [step, setStep] = useState(1);
  const [userFormData, setUserFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    contactNo: "",
    images: [],
  });

  const handleFormDataChange = (input, value) => {
    setUserFormData({ ...userFormData, [input]: value });
  };

  return (
    <Fragment>
      {step === 1 ? (
        <UserFormData
          userFormData={userFormData}
          handleFormDataChange={handleFormDataChange}
          nextStep={() => setStep((prevStep) => prevStep + 1)}
        />
      ) : step === 2 ? (
        <UserImageData
          userFormData={userFormData}
          handleFormDataChange={handleFormDataChange}
          prevStep={() => setStep((prevStep) => prevStep - 1)}
        />
      ) : (
        <UserFormData
          userFormData={userFormData}
          handleFormDataChange={handleFormDataChange}
          nextStep={() => setStep((prevStep) => prevStep + 1)}
        />
      )}
    </Fragment>
  );
}
export default App;
