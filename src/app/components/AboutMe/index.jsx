import { aboutme } from "@/assets/data";
import Image from "next/image";
const AboutMe = () => {
  return (
    <div>
      <div className="  text-white m-auto">
        <div className="flex gap-4">
          {aboutme.map((item) => {
            return (
              <div className="w-3/12 m-auto">
                <Image src={item.image} className="rounded-xl" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
