import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <section className="container mx-auto">
      <div className="w-full flex justify-between my-5">
        <h2 className={`text-${titleAlign} text-darkGray2 text-2xl`}>{title}</h2>
        {link && (
          <Link
            className="text-primary text-lg font-semibold flex items-center gap-2"
            to={"/"}
          >
            {link} <FaArrowRightLong /> 
          </Link>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
};
