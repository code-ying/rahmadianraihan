import { navbar } from "@/assets/data";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="md:flex md:justify-between lg:w-9/12 m-auto gap-6 font-roboto text-white border-t border-zinc-700 py-6">
        <div className="flex gap-6 font-roboto px-1  md:px-2 lg:px-0">
            {navbar.map((item) => {
        return (
          <div key={item.id} className="m-auto">
            <Link href={item.path} className="">
              <li className="list-none text-zinc-200">{item.name}</li>
            </Link>
          </div>
        );
      })}
        </div>
      
      <div>
        <p className="text-zinc-600 px-1 md:px-2 lg:px-0">© 2024 Raihan. All rights reserved.</p>
      </div>
    </div>
  );
};
export default Footer;
