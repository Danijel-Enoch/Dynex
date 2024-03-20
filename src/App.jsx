import { Box } from "@chakra-ui/react";
import ContainLayout from "./components/layout/container";
import Navbar from "./components/ui";
import HowItWorks from "./components/ui/HowItWorks";
import Features from "./components/ui/features";
import Hero from "./components/ui/hero";
import About from "./components/ui/About";

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
      </ContainLayout>
    </>
  );
}

export default App;
