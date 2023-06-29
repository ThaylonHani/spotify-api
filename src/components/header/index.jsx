
import { HeaderContent } from "./headerContent";

export function Header({token, code}) {
  return ( 
    <header className="flex  flex-col  w-1/3 items-start justify-start p-4 bg-[var(--dark-red-3-hex)] overflow-auto     ">
      
      <HeaderContent token={token} />
    </header>
  )
}