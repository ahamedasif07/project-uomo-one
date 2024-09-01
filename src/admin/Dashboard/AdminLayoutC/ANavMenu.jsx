import React from "react";

const ANavMenu = () => {
  return (
    <nav className="" aria-label="Global">
      <div className="mx-auto max-w-3xl space-y-1 px-2 pt-2 pb-3 sm:px-4">
        <a
          href="/admin"
          aria-current="page"
          className="bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium"
        >
          Home
        </a>
        <a
          href="/admin/trending"
          className="hover:bg-gray-50 text-gray-900 block rounded-md py-2 px-3 text-base font-medium"
        >
          Trending
        </a>
        <a
          href="#"
          className="hover:bg-gray-50 text-gray-900 block rounded-md py-2 px-3 text-base font-medium"
        >
          Explore
        </a>
      </div>
      <div className="border-t border-gray-200 pt-4 pb-3">
        <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6"></div>
        <div className="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
          <a
            href="#"
            className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium text-gray-900"
          >
            Your Profile
          </a>
          <a
            href="#"
            className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium text-gray-900"
          >
            Settings
          </a>
          <a
            href="#"
            className="hover:bg-gray-50 block rounded-md py-2 px-3 text-base font-medium text-gray-900"
          >
            Sign out
          </a>
        </div>
      </div>
    </nav>
  );
};

export default ANavMenu;
