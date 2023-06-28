"use client"

import { getAccessToken, redirectToAuthCodeFlow } from "@/app/config-spotify";
import { useSearchParams } from "next/navigation";
import { Main } from "@/components";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default async function Home() {

    const code =  useSearchParams().get('code');

    if (!code) {
      await redirectToAuthCodeFlow();
    }
    const token = await getAccessToken();
    return (
     <div className="grid grid-cols-3 grid-rows-1 h-screen">
        <Header token={token.access_token} />
        <Main token={token.access_token} />
        <Footer token={token.access_token} />
     </div>
    )  

}
