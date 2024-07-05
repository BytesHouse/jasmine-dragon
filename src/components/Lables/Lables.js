import Image from "next/image";

import { labels } from "@/config/constants";

const Lables = () => {
  return (
    <div className="viewport">
      <div className="lables">
        {labels.map((item, index) => {
          return (
            <Image
              key={index}
              src={item.src}
              alt={item.alt}
              height={120}
              width={item.width}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Lables;
