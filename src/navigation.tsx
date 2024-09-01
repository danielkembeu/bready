import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import LibraryPage from "./pages/dashboard/library";
import FinalAuthPage from "./pages/auth/final";
import DashboardLayout from "./pages/dashboard/layout";
import HomePage from "./pages/dashboard/home";


export default function RootNav() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/app/" element={<DashboardLayout />}>
                <Route index path='' element={<HomePage />} />
                <Route path="bibliotheque" element={<LibraryPage />} />
            </Route>
            <Route path="/auth/">
                <Route path="connexion" element={<LoginPage />} />
                <Route index path="inscription" element={<RegisterPage />} />
                <Route path="finalisation" element={<FinalAuthPage />} />
            </Route>
            <Route />
            <Route />
            <Route />
            <Route />
        </Routes>
    );
}