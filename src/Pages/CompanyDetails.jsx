import Input from "../Components/Input";
import leftArrowIcon from "../assets/images/icon-arrow-left.svg";
import SidePanel from "../Components/SidePanel";
import "./css/companydetails.css";
import galleryIcon from "../assets/images/icon-gallery.svg";
import { useFormik } from "formik";
import { companyDetailsSchema } from "../schemas/companyDetailsSchema.jsx";

const CompanyDetails = () => {
    const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
        useFormik({
            initialValues: {
                name: "",
                address: "",
                city: "",
                postCode: "",
                country: "",
            },
            validationSchema: companyDetailsSchema,
            onSubmit: (values) => {
                console.log("Form submitted with values:", values);
            },
        });
    const handleSaveClick = () => {
        console.log(errors);
        handleSubmit();
    };
    return (
        <>
            <SidePanel />
            <div className="company-details-parent">
                <div className="back-to-home">
                    <img src={leftArrowIcon} alt="Left Arrow" />
                    <h4>Go back</h4>
                </div>
                <div className="company-details-main">
                    <div className="company-details-head">
                        <h1>Company Details</h1>
                        <h3>Add your company details</h3>
                    </div>
                    <div className="input1">
                        <Input
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="name"
                            type="text"
                            label="Name"
                            error={errors.name}
                            touched={touched.name}
                        />
                        <div className="logo-input-parent">
                            <div className="label-head">
                                <p style={{ color: "var(--7)" }}>Logo</p>
                            </div>
                            <div className="logo-input">
                                <img src={galleryIcon} alt="Company Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="input-2">
                        <Input
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="address"
                            type="text"
                            label="Street Address"
                            error={errors.address}
                            touched={touched.address}
                        />
                    </div>
                    <div className="input-3">
                        <Input
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="city"
                            type="text"
                            label="City"
                            error={errors.city}
                            touched={touched.city}
                        />
                        <Input
                            value={values.postCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="postCode"
                            type="text"
                            label="Post Code"
                            error={errors.postCode}
                            touched={touched.postCode}
                        />
                        <Input
                            value={values.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="country"
                            type="text"
                            label="Country"
                            error={errors.country}
                            touched={touched.country}
                        />
                    </div>
                </div>
                <div className="company-details-save">
                    <div
                        className="company-details-save-button"
                        onClick={handleSaveClick}
                    >
                        <h4>Save</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompanyDetails;
