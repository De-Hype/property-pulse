import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
type ButtonType = {
  text: string;
  link: string;
};

const Button = ({ text, link }: ButtonType) => {
  return (
    <Link
      to={link}
      className="flex items-center gap-1 bg-yellow-400 py-1 tablet:py-2 px-3 tablet:px-5 rounded-tr-lg"
    >
      <span className="text-sm text-black font-semibold">{text}</span>
      <FaLongArrowAltRight className="text-white" />
    </Link>
  );
};

export default Button;
