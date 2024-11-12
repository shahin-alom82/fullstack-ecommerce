import { twMerge } from "tailwind-merge";

const Badge = ({ title, className }) => {
      return (
            <div>
                  <button className={twMerge("bg-black/80 text-white py-0.5 px-2 font-medium rounded text-sm tracking-wide hover:bg-black ease-in-out cursor-pointer duration-300", className)}>{title}</button>
            </div>
      );
};

export default Badge;