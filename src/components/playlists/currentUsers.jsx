export async function CurrentUserPlaylist({token}) {
  const playlists = await fetch("https://api.spotify.com/v1/me/playlists",{headers:{'Authorization' : `Bearer ${token}`}}).then((res) => res.json());
  return (
    <div className="flex flex-col w-full  justify-center items-center  ">
     
    {
      playlists.items.map((item) => {
        const images = item.images.length > 0 ? item.images[0] : false; 
        return (
          <div className="flex w-full items-center gap-2 hover:bg-gray-400 hover:bg-opacity-5 p-1 rounded-md transition-all duration-150 ease-in">
            <section>
            <img src={images.url} alt="" className="w-14 rounded-md" />
              </section>
            <section>
            <h1>
          {item.name}
            </h1>
            </section>
        </div>
      )} )
    }
  </div>  
  )
}