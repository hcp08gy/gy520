import { useContext } from "react";
import { Button } from "antd";
import { ColorThemeContext } from '../providers/ThemeProvider';
import dark from "../assets/images/dark.png";
import light from "../assets/images/light.png";

const Header = () => {
    const { themeType, toggleTheme } = useContext(ColorThemeContext);
    const toggleIconUrl = themeType === "dark" ? light: dark;
    return (
        <div className="header">
            <Button type="text" size="large" onClick={toggleTheme}>
                <img src={toggleIconUrl} width={26} height={26} alt="protocol icon" />
            </Button>
        </div>
    )
}

export default Header;