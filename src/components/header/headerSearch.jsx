import { BiSearch, BiRightArrowAlt } from "react-icons/bi";
export function HeaderSearch() {

  return (
    <div className= "flex bg-transparent items-center ">
      <BiSearch className="bg-transparent  rounded-l-sm  text-xl hover:opacity-50 cursor-pointer duration-150 transition-all ease-linear " />
      {/* <input type="text" className="w-full focus:outline-none text-black  text-base "   />
      <button className="h-6">
        <BiRightArrowAlt className="hover:bg-gray-800 transition-all duration-100 ease-linear bg-[var(--dark-red-2-hex)] rounded-r-sm text-xl w-full h-full"/>
        </button> */}
    </div>
  );
}