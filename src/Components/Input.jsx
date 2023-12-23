import { useState } from "react";
import "./css/input.css";
import { DatePicker } from "@mui/x-date-pickers";
import { Select, MenuItem } from "@mui/material";

const Input = ({
    label,
    value,
    error,
    onChange,
    onBlur,
    touched,
    id,
    type,
    placeholder,
    flex,
    setFieldValue,
}) => {
    const [selectValue, setSelectValue] = useState(null);
    const inputError = error && touched;
    return (
        <div
            style={flex ? { flex: flex } : {}}
            className={label === "Invoice Date" ? "input-date" : "input"}
        >
            {label && (
                <div className="label-head">
                    <p
                        style={{
                            color: "var(--7)",
                        }}
                        // style={{
                        //     color: error && touched ? "var(--9)" : "var(--7)",
                        // }}
                    >
                        {label}
                    </p>
                    {error && touched && (
                        <p style={{ color: "var(--9)" }}>{error}</p>
                    )}
                </div>
            )}
            {label === "Invoice Date" ? (
                <DatePicker
                    value={value}
                    onChange={(newValue) => {
                        setFieldValue(id, newValue ? newValue : "");
                    }}
                    textField={(params) => <TextField {...params} />}
                />
            ) : label === "Payment Terms" ? (
                <Select
                    value={value}
                    onChange={(e) => {
                        setSelectValue(e.target.value);
                        setFieldValue(id, e.target.value);
                    }}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                >
                    <MenuItem value={1}>Net 1 Day</MenuItem>
                    <MenuItem value={7}>Net 7 Days</MenuItem>
                    <MenuItem value={14}>Net 14 Days</MenuItem>
                    <MenuItem value={30}>Net 30 Days</MenuItem>
                </Select>
            ) : (
                <input
                    className={inputError ? "error" : ""}
                    // style={inputError ? { outline: "1px solid var(--9)" } : {}}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    id={id}
                    type={type}
                    placeholder={placeholder || ""}
                />
            )}
        </div>
    );
};

export default Input;
