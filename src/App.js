import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Views/Home/Home";
import Contact from "./Component/Views/Contact/Contact";
import HomePre from "./Component/Views/HomePre/HomePre";
import BlogPost from "./Component/Views/BlogPost/BlogPost";
import Subscribe from "./Component/Views/SubscribePage/SubscribePage";
import Tips from "./Component/Views/Tips/Tips";
import ResourcesPage from "./Component/Views/Resources/ResourcesPage";
import GuidesPage from "./Component/Views/Guides/GuidesPage";
import BlogPre from "./Component/Views/BLogPre/BlogPre";
import LoginPage from "./Component/Views/LoginPage/LoginPage";
import SignUpPage from "./Component/Views/SignUpPage/SignUpPage";
import StartHerePage from "./Component/Views/StartHere/StartHerePage";
import StyleGuides from "./Component/Views/StyleGuides/StyleGuides";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-premium" element={<HomePre />} />
        <Route path="/blog/:_id" element={<BlogPost />} />
        <Route path="/blog-premium" element={<BlogPre />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/log-in" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/start-here" element={<StartHerePage />} />
        <Route path="/style-guides" element={<StyleGuides />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
