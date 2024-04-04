"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      {/* <ThemeProvider attribute="class" enableSystem> */}
      {children}
      {/* </ThemeProvider> */}
    </NextUIProvider>
  );
}