import Image from 'next/image';

import logo from '../public/img/logo.png';


const Navbar = () => {
  return (
    <div className="flex bg-zinc-900 overflow-hidden static ">
        <Image src={logo} alt="logo" className="  relative h-[30px] w-auto flex-col "/> 
          <span className=" py-1 px-1 ml-2 text-red-800 text-bold font-semibold ">
            Holiday Planner
          </span>
    </div>
  )
}
export default Navbar