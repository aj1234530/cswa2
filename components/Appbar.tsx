"use client";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
export const Appbar = () => {
  const session = useSession();
  const router = useRouter();
  return (
    <>
      <button onClick={() => signIn()}>Sigin</button>
      <button onClick={() => signOut()}>Signout</button>
      {JSON.stringify(session)}
    </>
  );
};
