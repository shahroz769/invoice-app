import "./css/invoicepanel.css";
import Input from "../Components/Input";
import DeleteIcon from "../assets/images/DeleteIcon.jsx";
import { useFormik } from "formik";
import { invoicePanelDataSchema } from "../schemas/invoicePanelDataSchema.jsx";
import dayjs from "dayjs";
import Button from "./Button.jsx";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InvoicePanel = ({ isOpen, onClose }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseOver = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseOut = () => {
        setHoveredIndex(null);
    };

    const {
        values,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        setFieldValue,
        // setFieldTouched,
    } = useFormik({
        initialValues: {
            clientName: "",
            clientEmail: "",
            clientAddress: "",
            clientCity: "",
            clientPostCode: "",
            clientCountry: "",
            invoiceDate: dayjs().format(),
            paymentTerms: 1,
            projectDescription: "",
            items: [{ itemName: "", qty: "", price: "" }],
        },
        validationSchema: invoicePanelDataSchema,
        onSubmit: (values, actions) => {
            console.log("Form values:", values);
            actions.resetForm();
        },
    });

    const handleSaveClick = () => {
        console.log(errors);
        handleSubmit();
    };

    const handleAddItem = () => {
        setFieldValue("items", [
            ...values.items,
            { itemName: "", qty: "", price: "" },
        ]);
    };

    const handleRemoveItem = (index) => {
        const items = [...values.items];
        if (items.length === 1) return;
        items.splice(index, 1);
        setFieldValue("items", items);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <form onSubmit={handleSubmit}>
                    <div
                        onClick={onClose}
                        className="invoice-panel-background"
                    ></div>
                    <motion.div
                        key="invoice-panel"
                        initial={{ x: "-100%", opacity: 0, width: "400px" }}
                        animate={{
                            x: 0,
                            transition: {
                                type: "spring",
                                stiffness: 250,
                                damping: 40,
                            },
                            opacity: 1,
                            width: "calc(50% + 104px)",
                        }}
                        exit={{
                            opacity: 0,
                            x: "-100%",
                            transition: {
                                type: "spring",
                                stiffness: 250,
                                damping: 50,
                            },
                            width: 0,
                        }}
                        className="invoice-panel-parent"
                    >
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
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    Items List
                                </h4>
                                <div className="invoice-panel-items-names-body">
                                    {values.items.map((item, index) => (
                                        <div
                                            className="invoice-panel-items-names-inputs-parent"
                                            key={index}
                                        >
                                            <div className="invoice-panel-items-names-inputs">
                                                <Input
                                                    flex="2"
                                                    value={item.itemName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={
                                                        errors.items?.[index]
                                                            ?.itemName
                                                    }
                                                    touched={
                                                        touched.items?.[index]
                                                            ?.itemName
                                                    }
                                                    id={`items[${index}].itemName`}
                                                    type="text"
                                                    label="Item Name"
                                                />
                                                <Input
                                                    flex="1"
                                                    value={item.qty}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={
                                                        errors.items?.[index]
                                                            ?.qty
                                                    }
                                                    touched={
                                                        touched.items?.[index]
                                                            ?.qty
                                                    }
                                                    id={`items[${index}].qty`}
                                                    type="text"
                                                    label="Qty."
                                                />
                                                <Input
                                                    flex="1"
                                                    value={item.price}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={
                                                        errors.items?.[index]
                                                            ?.price
                                                    }
                                                    touched={
                                                        touched.items?.[index]
                                                            ?.price
                                                    }
                                                    id={`items[${index}].price`}
                                                    type="text"
                                                    label="Price"
                                                />

                                                <h4
                                                    style={{
                                                        color: "var(--6)",
                                                        paddingTop: "22px",
                                                    }}
                                                >
                                                    400.00
                                                </h4>
                                            </div>
                                            <IconButton
                                                onMouseOver={() =>
                                                    handleMouseOver(index)
                                                }
                                                onMouseOut={handleMouseOut}
                                                className="invoice-panel-items-remove"
                                                sx={{
                                                    marginTop: "22px",
                                                }}
                                                onClick={() =>
                                                    handleRemoveItem(index)
                                                }
                                            >
                                                <DeleteIcon
                                                    fill={
                                                        index === hoveredIndex
                                                            ? "var(--9)"
                                                            : "#888EB0"
                                                    }
                                                />
                                            </IconButton>
                                            {/* <div
                                                
                                                
                                                className="invoice-panel-items-remove"
                                            >
                                                <img
                                                    src={deleteIcon}
                                                    alt="Delete"
                                                />
                                            </div> */}
                                        </div>
                                    ))}
                                </div>
                                <Button
                                    text="+ Add New Item"
                                    bgColor="#f9fafe"
                                    color="var(--7)"
                                    onClick={handleAddItem}
                                />
                                {/* <div
                                    onClick={handleAddItem}
                                    className="invoice-panel-add-new-item"
                                >
                                    <h4>+ Add New Item</h4>
                                </div> */}
                            </div>
                        </div>
                        <div className="invoice-panel-buttons">
                            <div className="invoice-panel-buttons-left">
                                <Button
                                    text="Discard"
                                    bgColor="#f9fafe"
                                    color="var(--7)"
                                />
                                {/* <div className="invoice-panel-buttons-discard">
                                    <h4>Discard</h4>
                                </div> */}
                            </div>
                            <div className="invoice-panel-buttons-right">
                                <Button
                                    text="Save as Draft"
                                    bgColor="#373b53"
                                    color="var(--5)"
                                />
                                {/* <div className="invoice-panel-buttons-draft">
                                    <h4>Save as Draft</h4>
                                </div> */}
                                <Button
                                    text="Save & Send"
                                    bgColor="var(--1)"
                                    color="var(--0)"
                                    onClick={handleSaveClick}
                                />

                                {/* <div
                                    onClick={handleSaveClick}
                                    className="invoice-panel-buttons-save"
                                >
                                    <h4>Save & Send</h4>
                                </div> */}
                            </div>
                        </div>
                    </motion.div>
                </form>
            )}
        </AnimatePresence>
    );
};

export default InvoicePanel;
