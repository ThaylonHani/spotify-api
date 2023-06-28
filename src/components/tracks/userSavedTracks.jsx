export async function UserSavedTracks({token}) {
  const tracks = await fetch("https://api.spotify.com/v1/me/tracks", {headers:{'Authorization' : `Bearer ${token}`}}).then(res => res.json());
  return (
    <div className="flex w-full justify-center items-center  ">
     
      {
        tracks.items.map((item) => {
          const images = item.track.album.images.length > 0 ? item.track.album.images[0] : false; 
          return (
            <div className="flex w-full items-center gap-2 hover:bg-gray-400 hover:bg-opacity-5 p-1 rounded-md transition-all duration-150 ease-in">
              <section>
              <img src={images.url} alt="" className="w-14 min-w-[56px] rounded-md" />
                </section>
              <section>
              <h1>
            {item.track.name}
              </h1>
              </section>
          </div>
        )} )
      }
    </div>  
  )
}