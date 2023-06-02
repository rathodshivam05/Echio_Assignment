import { Box } from "@chakra-ui/react";
import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import './App.css';
function App() {
  return (
    <Box className="background" pt={4}>
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
