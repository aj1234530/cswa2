"use client";

import { SessionProvider } from "next-auth/react";
export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

//this file is for providers we need
//for ex - one provider for nextauthj sesion
