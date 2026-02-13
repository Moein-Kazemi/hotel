"use client";
import HeaderLinks from "@/app/_components/HeaderLinks";
import { useMenu } from "./MenuContext";

function NavigationMobile({ session }) {
  const { isOpen, toggleIsOpen } = useMenu();

  if (isOpen)
    return (
      <div className="fixed inset-0 flex flex-col gap-4 bg-stone-400 z-10 w-full h-full px-8 py-5">
        <div
          className="flex justify-end cursor-pointer "
          onClick={toggleIsOpen}
        >
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            className="text-primary-100 hover:text-accent-400"
          >
            <path
              d="M16.4375 19.9375L4.1875 32.1875C3.72917 32.6458 3.14583 32.875 2.4375 32.875C1.72917 32.875 1.14583 32.6458 0.687499 32.1875C0.229166 31.7292 0 31.1458 0 30.4375C0 29.7292 0.229166 29.1458 0.687499 28.6875L12.9375 16.4375L0.687499 4.1875C0.229166 3.72917 0 3.14583 0 2.4375C0 1.72917 0.229166 1.14583 0.687499 0.687499C1.14583 0.229166 1.72917 0 2.4375 0C3.14583 0 3.72917 0.229166 4.1875 0.687499L16.4375 12.9375L28.6875 0.687499C29.1458 0.229166 29.7292 0 30.4375 0C31.1458 0 31.7292 0.229166 32.1875 0.687499C32.6458 1.14583 32.875 1.72917 32.875 2.4375C32.875 3.14583 32.6458 3.72917 32.1875 4.1875L19.9375 16.4375L32.1875 28.6875C32.6458 29.1458 32.875 29.7292 32.875 30.4375C32.875 31.1458 32.6458 31.7292 32.1875 32.1875C31.7292 32.6458 31.1458 32.875 30.4375 32.875C29.7292 32.875 29.1458 32.6458 28.6875 32.1875L16.4375 19.9375Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <nav className="  z-10 text-xl">
          <HeaderLinks
            session={session}
            isOpen={isOpen}
            toggleIsOpen={toggleIsOpen}
          />
        </nav>
      </div>
    );
}

export default NavigationMobile;
