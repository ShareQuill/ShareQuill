import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import ProductDisplay from "../../components/partials/ProductDisplay";

const sortOptions = [
  { name: "Newest", current: true },
  { name: "Price: Low to High", current: false },
  { name: "Price: High to Low", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Productsection({ products }) {
  const [selectedSort, setSelectedSort] = useState("newest");

  const handleSortChange = (sortValue) => {
    console.log(sortValue);
    setSelectedSort(sortValue);
  };

  const sortedProducts = () => {
    switch (selectedSort) {
      case "Price: Low to High":
        return [...products].sort(
          (a, b) => a.rates.daily_rate - b.rates.daily_rate
        );
      case "Price: High to Low":
        return [...products].sort(
          (a, b) => b.rates.daily_rate - a.rates.daily_rate
        );
      case "Newest":
        return [...products].sort(
          (a, b) =>
            new Date(b.created_time.toString()) -
            new Date(a.created_time.toString())
        );
      default:
        // Default to sorting by newest
        return [...products];
    }
  };

  return (
    <div className="bg-white">
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              All products
            </h1>

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
                              onClick={() => handleSortChange(option.name)}
                              className={classNames(
                                option.current
                                  ? "font-medium text-black-1000"
                                  : "text-black-1000",
                                active ? "bg-black-200" : "bg-black-50",
                                "block px-4 py-2 text-sm"
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
                  {sortedProducts().map((product) => (
                    <ProductDisplay product={product} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
