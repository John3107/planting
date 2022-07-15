import './App.module.scss'
import style from './App.module.scss'
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
    return (
        <div className={style.app}>
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
