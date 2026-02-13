import HeaderLinks from "@/app/_components/HeaderLinks";

export default function Navigation({ session }) {
  return (
    <nav className={"hidden sm:block z-10 text-xl"}>
      <HeaderLinks session={session} />
    </nav>
  );
}
