import { Next_Auth } from "@/lib/auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth(Next_Auth);

export { handler as GET, handler as POST };
