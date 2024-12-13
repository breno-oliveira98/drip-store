import { BiSearch } from "react-icons/bi";

const InputSearch = ({label = "label", type = 'text', id, placeholder, onChange, value}) => {
  return (
    <div>
        <label htmlFor={id}>
        {label}

        <div className="relative">
            <input className="rounded-lg py-2 pr-7 w-full bg-[var(--light-gray-3)] border-none outline-none focus:ring-[var(--primary)] focus:ring-2" id={id} type={type} value={value} placeholder={placeholder} onChange={onChange}/>

                <BiSearch  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={24}/>

        </div>
        </label>
    </div>
  );
};

export default InputSearch;
