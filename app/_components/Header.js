import Logo from "@/app/_components/Logo";
import HamberMenu from "@/app/_components/HamberMenu";
import { useMenu } from "@/app/_components/MenuContext";

import Navigation from "@/app/_components/Navigation";
import { auth } from "@/app/_lib/auth";
import NavigationMobile from "@/app/_components/NavigationMobile";

async function Header() {
  const session = await auth();

  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <HamberMenu />
        <Navigation session={session} />
        <NavigationMobile session={session} />
      </div>
    </header>
  );
}

export default Header;
