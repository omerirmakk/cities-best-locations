import { BiHomeAlt } from "react-icons/bi";
import Link from "next/link";
import MainCard from "./MainCard";
const Layout = ({ children }) => {
  return (
    <>
      <Link href="/">
        <BiHomeAlt className="europe_flag" />
      </Link>

      <div>{children}</div>
    </>
  );
};
export default Layout;
