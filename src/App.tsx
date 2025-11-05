import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      mirror: true,
      offset: 120
    });
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
