//Next
import Image from "next/image";

const Header = () => {
  return (
    <header className="p-3 bg-[#161B22] text-white flex flex-row items-center justify-around">
      <h1 className="font-black text-3xl">Busfil GitHub</h1>
      <Image
        src="/img/GitHub_Logo.png"
        alt="GitHub Logo"
        width={50}
        height={50}
        className="shrink-0"
      />
    </header>
  );
};

export default Header;
