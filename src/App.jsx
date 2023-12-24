import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DetailedInvoice from "./Pages/DetailedInvoice";
import CompanyDetails from "./Pages/CompanyDetails";
import Login from "./Pages/login";
import Signup from "./Pages/signup";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/invoice/:invoiceNumber"
                element={<DetailedInvoice />}
            />
            <Route path="/profile-details" element={<CompanyDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
}

export default App;
