import Link from "next/link";

interface MenuSubItemProps {
  text: string
}

export const MenuSubItem = ({ text }: MenuSubItemProps) => {
  return (
    <Link className="w-11/12 m-auto text-[#e6e1ee] indent-7 md:indent-9 py-3 rounded-2xl hover:bg-[#794EBA]  font-bold" href={"#"}>
      {text}
    </Link>
  );
}