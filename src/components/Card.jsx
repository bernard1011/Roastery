import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";

const grinder = [
  { id: 1, name: "Гейзерна" },
  { id: 2, name: "Еспресо" },
  { id: 3, name: "Чашка" },
  { id: 4, name: "Турка" },
];

const IncDecBtn = () => {
  const [num, setNum] = useState(0);
  const decNum = () => setNum((prev) => prev && prev - 1);
  const incNum = () => num < 9 && setNum(prev=>prev+1);

  return (
    <>
      <div className="text-xl w-min justify-center items-center pb-1 px-2 text-gray-100 flex gap-5  backdrop-filter border border-gray-500 rounded-md shadow-xl mt-1">
        <button onClick={decNum}>-</button>
        {num}
        <button onClick={incNum}>+</button>
      </div>
    </>
  );
};

const DropDown = () => {
  const [selectedGrind, setSelectedGrind] = useState(grinder[0]);

  return (
    <Listbox value={selectedGrind} onChange={setSelectedGrind}>
      <ListboxButton className="bg-gray-700/20 backdrop-blur-lg backdrop-filter border border-gray-500 text-gray-100 text-lg p-2 w-28 rounded-md shadow-xl">
        {selectedGrind.name}
      </ListboxButton>
      <ListboxOptions anchor="bottom">
        {grinder.map((grind) => (
          <ListboxOption
            key={grind.id}
            value={grind}
            className="bg-gray-700/20 backdrop-blur-lg backdrop-filter border border-gray-500 my-1 text-gray-100 p-2 w-28  text-center rounded-md shadow-xl"
          >
            {grind.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

const Card = () => {
  return (
    <>
      <div className="bg-gray-700/20 backdrop-blur-lg backdrop-filter border border-gray-500 flex flex-col items-center m-3 p-3 rounded-xl shadow-xl">
        <h3 className="text-xl text-gray-50 pb-3">Columbian One</h3>
        <img src="./columbian.jpg" className="w-96 rounded-2xl pb-3" />
        <section className="flex flex-col justify-center gap-3 text-center">
          <div>
            <p className="text-lg text-gray-50">Гіркота</p>
            <div className="w-80 h-1 rounded bg-gray-700">
              <div className="w-24 h-1 rounded bg-gray-200"></div>
            </div>
          </div>
          <div>
            <p className="text-lg text-gray-50">Кислотність</p>
            <div className="w-80 h-1 rounded bg-gray-700">
              <div className="w-30 h-1 rounded bg-gray-200"></div>
            </div>
          </div>
          <div>
            <p className="text-lg text-gray-50">Солодкість</p>
            <div className="w-80 h-1 rounded bg-gray-700">
              <div className="w-55 h-1 rounded bg-gray-200"></div>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center text-lg text-gray-100 flex gap-5 justify-between mt-3 items-center">
            <div>
              <p>Вага</p>
              <div className="flex gap-5">
                <button className="bg-gray-700/20 backdrop-blur-lg backdrop-filter border border-gray-500 text-gray-100 w-16 rounded-md shadow-xl p-2">
                  250г
                </button>
                <button>1кг</button>
              </div>
            </div>
            <div className="text-lg">
              <p>Помел</p>
              <DropDown />
            </div>
          </div>
          <div className="text-gray-100 text-center mt-5">
            <h3>Ціна: 350 грн</h3>
          </div>
          <div className="flex justify-between">
            <IncDecBtn />
            <button className=" px-5 text-xl backdrop-filter border border-gray-500 hover:bg-gray-700/20 text-gray-100 rounded-md shadow-xl">
              Купити
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
