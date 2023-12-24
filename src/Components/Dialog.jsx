import { useEffect } from "react";
import "./css/dialog.css";

const Dialog = ({ setShowDialog, onClose }) => {
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest(".dialog")) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [onClose]);
    return (
        <div className="dialog-backdrop">
            <div className="dialog">
                <h2>Confirm Deletion</h2>
                <p>
                    Are you sure you want to delete invoice #XM9141? This action
                    cannot be undone.
                </p>
                <div className="dialog-btn">
                    <div className="invoice-edit" onClick={onClose}>
                        <h4>Cancel</h4>
                    </div>
                    <div
                        onClick={() => setShowDialog(true)}
                        className="invoice-delete"
                    >
                        <h4>Delete</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialog;
