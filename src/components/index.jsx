'use client'

import { getAccessToken, redirectToAuthCodeFlow } from "@/app/config-spotify";
import { useSearchParams } from "next/navigation";
import { Header } from "./header";
import { Footer } from "./footer";
import { RecentlyPlayedTracks } from "./player/recentlyPlayedTracks";
import { NewReleases } from "./albums/newReleases";
import { FeaturedPlaylists } from "./playlists/featuredPlaylists";



export async function Main() {

  const code =  useSearchParams().get('code');
  
  
  if (!code) {
    await redirectToAuthCodeFlow();
  }
  const token = await getAccessToken();

  
  if (token.access_token) {
    
  return (      
    <div className="flex h-screen flex-col ">
     
      <div className="flex overflow-auto  flex-1">
      <Header token={token.access_token} code={code}/>

      <main className="flex-1 overflow-auto p-3">
              <RecentlyPlayedTracks token={token.access_token} />
              <NewReleases token={token.access_token} />
              <FeaturedPlaylists token={token.access_token} />          
      </main>

      </div>
      <Footer token={token.access_token}/>

      </div>
  )
  }
}