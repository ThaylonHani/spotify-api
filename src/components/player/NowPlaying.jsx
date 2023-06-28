
export async function NowPlaying({token}) {
  const player = await fetch("https://api.spotify.com/v1/me/player/currently-playing", { headers: { 'Authorization': `Bearer ${token} ` }, cache:"reload" }).then((res) => res.json());
  const artists = player.item.artists.map((artist,idx) => player.item.artists.length == idx + 1 ? artist.name.concat(".") : artist.name.concat(",") )
  const images = player.item.album.images.map((image) => player.item.album.images.length > 0 ? player.item.album.images[0].url : false);

  return (
    <div className="flex items-center justify-center rounded-sm  ">
      <section>

      </section>
      <img src={images[0]} alt="" className="w-16 rounded-md " />
      <section>
        <h1 className="text-xl font-bold">
        {player.item.album.name}
      </h1>
      <p className="text-sm font-bold">
      {/* {player.item.album.artists} */}
      {artists}
      </p>
      </section>
    </div>
  )
}