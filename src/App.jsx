import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DetailedInvoice from "./Pages/DetailedInvoice";
import CompanyDetails from "./Pages/CompanyDetails";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/invoice/:invoiceNumber"
                element={<DetailedInvoice />}
            />
            <Route path="/profile-details" element={<CompanyDetails />} />
            <Route path="/login" element={<CompanyDetails />} />
            <Route path="/signup" element={<CompanyDetails />} />
        </Routes>
    );
}

export default App;
