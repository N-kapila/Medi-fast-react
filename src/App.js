import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Appoinments from "./pages/Appoinments";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Appoinments />
      <Footer />
    </div>
  );
}

export default App;
