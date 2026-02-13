import Link from "next/link";

function HeaderLinks({ session, isOpen = false, toggleIsOpen = () => {} }) {
  return (
    <ul
      className={`flex gap-16 items-center ${isOpen ? "flex-col items-center gap-6" : ""}`}
    >
      <li>
        <Link
          href="/cabins"
          className="hover:text-accent-400 transition-colors"
          onClick={isOpen && toggleIsOpen}
        >
          Cabins
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="hover:text-accent-400 transition-colors"
          onClick={isOpen && toggleIsOpen}
        >
          About
        </Link>
      </li>
      <li>
        {session?.user?.image ? (
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
            onClick={isOpen && toggleIsOpen}
          >
            {/* <img href={session.user.image} alt="User Avatar" /> */}
            <span>{session.user.name}</span>
          </Link>
        ) : (
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
            onClick={isOpen && toggleIsOpen}
          >
            Guest area
          </Link>
        )}
      </li>
    </ul>
  );
}

export default HeaderLinks;
