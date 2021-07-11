import React from 'react';
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      html: {
        minWidth: "360px",
        scrollBehaviour: "smooth"
      },
      body: {
        background: "gray.100"
      },
      "#__next": {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }
    }
  },
  fonts: {
    body: 'Inter, -apple-system,BlinkMacSystemFont, "Segoe UI"'
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  }
});

export default theme;