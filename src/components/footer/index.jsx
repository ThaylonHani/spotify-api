import { NowPlaying } from "../player/NowPlaying";

export async function Footer({ token }) {

  
  return (
    <footer className=" w-full bg-[var(--dark-red-1-hex)]  p-2">

     <NowPlaying token={token} />

    </footer>
  )

}

