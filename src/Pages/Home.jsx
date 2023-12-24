import { useState } from "react";
import "./css/home.css";
import addInvoiceIcon from "../assets/images/icon-add-invoice.svg";
import noInvoicesIcon from "../assets/images/illustration-empty.svg";
import SidePanel from "../Components/SidePanel";
import Invoice from "../Components/invoice";
import InvoicePanel from "../Components/InvoicePanel";
import Button from "../Components/Button";

const Home = () => {
    const [showInvoicePanel, setShowInvoicePanel] = useState(false);
    const toggleInvoicePanel = () => {
        setShowInvoicePanel(!showInvoicePanel);
    };
    return (
        <>
            <SidePanel />
            <InvoicePanel
                isOpen={showInvoicePanel}
                onClose={toggleInvoicePanel}
            />
            <div className="invoices-parent">
                <div className="invoices-head">
                    <div className="invoices-title">
                        <h1>Invoices</h1>
                        <p>There are 7 total invoices</p>
                    </div>
                    <Button
                        text="New Invoice"
                        onClick={toggleInvoicePanel}
                        img={addInvoiceIcon}
                    />
                    {/* <div
                        onClick={toggleInvoicePanel}
                        className="new-invoice-button"
                    >
                        <img src={addInvoiceIcon} alt="Add Invoice" />
                        <h4>New Invoice</h4>
                    </div> */}
                </div>
                <div className="invoices-main">
                    <Invoice />
                    <Invoice />
                    <Invoice />
                    <Invoice />
                    <Invoice />
                    <Invoice />
                </div>
                {/* <div className="empty-invoices">
                    <img src={noInvoicesIcon} alt="No Invoices" />
                    <h2>There is nothing here</h2>
                    <span>
                        Create an invoice by clicking the{" "}
                        <span style={{ fontWeight: "700" }}>New Invoice</span>{" "}
                        button and get started
                    </span>
                </div> */}
            </div>
        </>
    );
};

export default Home;
