
import { SavedAlbums } from "./albums/SavedAlbums";
import { NewReleases } from "./albums/newReleases";
import { RecentlyPlayedTracks } from "./player/recentlyPlayedTracks";


export async function Main({token}) {

  
  return (      
    <main className="col-start-2  col-end-4 w-full p-5 flex flex-col gap-4 h-5/6 overflow-auto ">
      {/* <SavedAlbums token={token.access_token}/> */}
      <div className="w-full">
      <NewReleases token={token} />
      <RecentlyPlayedTracks token={token} />
      </div>
      </main>
  )
}