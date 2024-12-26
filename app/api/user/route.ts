import { Next_Auth } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(Next_Auth);
  return NextResponse.json({
    session,
  });
}
