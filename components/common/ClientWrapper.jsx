"use client";

import { ShareDataProvider } from "@/context/ShareDataContext";

export default function ClientWrapper({ children }) {
  return <ShareDataProvider>{children}</ShareDataProvider>;
}
