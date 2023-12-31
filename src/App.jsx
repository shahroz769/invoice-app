import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";
import DetailedInvoice from "./Pages/DetailedInvoice";
import CompanyDetails from "./Pages/CompanyDetails";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import RequireAuth from "./Hooks/RequireAuth";
import Auth from "./Hooks/Auth";

function App() {
    return (
        <>
            <Toaster />
            <Routes>
                <Route
                    path="/"
                    element={
                        <RequireAuth>
                            <Home />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/invoice/:invoiceNumber"
                    element={
                        <RequireAuth>
                            <DetailedInvoice />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/profile-details"
                    element={
                        <RequireAuth>
                            <CompanyDetails />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Auth>
                            <Login />
                        </Auth>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <Auth>
                            <Signup />
                        </Auth>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
