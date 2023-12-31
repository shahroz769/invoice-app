import "./css/detailedinvoice.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SidePanel from "../Components/SidePanel";
import Dialog from "../Components/Dialog";
import Button from "../Components/Button";
import leftArrowIcon from "../assets/images/icon-arrow-left.svg";

const DetailedInvoice = () => {
    const navigate = useNavigate();
    const [showDialog, setShowDialog] = useState(false);
    const handleDialogClose = () => {
        setShowDialog(false);
    };
    return (
        <>
            <AnimatePresence>
                {showDialog && (
                    <Dialog
                        setShowDialog={setShowDialog}
                        onClose={handleDialogClose}
                    />
                )}
            </AnimatePresence>
            <SidePanel />
            <div className="invoice-details-parent">
                <Button
                    text="Go back"
                    color="var(--8)"
                    bgColor="transparent"
                    img={leftArrowIcon}
                    onClick={() => navigate("/")}
                />
                {/* <div className="back-to-home">
                    <img src={leftArrowIcon} alt="Left Arrow" />
                    <h4>Go back</h4>
                </div> */}
                <div className="invoice-details-crud">
                    <div className="invoice-details-status">
                        <span>Status</span>
                        <div className="invoice-status">
                            <div className="round"></div>
                            <h4>Paid</h4>
                        </div>
                    </div>
                    <div className="invoice-details-edit">
                        <Button
                            text="Edit"
                            bgColor="#f9fafe"
                            color="var(--7)"
                        />
                        {/* <div className="invoice-edit">
                            <h4>Edit</h4>
                        </div> */}
                        <Button
                            text="Delete"
                            bgColor="var(--9)"
                            color="var(--0)"
                            onClick={() => setShowDialog(true)}
                        />
                        {/* <div
                            onClick={() => setShowDialog(true)}
                            className="invoice-delete"
                        >
                            <h4>Delete</h4>
                        </div> */}
                        <Button
                            text="Mark as Paid"
                            bgColor="var(--1)"
                            color="var(--0)"
                        />
                        {/* <div className="invoice-update">
                            <h4>Mark as Paid</h4>
                        </div> */}
                    </div>
                </div>
                <div className="invoice-details">
                    <div className="invoice-details-header">
                        <div className="invoice-details-meta">
                            <h3>
                                <span>#</span>XM9141
                            </h3>
                            <span>Graphic Design</span>
                        </div>
                        <div className="invoice-details-vendor-info">
                            <p>19 Union Terrace</p>
                            <p>London</p>
                            <p>E1 3EZ</p>
                            <p>United Kingdom</p>
                        </div>
                    </div>
                    <div className="invoice-details-body">
                        <div className="invoice-details-dates">
                            <div className="invoice-details-date">
                                <span>Invoice Date</span>
                                <h3>21 Aug 2021</h3>
                            </div>
                            <div className="invoice-details-due-date">
                                <span>Payment Due</span>
                                <h3>20 Sep 2021</h3>
                            </div>
                        </div>
                        <div className="invoice-details-client-info">
                            <div className="invoice-details-client-name">
                                <span>Bill To</span>
                                <h3>Alex Grim</h3>
                            </div>
                            <div className="invoice-details-client-address">
                                <p>84 Church Way</p>
                                <p>Bradford</p>
                                <p>BD1 9PB</p>
                                <p>United Kingdom</p>
                            </div>
                        </div>
                        <div className="invoice-details-client-email">
                            <span>Sent to</span>
                            <h3>alexgrim@mail.com</h3>
                        </div>
                    </div>
                    <div className="invoice-details-footer">
                        <div className="invoice-details-footer-pricing">
                            <div className="invoice-details-footer-pricing-header">
                                <p></p>
                                <p>QTY.</p>
                                <p>Price</p>
                                <p>Total</p>
                            </div>
                            <div className="invoice-details-footer-pricing-item">
                                <h4>Banner Design</h4>
                                <h4 className="qty">1</h4>
                                <h4 className="price">£ 156.00</h4>
                                <h4>£ 156.00</h4>
                            </div>
                            <div className="invoice-details-footer-pricing-item">
                                <h4>Email Design</h4>
                                <h4 className="qty">2</h4>
                                <h4 className="price">£ 200.00</h4>
                                <h4>£ 400.00</h4>
                            </div>
                        </div>
                        <div className="invoice-details-footer-due">
                            <p>Amount Due</p>
                            <h2>£ 556.00</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailedInvoice;
