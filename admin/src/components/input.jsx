
import { twMerge } from 'tailwind-merge'


const Input = ({ type,
      className,
      placeholder,
      id,
      name,
      onChange,
      value }) => {
      return <input type={type} id={id} placeholder={placeholder} name={name} onChange={onChange} value={value} className={twMerge('border px-4 py-1 border-gray-500 rounded max-w-lg ', className)} />
};

export default Input;