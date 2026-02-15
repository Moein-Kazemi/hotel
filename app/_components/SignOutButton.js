import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

function SignOutButton({ children }) {
  return (
    <form action={signOutAction}>
      <button className=" justify-center text-sm sm:text-lg py-3 px-5 group-hover:bg-primary-900 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full">
        <ArrowRightOnRectangleIcon className="h-5 w-5 text-primary-200" />
        {children}
      </button>
    </form>
  );
}

export default SignOutButton;
