import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import OrderPage from "./pages/OrderPage";
import SummaryPage from "./pages/SummaryPage";
import CompletePage from "./pages/CompletePage";

function App() {
  const [step, setStep] = useState(0);
  const page = () => {
    switch (step) {
      case 0:
        return <OrderPage setStep={setStep} />;
      case 1:
        return <SummaryPage setStep={setStep} />;
      case 2:
        return <CompletePage setStep={setStep} />;
    }
  };

  return (
    <div className="App">
      <Nav setStep={setStep} />
      {page()}
    </div>
  );
}

export default App;
