import { TbHexagon3D } from "react-icons/tb";
import { PiImageSquareDuotone } from "react-icons/pi";
import { MdEmojiPeople } from "react-icons/md";
import NavItem from "./NavItem/NavItem";

interface NavItemType {
    id: number;
    label: string;
    link: string;
    icon: React.ReactNode;
}

const NavList = () => {
    const navList: NavItemType[] = [
        { id: 1, label: 'About', link: '/', icon: <MdEmojiPeople className="size-5"/>},
        { id: 2, label: 'THREE.js', link: '/three', icon: <TbHexagon3D className="size-5"/>}
    ];
  return (
    <div className="mt-24">
        {navList.map((item) => (
            <NavItem key={item.id} label={item.label} link={item.link} icon={item.icon} />
        ))}
    </div>
  )
}

export default NavList