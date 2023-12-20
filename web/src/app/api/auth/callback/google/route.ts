import { api } from "@/lib/axios";
import axios from "axios";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL("/", request.url);
  const code = searchParams.get("code");

  const accessTokenResponse = await axios.post(
    "https://oauth2.googleapis.com/token",
    null,
    {
      params: {
        code,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID ?? "",
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET ?? "",
        redirect_uri: "http://localhost:3000/api/auth/callback/google",
        grant_type: "authorization_code",
      },
    }
  );

  const { access_token } = accessTokenResponse.data;

  const response = await api.post("/auth", { access_token });
}
