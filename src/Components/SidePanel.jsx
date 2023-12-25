import "./css/sidepanel.css";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import sidePanelLogoIcon from "../assets/images/logo-side-panel.svg";
import darkThemeIcon from "../assets/images/icon-moon.svg";
import profileIcon from "../assets/images/image-avatar.svg";

const SidePanel = () => {
    const navigate = useNavigate();
    return (
        <div className="side-panel">
            <div className="side-panel-logo">
                <img src={sidePanelLogoIcon} alt="Logo" />
            </div>
            <div className="side-panel-options">
                <IconButton className="side-panel-theme">
                    <img src={darkThemeIcon} alt="Dark Theme" />
                </IconButton>
                {/* <div className="side-panel-theme">
                    <img src={darkThemeIcon} alt="Dark Theme" />
                </div> */}
                <div className="side-panel-profile">
                    <IconButton
                        onClick={() => navigate("/profile-details")}
                        className="side-panel-profile-icon"
                    >
                        <img src={profileIcon} alt="Profile Avatar" />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default SidePanel;
