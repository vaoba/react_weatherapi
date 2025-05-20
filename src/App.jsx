import './App.css'
import {Route, Routes} from "react-router-dom";
import Weather from "./components/Weather.jsx";
import Search from "./components/Search.jsx";

const App = () => {

    return (
        <Routes>
            <Route path="/" component={Search}/>
            <Route path="/weather/:city" component={Weather}/>
        </Routes>
    );
}

export default App;