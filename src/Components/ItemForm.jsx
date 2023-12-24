import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// Yup validation schema
const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    items: Yup.array().of(
        Yup.object().shape({
            itemName: Yup.string().required("Item name is required"),
            qty: Yup.number()
                .required("Quantity is required")
                .positive("Quantity must be positive")
                .integer("Quantity must be an integer"),
            price: Yup.number()
                .required("Price is required")
                .positive("Price must be positive"),
        })
    ),
});

function ItemForm() {
    const {
        values,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        setFieldValue,
        setFieldTouched,
    } = useFormik({
        initialValues: {
            fullName: "",
            items: [{ itemName: "", qty: "", price: "" }],
        },
        validationSchema,
        onSubmit: (values) => {
            console.log("Form values:", values);
        },
    });

    const handleAddItem = () => {
        setFieldValue("items", [
            ...values.items,
            { itemName: "", qty: "", price: "" },
        ]);
    };

    const handleRemoveItem = (index) => {
        const items = [...values.items];
        items.splice(index, 1);
        setFieldValue("items", items);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fullName">Full Name</label>
                <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullName}
                />
                {touched.fullName && errors.fullName && (
                    <div>{errors.fullName}</div>
                )}
            </div>

            {values.items.map((item, index) => (
                <div key={index}>
                    <label htmlFor={`items.${index}.itemName`}>Item Name</label>
                    <input
                        name={`items[${index}].itemName`}
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={item.itemName}
                    />
                    {touched.items &&
                        touched.items[index] &&
                        touched.items[index].itemName &&
                        errors.items &&
                        errors.items[index] &&
                        errors.items[index].itemName && (
                            <div>{errors.items[index].itemName}</div>
                        )}

                    <label htmlFor={`items.${index}.qty`}>Quantity</label>
                    <input
                        name={`items[${index}].qty`}
                        type="number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={item.qty}
                    />
                    {touched.items &&
                        touched.items[index] &&
                        touched.items[index].qty &&
                        errors.items &&
                        errors.items[index] &&
                        errors.items[index].qty && (
                            <div>{errors.items[index].qty}</div>
                        )}

                    <label htmlFor={`items.${index}.price`}>Price</label>
                    <input
                        name={`items[${index}].price`}
                        type="number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={item.price}
                    />
                    {touched.items &&
                        touched.items[index] &&
                        touched.items[index].price &&
                        errors.items &&
                        errors.items[index] &&
                        errors.items[index].price && (
                            <div>{errors.items[index].price}</div>
                        )}

                    <button
                        type="button"
                        onClick={() => handleRemoveItem(index)}
                    >
                        Remove
                    </button>
                </div>
            ))}

            <button type="button" onClick={handleAddItem}>
                Add Item
            </button>

            <button type="submit">Submit</button>
        </form>
    );
}

export default ItemForm;
