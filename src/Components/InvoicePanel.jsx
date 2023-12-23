import "./css/invoicepanel.css";
import Input from "../Components/Input";
import { useState } from "react";
import deleteIcon from "../assets/images/icon-delete.svg";
import { useFormik } from "formik";
import { invoicePanelDataSchema } from "../schemas/invoicePanelDataSchema.jsx";

const InvoicePanel = ({ isOpen, onClose }) => {
    const [itemsListCount, setItemsListCount] = useState(1);
    const [itemsListArray, setItemsListArray] = useState([
        { serial: itemsListCount, itemName: "", qty: "", price: "" },
    ]);

    const addItemInput = () => {
        setItemsListCount((prevCount) => prevCount + 1);
        setItemsListArray((prevItemsListArray) => [
            ...prevItemsListArray,
            { serial: itemsListCount + 1, itemName: "", qty: "", price: "" },
        ]);
    };

    const initialValues = {
        clientName: "",
        clientEmail: "",
        clientAddress: "",
        clientCity: "",
        clientPostCode: "",
        clientCountry: "",
        invoiceDate: "",
        paymentTerms: "",
        projectDescription: "",
        ...Array.from({ length: itemsListCount }, (_, index) => ({
            [`itemName${index + 1}`]: "",
            [`qty${index + 1}`]: "",
            [`price${index + 1}`]: "",
        })).reduce((acc, curr) => ({ ...acc, ...curr }), {}),
    };
    const {
        values,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        setFieldValue,
    } = useFormik({
        initialValues,
        validationSchema: invoicePanelDataSchema(itemsListArray.length),
        onSubmit: (values, actions) => {
            console.log("Form submitted with values:", values);
            actions.resetForm();
        },
    });

    const handleSaveClick = () => {
        const substringsToCheck = ["itemName", "qty", "price"];
        const hasMatchingKeys = Object.keys(errors).some((key) =>
            substringsToCheck.some((substring) => key.includes(substring))
        );
        console.log("Does any key include the substrings:", hasMatchingKeys);
        console.log(errors);
        handleSubmit();
    };

    return (
        <>
            {isOpen && (
                <>
                    <div
                        onClick={onClose}
                        className="invoice-panel-background"
                    ></div>
                    <div className="invoice-panel-parent">
                        <div className="invoice-panel-main">
                            <h2>New Invoice</h2>
                            <h4 style={{ color: "var(--1)" }}>Bill To</h4>
                            <div className="invoice-panel-input-1">
                                <Input
                                    value={values.clientName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.clientName}
                                    touched={touched.clientName}
                                    id="clientName"
                                    type="text"
                                    label="Client’s Name"
                                />
                            </div>
                            <div className="invoice-panel-input-2">
                                <Input
                                    value={values.clientEmail}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.clientEmail}
                                    touched={touched.clientEmail}
                                    id="clientEmail"
                                    type="text"
                                    label="Client’s Email"
                                />
                            </div>
                            <div className="invoice-panel-input-3">
                                <Input
                                    value={values.clientAddress}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.clientAddress}
                                    touched={touched.clientAddress}
                                    id="clientAddress"
                                    type="text"
                                    label="Street Address"
                                />
                            </div>
                            <div className="invoice-panel-input-4">
                                <Input
                                    value={values.clientCity}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.clientCity}
                                    touched={touched.clientCity}
                                    id="clientCity"
                                    type="text"
                                    label="City"
                                />
                                <Input
                                    value={values.clientPostCode}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.clientPostCode}
                                    touched={touched.clientPostCode}
                                    id="clientPostCode"
                                    type="text"
                                    label="Post Code"
                                />
                                <Input
                                    value={values.clientCountry}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.clientCountry}
                                    touched={touched.clientCountry}
                                    id="clientCountry"
                                    type="text"
                                    label="Country"
                                />
                            </div>
                            <div className="invoice-panel-input-5">
                                <Input
                                    value={values.invoiceDate}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.invoiceDate}
                                    touched={touched.invoiceDate}
                                    id="invoiceDate"
                                    type="text"
                                    label="Invoice Date"
                                    setFieldValue={setFieldValue}
                                />
                                <Input
                                    value={values.paymentTerms}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.paymentTerms}
                                    touched={touched.paymentTerms}
                                    id="paymentTerms"
                                    type="text"
                                    label="Payment Terms"
                                    setFieldValue={setFieldValue}
                                />
                            </div>
                            <div className="invoice-panel-input-6">
                                <Input
                                    value={values.projectDescription}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.projectDescription}
                                    touched={touched.projectDescription}
                                    id="projectDescription"
                                    type="text"
                                    label="Project Description"
                                />
                            </div>
                            <div className="invoice-panel-items-list">
                                <h4
                                    style={{
                                        color: "var(--1)",
                                        marginBottom: "16px",
                                    }}
                                >
                                    Items List
                                </h4>
                                <div className="invoice-panel-items-names">
                                    <div className="invoice-panel-items-names-header">
                                        <p style={{ flex: "3" }}>Item Name</p>
                                        <p style={{ flex: "1" }}>Qty.</p>
                                        <p style={{ flex: "1" }}>Price</p>
                                        <p style={{ flex: "1" }}>Total</p>
                                    </div>
                                    <div className="invoice-panel-items-remove"></div>
                                </div>
                                <div className="invoice-panel-items-names-body">
                                    {itemsListArray.map((_, index) => (
                                        <div
                                            className="invoice-panel-items-names-inputs-parent"
                                            key={index + 1}
                                        >
                                            <div className="invoice-panel-items-names-inputs">
                                                <Input
                                                    flex="3"
                                                    value={
                                                        values[
                                                            `itemName${
                                                                index + 1
                                                            }`
                                                        ]
                                                    }
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={
                                                        errors[
                                                            `itemName${
                                                                index + 1
                                                            }`
                                                        ]
                                                    }
                                                    touched={
                                                        touched[
                                                            `itemName${
                                                                index + 1
                                                            }`
                                                        ]
                                                    }
                                                    id={`itemName${index + 1}`}
                                                    type="text"
                                                />
                                                <Input
                                                    flex="1"
                                                    value={
                                                        values[
                                                            `qty${index + 1}`
                                                        ]
                                                    }
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={
                                                        errors[
                                                            `qty${index + 1}`
                                                        ]
                                                    }
                                                    touched={
                                                        touched[
                                                            `qty${index + 1}`
                                                        ]
                                                    }
                                                    id={`qty${index + 1}`}
                                                    type="text"
                                                />
                                                <Input
                                                    flex="1"
                                                    value={
                                                        values[
                                                            `price${index + 1}`
                                                        ]
                                                    }
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={
                                                        errors[
                                                            `price${index + 1}`
                                                        ]
                                                    }
                                                    touched={
                                                        touched[
                                                            `price${index + 1}`
                                                        ]
                                                    }
                                                    id={`price${index + 1}`}
                                                    type="text"
                                                />

                                                <h4
                                                    style={{
                                                        color: "var(--6)",
                                                    }}
                                                >
                                                    400.00
                                                </h4>
                                            </div>
                                            <div className="invoice-panel-items-remove">
                                                <img
                                                    src={deleteIcon}
                                                    alt="Delete"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div
                                    onClick={addItemInput}
                                    className="invoice-panel-add-new-item"
                                >
                                    <h4>+ Add New Item</h4>
                                </div>
                            </div>
                        </div>
                        <div className="invoice-panel-buttons">
                            <div className="invoice-panel-buttons-left">
                                <div className="invoice-panel-buttons-discard">
                                    <h4>Discard</h4>
                                </div>
                            </div>
                            <div className="invoice-panel-buttons-right">
                                <div className="invoice-panel-buttons-draft">
                                    <h4>Save as Draft</h4>
                                </div>
                                <div
                                    onClick={handleSaveClick}
                                    className="invoice-panel-buttons-save"
                                >
                                    <h4>Save & Send</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default InvoicePanel;
