import React from "react";

function Footer() {
  return (
    <div>
      <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900 dark:border-gray-600">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="#" class="hover:underline">
            Amit, Deepak, Akashra Team™
          </a>
          . All Rights Reserved.
        </span>
      
      </footer>
    </div>
  );
}

export default Footer;
