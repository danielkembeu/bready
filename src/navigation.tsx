import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";
import LibraryPage from "./pages/library";
import FinalAuthPage from "./pages/auth/final";
import HomePage from "./pages/dashboard";


export default function RootNav() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/app/" element={<HomePage />}>
                {/* <Route path='accueil' element={<Home />} /> */}
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