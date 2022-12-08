import Link from "next/link";
import { Navbar } from "../components";


export default function Home() {
  return (
    <div className="relative overflow-hidden lg:overflow-y-hidden" >
      <Navbar />
      <div className="relative grid grid-row-3 lg:grid-flow-col lg:w-screen overflow-hidden  lg:overflow-y-hidden ">
        <div className="flex bg-cover bg-center w-screen bg-[url('/img/plane.jpg')] h-[300px] lg:h-screen lg:w-[70vh] overflow-hidden lg:overflow-y-hidden lg:flex-col
                        grayscale hover:grayscale-0 hover:scale-110 transition duration-500 ease-in-out">
          <Link href="/flights" className="self-center">
            <span className="flex-col lg:flex-row px-3 py-2 text-center self-center relative ml-[120px] bg-zinc-900 text-white hover:text-zinc-900 hover:bg-gray-200 
                                           rounded-full text-4xl font-sans lg:top-[42vh] lg:left-[-6vh]">Flights</span>
          </Link>
        </div>
        <div className="flex bg-cover bg-center bg-[url('/img/hotel.jpg')] h-[300px] lg:h-screen lg:w-[70vh] overflow-hidden lg:flex-col
                        grayscale hover:grayscale-0 hover:scale-110 transition duration-500 ease-in-out">
          <Link href="/hotels" className="self-center">
            <span className="flex-col lg:flex-row px-3 py-2 self-center relative ml-[120px] bg-zinc-900 text-white hover:text-zinc-900 hover:bg-gray-200 
                                         rounded-full text-4xl font-sans lg:top-[42vh] lg:left-[-6vh]">Hotels</span>
          </Link>
        </div>
        <div className="flex bg-cover bg-center bg-[url('/img/things.jpg')] h-[300px] lg:w-[70vh] lg:h-screen overflow-hidden lg:flex-col
                                      grayscale hover:grayscale-0 hover:scale-110 transition duration-500 ease-in-out">
          <Link href="/things" className="self-center">
            <span className="flex-col lg:flex-row px-3 py-2 self-center relative ml-[70px] bg-zinc-900 text-white hover:text-zinc-900 hover:bg-gray-200 
                                          rounded-full text-4xl font-sans lg:top-[42vh] lg:left-[-1vh]">Things To Do</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
