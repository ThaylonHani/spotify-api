
import { Main } from "@/components";
import { Suspense } from "react";

export default async function Home() {

   
    return (
     <div className="">
        <Suspense fallback="loading...">
        <Main />
      </Suspense>
     </div>   
    )  

}
