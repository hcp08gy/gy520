import './App.less';
import useThemeType from './hooks/useThemeType';
import { ColorThemeContext } from './providers/ThemeProvider';

import Header from "./components/Header";
import Footer from './components/Footer';

function App() {
  const [themeType, toggleTheme] = useThemeType();
  return (
    <ColorThemeContext.Provider value={{themeType, toggleTheme}}>
      <div className="app">
        <Header />
        <div className="content">

        </div>
        <Footer />
      </div>
    </ColorThemeContext.Provider>
  )
}

export default App;
