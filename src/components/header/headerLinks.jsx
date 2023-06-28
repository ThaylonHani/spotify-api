import { BiCompass, BiLibrary } from "react-icons/bi";

export function HeaderLinks() {
  return (
    <ul className="flex gap-2">
          <li className="hover:opacity-50 cursor-pointer duration-150 transition-all ease-linear">
            <BiLibrary className="text-xl"/>
          </li>
          <li className="hover:opacity-50 cursor-pointer duration-150 transition-all ease-linear">
            <BiCompass className="text-xl" /> 
          </li>
        </ul>
  )
}