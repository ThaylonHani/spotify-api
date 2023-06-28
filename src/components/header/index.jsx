import { Suspense } from "react";
import { HeaderLinks } from "./headerLinks";
import { HeaderSearch } from "./headerSearch";
import { HeaderContent } from "./headerContent";

export function Header({token}) {
  return (
    <header className="flex flex-col items-start  h-[93%] justify-start p-4 bg-[var(--dark-red-3-hex)] col-start-1 col-end-2 row-start-1    ">
      
      <nav className="flex items-center gap-2 justify-between w-full"> 
        <HeaderLinks/>
        <Suspense fallback="loading..">
        <HeaderSearch/>
        </Suspense>
      </nav>
      <HeaderContent token={token} />
    </header>
  )
}