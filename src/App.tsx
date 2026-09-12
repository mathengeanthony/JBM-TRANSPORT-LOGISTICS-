import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CompliancePage } from "./pages/CompliancePage";
import { EthosPage } from "./pages/EthosPage";
import { ArchitectPage } from "./pages/ArchitectPage";
import { FleetPage } from "./pages/FleetPage";
import { VehicleDetailPage } from "./pages/VehicleDetailPage";
import { WarehousePage } from "./pages/WarehousePage";
import { WarehouseDetailPage } from "./pages/WarehouseDetailPage";
import { RateEnginePage } from "./pages/RateEnginePage";
import { LogisticsDashboardPage } from "./pages/LogisticsDashboardPage";
import { TradeAdvisoryPage } from "./pages/TradeAdvisoryPage";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/fleet/:id" element={<VehicleDetailPage />} />
        <Route path="/warehousing" element={<WarehousePage />} />
        <Route path="/warehousing/:id" element={<WarehouseDetailPage />} />
        <Route path="/rates" element={<RateEnginePage />} />
        <Route path="/dashboard" element={<LogisticsDashboardPage />} />
        <Route path="/advisory" element={<TradeAdvisoryPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/ethos" element={<EthosPage />} />
        <Route path="/architect" element={<ArchitectPage />} />
      </Routes>
    </BrowserRouter>
  );
}
