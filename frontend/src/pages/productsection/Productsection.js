import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import ProductDisplay from '../../components/partials/ProductDisplay'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Productsection() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [products, setProducts] = useState([
    {
        category: "Clothings",
        sub_category: "Men",
        type: "Jackets",
        name: "Winter Jacket - Vayanga",
        description: "Wind Proof, Water Proof",
        condition: "excellent",
        age: "less_than_3_months",
        rates: {
          hourly_rate: 10,
          daily_rate: 8,
          weekly_rate: 5,
          monthly_rate: 3,
          sale: 15,
        },
        location: {
          apartment_name: "Sample Apartment",
          area: "Downtown",
          zip_code: 12345,
          city: "Sample City",
          state: "Sample State",
        },
        photos_directory: {
            imageUrl: [
              "https://image.benq.com/is/image/benqco/no-compromise-in-durability-for-aesthetics-2?$ResponsivePreset$",
            ],
          },
        frequency: "",
      },
      {
        category: "Clothings",
        sub_category: "Men",
        type: "Jackets",
        name: "Winter Jacket - Vayanga",
        description: "Wind Proof, Water Proof",
        condition: "excellent",
        age: "less_than_3_months",
        rates: {
          hourly_rate: 10,
          daily_rate: 8,
          weekly_rate: 5,
          monthly_rate: 3,
          sale: 15,
        },
        location: {
          apartment_name: "Sample Apartment",
          area: "Downtown",
          zip_code: 12345,
          city: "Sample City",
          state: "Sample State",
        },
        photos_directory: {
            imageUrl: [
              "https://image.benq.com/is/image/benqco/no-compromise-in-durability-for-aesthetics-2?$ResponsivePreset$",
            ],
          },
        frequency: "",
      },
      {
        category: "Clothings",
        sub_category: "Men",
        type: "Jackets",
        name: "Winter Jacket - Vayanga",
        description: "Wind Proof, Water Proof",
        condition: "excellent",
        age: "less_than_3_months",
        rates: {
          hourly_rate: 10,
          daily_rate: 8,
          weekly_rate: 5,
          monthly_rate: 3,
          sale: 15,
        },
        location: {
          apartment_name: "Sample Apartment",
          area: "Downtown",
          zip_code: 12345,
          city: "Sample City",
          state: "Sample State",
        },
        photos_directory: {
            imageUrl: [
              "https://image.benq.com/is/image/benqco/no-compromise-in-durability-for-aesthetics-2?$ResponsivePreset$",
            ],
          },
        frequency: "",
      },
      {
        category: "Clothings",
        sub_category: "Men",
        type: "Jackets",
        name: "Winter Jacket - Vayanga",
        description: "Wind Proof, Water Proof",
        condition: "excellent",
        age: "less_than_3_months",
        rates: {
          hourly_rate: 10,
          daily_rate: 8,
          weekly_rate: 5,
          monthly_rate: 3,
          sale: 15,
        },
        location: {
          apartment_name: "Sample Apartment",
          area: "Downtown",
          zip_code: 12345,
          city: "Sample City",
          state: "Sample State",
        },
        photos_directory: {
            imageUrl: [
              "https://image.benq.com/is/image/benqco/no-compromise-in-durability-for-aesthetics-2?$ResponsivePreset$",
            ],
          },
        frequency: "",
      }]
  )

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black-100 bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">All products</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-black-50 shadow-2xl">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-black-1000' : 'text-black-1000',
                                active ? 'bg-black-200' : 'bg-black-50',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24">
              {/* Product grid */}
              <div className="lg:col-span-10">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
                    <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-1">
                    {products.map((product) => (
                          <ProductDisplay product={product} key={product._id} />
                  ))}
                    </div>
                </div>
                </div>
          </section>
        </main>
      </div>
    </div>
  )
}
