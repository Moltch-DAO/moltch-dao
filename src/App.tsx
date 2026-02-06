import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Shell } from "@/components/shell";
import HomePage from "@/pages/home";
import NowPage from "@/pages/now";
import FundingPage from "@/pages/funding";
import DocsPage from "@/pages/docs";

export default function App() {
  return (
    <BrowserRouter>
      <Shell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/now" element={<NowPage />} />
          <Route path="/funding" element={<FundingPage />} />
          <Route path="/docs" element={<DocsPage />} />
        </Routes>
      </Shell>
    </BrowserRouter>
  );
}
