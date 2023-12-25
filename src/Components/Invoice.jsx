import "./css/invoice.css";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import iconArrowRight from "../assets/images/icon-arrow-right.svg";

const Invoice = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="invoice">
                <div className="invoice-content">
                    <h4>
                        <span>#</span>RT3080
                    </h4>
                    <span>Due 19 Aug 2021</span>
                    <span>Jensen Huang</span>
                    <h3>£ 1,800.90</h3>
                    <div className="invoice-status">
                        <div className="round"></div>
                        <h4>Paid</h4>
                    </div>
                </div>
                <IconButton
                    onClick={() => navigate("/invoice/" + "RT3080")}
                    className="invoice-arrow"
                >
                    <img src={iconArrowRight} alt="Right Arrow" />
                </IconButton>
            </div>
        </>
    );
};

export default Invoice;
