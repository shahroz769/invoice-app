import "./css/sidepanel.css"
import sidePanelLogoIcon from "../assets/images/logo-side-panel.svg";
import darkThemeIcon from "../assets/images/icon-moon.svg";
import profileIcon from "../assets/images/image-avatar.svg";

const SidePanel = () => {
    return (
        <div className="side-panel">
            <div className="side-panel-logo">
                <img src={sidePanelLogoIcon} alt="Logo" />
            </div>
            <div className="side-panel-options">
                <div className="side-panel-theme">
                    <img src={darkThemeIcon} alt="Dark Theme" />
                </div>
                <div className="side-panel-profile">
                    <img src={profileIcon} alt="Profile Avatar" />
                </div>
            </div>
        </div>
    );
};

export default SidePanel;
