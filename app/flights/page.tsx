'use client';


import { useLoadScript } from "@react-google-maps/api";
import Maps from "../../components/Maps";

export default function Home() {
  const { isLoaded } = useLoadScript({
  googleMapsApiKey: "AIzaSyCpioaeE2EaNbBnTE__kd5uHisMds6iWoY",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Maps />;
}


