// src/App.js
import React from "react";
import { ChakraProvider, CSSReset, extendTheme, Box } from "@chakra-ui/react";
import Board from "./board";

const theme = extendTheme({
  fonts: {
    body: "Arial, sans-serif",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box p="4">
        <Board />
      </Box>
    </ChakraProvider>
  );
}

export default App;
