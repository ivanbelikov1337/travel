import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Destinations from "./pages/Destinations.tsx";
import About from "./pages/About.tsx";
import Partner from "./pages/Partner.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";


const App = () => {
    return (
        <>
            <div className=" grid grid-rows-[auto_1fr_auto] ml-[100px] mr-[100px]">
                <Header/>
                <main>
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path="/destinations" element={<Destinations/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/partner" element={<Partner/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>

                    </Routes>
                </main>
            </div>

            <Footer/>
        </>

    );
};

export default App;