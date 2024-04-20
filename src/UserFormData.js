import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UserFormData = ({ userFormData, handleFormDataChange, nextStep }) => {
    const { firstName, lastName, email, dob, contactNo } = userFormData;

    const handleNext = (e) => {
        e.preventDefault();
        if (checkValidFormData()) {
            nextStep();
        }
    };

    const checkValidFormData = () => {
        let isValid = true;

        if (!firstName.trim()) {
            alert("Enter first name");
            isValid = false;
        }

        if (!lastName.trim()) {
            alert("Enter last name");
            isValid = false;
        }

        if (!email.trim()) {
            alert("Enter email address");
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Invalid email format");
            isValid = false;
        }

        if (!dob) {
            alert("Select date of birth");
            isValid = false;
        } else {
            const today = new Date();
            const birthDate = new Date(dob);
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            if (age < 18) {
                alert("Must be 18 years old or above")
                isValid = false;
            }
        }

        if (!contactNo.trim()) {
            alert("Enter contact number")
            isValid = false;
        } else if (!/^\d{10}$/.test(contactNo)) {
            alert("Enter 10 digit number")
            isValid = false;
        }

        if (!isValid) {
            console.log("Error");
        }
        return isValid;
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleNext}>
                <div className="row">
                    <h1 className="mb-4">Step 1</h1>
                    <label>
                        First Name:
                        <input
                            className="form-control mb-2"
                            type="text"
                            value={firstName}
                            onChange={(e) =>
                                handleFormDataChange("firstName", e.target.value)
                            }
                        />
                    </label>
                    <label>
                        Last Name:
                        <input
                            className="form-control mb-2"
                            type="text"
                            value={lastName}
                            onChange={(e) => handleFormDataChange("lastName", e.target.value)}
                        />
                    </label>
                    <label>
                        Email
                        <input
                            className="form-control mb-2"
                            type="email"
                            value={email}
                            onChange={(e) => handleFormDataChange("email", e.target.value)}
                        />
                    </label>
                    <label>
                        Date Of Birth:
                        <DatePicker
                            selected={dob}
                            onChange={(date) => handleFormDataChange("dob", date)}
                            maxDate={new Date()}
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                        />
                    </label>
                    <label>
                        Contact Number:
                        <input
                            className="form-control mb-2"
                            type="phone"
                            value={contactNo}
                            onChange={(e) =>
                                handleFormDataChange("contactNo", e.target.value)
                            }
                        />
                    </label>
                    <div className="row">
                        <div className="col-lg-12 col-sm-12 col-md-12">
                            <div className="form-group">
                                <button className="btn btn-success">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserFormData;
