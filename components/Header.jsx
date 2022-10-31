import Image from 'next/image';
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
} from '@heroicons/react/24/solid';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          height={100}
          width={100}
          object-contain="true"
          alt="logo-image"
        />
      </div>

      {/* Middle - Search */}
      <div className="flex justify-between items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-grow pl-5 bg-transparent outline-none text-smp placeholder-gray-400 text-gray-600"
        />
        <MagnifyingGlassIcon className="hidden md:block h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:block cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
