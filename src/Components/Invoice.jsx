import "./css/invoice.css";
import iconArrowRight from "../assets/images/icon-arrow-right.svg"

const Invoice = () => {
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
                <div className="invoice-arrow">
                    <img src={iconArrowRight} alt="Right Arrow" />
                </div>
            </div>
        </>
    );
};

export default Invoice;
