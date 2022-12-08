'use client';

import usePlacesAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
import { Fragment, useState } from "react";
import { Listbox, Menu, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon, ArrowsRightLeftIcon, ArrowLongRightIcon, BuildingOffice2Icon } from '@heroicons/react/20/solid';
import { icon } from "leaflet";

  type PlacesProps = {
    setFlyingFrom: (position: google.maps.LatLngLiteral) => void;
  };

  const options = [
    { id: 1, name: "Round trip", },
    { id: 2, name: "One-way", },
    { id: 3, name: "Multi-city", },
  ]
  const cons = [
    { id: 1, icon: ArrowsRightLeftIcon, },
    { id: 2, icon: ArrowLongRightIcon, },
    { id: 3, icon: BuildingOffice2Icon, },
  ]

  
  export default function Places({ setFlyingFrom }: PlacesProps) {
    const {
      ready,
      value,
      setValue,
      suggestions: { status, data },
      clearSuggestions,
    } = usePlacesAutocomplete();
  
    const handleSelect = async (val: string) => {
      setValue(val, false);
      clearSuggestions();
  
      const results = await getGeocode({ address: val });
      const { lat, lng } = await getLatLng(results[0]);
      setFlyingFrom({ lat, lng });
    };

    const [selectedOption, setSelectedOption] = useState(options[0]);
  
    return (
      <div className="flex flex-col w-screen relative mt-[5px]">
        <Listbox as="div"className="flex flex-col relative inline-block mr-auto ml-[5px]" value={selectedOption} onChange={setSelectedOption}>
        <Listbox.Button>{selectedOption.name}</Listbox.Button>
          <Listbox.Options className="flex flex-col">
            {options.map((option) => (
              <Listbox.Option key={option.id} value={option}>
                {option.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
        {/* <------- Menu ----------> */}
        <Menu as="div" className="relative flex-col w-full inline-block">
          <Menu.Button>1</Menu.Button>
        </Menu>
        <input
            className="relative border border-black rounded-full self-center mb-[5px] py-2 px-3  "
            type="input"
            placeholder="Fly from.."/>
        <input 
            className="relative border border-black rounded-full self-center mb-[5px] py-2 px-3"
            type="input"
            placeholder="Your destination.."/>
      </div>
    );
  }