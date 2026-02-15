import SideNavigation from "@/app/_components/SideNavigation";
import SideNavigationMobile from "@/app/_components/SideNavigationMobile";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between h-full gap-12 sm:grid sm:grid-cols-[16rem_1fr]">
      <SideNavigation />
      <div className="py-1">{children}</div>
      <SideNavigationMobile />
    </div>
  );
}
