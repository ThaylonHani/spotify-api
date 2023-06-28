import { NowPlaying } from "../player/NowPlaying";

export async function Footer({ token }) {

  
  return (
    <footer className="fixed bottom-0 w-full  bg-[var(--dark-red-1-hex)]  p-4">

     <NowPlaying token={token} />

    </footer>
  )

}

