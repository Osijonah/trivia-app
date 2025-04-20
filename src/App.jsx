import { useState } from "react";
import {Route, Routes} from "react-router-dom";

import Homepage from "./pages/Homepage";
import Quizpage from "./pages/Quizpage";
import Resultpage from "./pages/Resultpage";
import Header from "./components/Header";

const App = () => {
    const [resultData, setResultData] = useState([]);

    return (
        <Header>
            <Routes>
                <Route index element={<Homepage resultData={resultData} setResultData={setResultData}/>}/>
                <Route path="quiz" element={<Quizpage resultData={resultData} setResultData={setResultData}/>}/>
                <Route path="result" element={<Resultpage resultData={resultData} setResultData={setResultData} />} />
            </Routes>
        </Header>
    )
}

export default App;