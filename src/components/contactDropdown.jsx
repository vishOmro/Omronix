import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <Menu as="div" className="relative">
      <div>
        <MenuButton className="inline-flex w-fit justify-center gap-x-1.5 rounded-md bg-white px-10 py-3  font-semibold text-sm  ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
          Products
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-700" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Communication Solutions
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Blockchain Solutions
            </a>
          </MenuItem>
          {/* <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Email Solutions
            </a>
          </MenuItem> */}
         
          {/* <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
                Whatsapp Business
            </a>
          </MenuItem> */}

          {/* <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Customer Engagement
            </a>
          </MenuItem> */}
        </div>
      </MenuItems>
    </Menu>
  )
}
