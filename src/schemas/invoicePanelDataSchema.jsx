import * as yup from "yup";

const generateItemValidationSchema = (index) => ({
    [`itemName${index}`]: yup.string().max(500).required("itemError"),
    [`qty${index}`]: yup.number().required("itemError"),
    [`price${index}`]: yup.number().required("itemError"),
});

export const invoicePanelDataSchema = (itemsListCount) => {
    return yup.object().shape({
        clientName: yup.string().max(500).required("Required"),
        clientEmail: yup.string().max(500).required("Required"),
        clientAddress: yup.string().max(500).required("Required"),
        clientCity: yup.string().max(500).required("Required"),
        clientPostCode: yup.string().max(500).required("Required"),
        clientCountry: yup.string().max(500).required("Required"),
        invoiceDate: yup.date().required("Required"),
        paymentTerms: yup.number().required("Required"),
        projectDescription: yup.string().max(500).required("Required"),
        ...Array.from({ length: itemsListCount }, (_, index) =>
            generateItemValidationSchema(index + 1)
        ).reduce((acc, curr) => ({ ...acc, ...curr }), {}),
    });
};
