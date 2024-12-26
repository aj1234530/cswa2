// import { useSession } from "next-auth/react"; not allowed for server components
import { Appbar } from "@/components/Appbar";
import { Next_Auth } from "@/lib/auth";
import NextAuth, { getServerSession } from "next-auth";
export default async function Home() {
  const session = await getServerSession(Next_Auth);
  return (
    <>
      server compo
      {JSON.stringify(session)}
    </>
  );
}
