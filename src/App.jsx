import { Box } from "@chakra-ui/react";
import ContainLayout from "./components/layout/container";
import Navbar from "./components/ui";
import HowItWorks from "./components/ui/HowItWorks";
import Features from "./components/ui/features";
import Hero from "./components/ui/hero";
import About from "./components/ui/About";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <>
      <ContainLayout>
        <Box className="bg-scroll"></Box>
        <Box className="bg-scroll2"></Box>
        <Navbar />
        <Hero />
        <Features />
        <About />
        <HowItWorks />
        <Footer />
      </ContainLayout>
    </>
  );
}

export default App;
