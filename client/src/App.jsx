import "./App.css";
import Nav from "./components/Nav";
import OrderPage from "./pages/OrderPage";
import SummaryPage from "./pages/SummaryPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <OrderPage />
      <SummaryPage />
    </div>
  );
}

export default App;
