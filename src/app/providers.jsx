"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children, themeProps }) {
  return (
    <NextUIProvider>
      {/* <NextThemesProvider {...themeProps}> */}
      {children}
      {/* </NextThemesProvider> */}
    </NextUIProvider>
  );
}
