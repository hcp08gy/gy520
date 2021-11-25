import { useState, useEffect } from 'react';
import {useSessionStorage} from 'react-use';
import themeMap from "../theme/themeConfig";

/* eslint-disable */

function useThemeType():["dark"|"light", ()=>void] {
    const [lastThemeType, setLastThemeType] = useSessionStorage<"dark"|"light">("lastTheme", "dark");
    const [themeType, setThemeType] = useState<"dark"|"light">(lastThemeType);
    const toggleTheme = () => {
        if(themeType === 'dark') {
            setThemeType('light');
            setLastThemeType('light');
        } else {
            setThemeType('dark');
            setLastThemeType('dark');
        }
    }
    useEffect(() => {
        const pallets = themeMap[themeType];
        window.less.modifyVars({
            ...pallets
          }).then(() => {
              console.log('替换成功')
          }).catch((err) => {
            console.log('替换失败',err);
          });
    },[themeType]);
    return [themeType, toggleTheme];
}

export default useThemeType;