export async function NewReleases({ token }) {
  const newReleases = await fetch("https://api.spotify.com/v1/browse/new-releases", { headers: { 'Authorization': `Bearer ${token}` } }).then(res => res.json());

  
  
  return (
    <>
      <h1 className=" font-semibold text-xl top-0">
        New releases
      </h1>
    <div className="overflow-auto relative">
    
      
        <div className="flex w-fit  p-4 justify-start gap-8 overflow-auto  rounded-lg ">
    {
      newReleases.albums.items.map((item) => {
        const images = item.images.length > 0 ? item.images[0] : false; 
        const artist = item.artists.map((artist,idx) => item.artists.length > 1 ? idx + 1 == item.artists.length ? artist.name.concat("...") : artist.name.concat(",") : artist.name )
        return (
          <div className="flex w-36 h-56 flex-col p-2 gap-2 items-center justify-center  self-start rounded-md bg-gray-600 bg-opacity-25  hover:bg-gray-400 hover:bg-opacity-25  transition-all duration-150 ease-in ">
            <section>
            <img src={images.url} alt="" className="w-40 rounded-md " />
              </section>
            <section className="w-full">
            <h1 className="text-sm w-fit  font-semibold">
          {item.name}
            </h1>
            <p className="text-xs w-full text-ellipsis">
            {artist}
          </p>
            </section>
        </div>
      )} )
    }
      </div>  
      </div>
    </>
  )
}