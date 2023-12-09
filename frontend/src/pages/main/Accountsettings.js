import React from "react";
import Appheader from "../../components/header/header";
import Mainfooter from "./footer";
const iconStyle = {
    textAlign: "center",
  };
export default function AccountSettings() {
  return (
    <>
    <Appheader/>
    <div className="w-10/12 mx-auto max-w-6xl">
        <div className="lg:col-start-2 col-span-12 lg:col-span-10 grid grid-cols-6 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 mx-auto">
            <div class="p-4 col-span-6 md:col-span-2 ">
                <div class="grid grid-cols-5">
                <div className="md:col-span-5 group relative flex items-left gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-indigo-50">
                <div style={iconStyle} className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white mx-auto md:mx-0">
                    <svg class="mx-auto items-center justify-center h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                    </svg>
                    </div>
                    <div className="flex-auto hidden md:block">
                        <a href="#" className="block font-semibold text-gray-900">
                        Personal Information
                        <span className="absolute inset-0"></span>
                        </a>
                    </div>
                </div>
                </div>
            </div>
            <div class="p-4 col-span-6 md:col-span-4">
            <div class="mx-auto grid grid-cols-2 gap-x-8 gap-y-10">
                <div class="col-span-2 sm:col-span-1">
                <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name 1</label>
                <div class="mt-2">
                    <p>name</p>
                </div>
                </div>

                <div class="col-span-2 sm:col-span-1">
                <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div class="mt-2">
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>

                <div class="col-span-2">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
                </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
            </div>
        </div>
        </div>
        <Mainfooter/>
    </>
  );
}