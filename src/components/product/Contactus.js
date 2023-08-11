import React from "react";

function Contactus() {
  return (
    <div className=" ">
        <div className="">
        <div className="mt-4 max-w-md ">
    
    <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
      <h2 className="mb-8 text-xl font-semibold text-black ">
        Fill in the form
      </h2>

      <form>
        <div className="grid gap-4 lg:gap-6">
       
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label for="hs-firstname-contacts-1" className="block text-sm text-black font-medium ">First Name</label>
              <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-100"/>
            </div>

            <div>
              <label for="hs-lastname-contacts-1" className="block text-sm text-black font-medium ">Last Name</label>
              <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-100"/>
            </div>
          </div>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label for="hs-email-contacts-1" className="block text-sm  font-medium text-black">Email</label>
              <input type="email" name="hs-email-contacts-1" id="hs-email-contacts-1" autocomplete="email" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-100"/>
            </div>

            <div>
              <label for="hs-phone-number-1" className="block text-sm  font-medium text-black">Phone Number</label>
              <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-100"/>
            </div>
          </div>
         

          <div>
            <label for="hs-about-contacts-1" className="block text-sm font-medium text-black">Details</label>
            <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-100"></textarea>
          </div>
        </div>
      

        <div className="mt-6 grid">
          <button type="submit" className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">Send inquiry</button>
        </div>

        <div className="mt-3 text-center">
          <p className="text-sm text-gray-500">
            We'll get back to you in 1-2 business days.
          </p>
        </div>
      </form>
    </div>
  </div>
            
        </div>
    </div>
  );
}

export default Contactus;
