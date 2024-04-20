import React from "react";

const UserImageData = ({ userFormData, handleFormDataChange, prevStep }) => {
    const { images } = userFormData;

    const previousImage = (e) => {
        e.preventDefault();
        prevStep();
    };

    const uploadImageHandler = (e) => {
        const selectedImages = Array.from(e.target.files);
        if (selectedImages.length === 0) {
            alert("Upload images");
            return;
        } else {
            const isValid = selectedImages.every(
                (image) =>
                    image.type === "image/jpeg" ||
                    image.type === "image/jpg" ||
                    image.type === "image/png"
            );
            if (!isValid) {
                alert("Only png, jpg, and jpeg images are allowed");
                return;
            }
        }
        handleFormDataChange("images", selectedImages);
    };

    const handleRemoveImage = (index) => {
        const updatedImages = images.filter((img, i) => i !== index);
        handleFormDataChange("images", updatedImages);
    };

    const onFinalSubmit = (e) => {
        e.preventDefault();
        console.log("userFormData : " , userFormData)
    }

    return (
        <div className="container">

            <div className="row">
                <h1 className="mb-4">Step 1</h1>
                <h2>Image Upload</h2>
                <form onSubmit={onFinalSubmit}>
                    <div className="form-group">
                        <label>Upload multiple images</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={uploadImageHandler}
                            multiple
                        />
                    </div>
                    <div className="image-preview">
                        {images.map((image, index) => (
                            <div key={index} className="preview-image">
                                <img src={URL.createObjectURL(image)} alt={`Preview ${index}`} />
                                <span
                                    className="close-icon"
                                    onClick={() => handleRemoveImage(index)}
                                >
                                    &times;
                                </span>
                            </div>
                        ))}
                    </div>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={previousImage}
                    >
                        Previous
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserImageData;
