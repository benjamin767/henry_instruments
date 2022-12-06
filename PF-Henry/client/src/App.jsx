import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/admin" render={() => <AdminDashboard />} />
            </div>
        </BrowserRouter>
    );
}

export default App;