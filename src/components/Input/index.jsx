import { BiSearch } from "react-icons/bi";

const InputSearch = ({
  label,
  type = "text",
  id,
  placeholder,
  onChange,
  value,
  className = "",
}) => {
  return (
    <div className="relative">
      <input
        className={`w-full rounded-lg py-2 pr-10 bg-[var(--light-gray-3)] border-none outline-none focus:ring-[var(--primary)] focus:ring-2 ${className}`}
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {/* Ícone de busca */}
      <BiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
    </div>
  );
};

export default InputSearch;
