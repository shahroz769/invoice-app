import React from "react";
import "./css/Input.css";

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
}) => {
    return (
        <div className="input">
            <div className="label-head">
                <p
                    style={{
                        color: error && touched ? "var(--9)" : "var(--7)",
                    }}
                >
                    {label}
                </p>
                {error && touched && (
                    <p style={{ color: "var(--9)" }}>{error}</p>
                )}
            </div>
            <input
                className={error ? (touched ? "error" : "") : ""}
                style={
                    error
                        ? touched
                            ? { outline: "1px solid var(--9)" }
                            : {}
                        : {}
                }
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                id={id}
                type={type}
                placeholder={placeholder || null}
            />
        </div>
    );
};

export default Input;
