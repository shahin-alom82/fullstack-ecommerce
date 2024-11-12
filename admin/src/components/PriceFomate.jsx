import { twMerge } from 'tailwind-merge'

const PriceFomate = ({ amount, className }) => {
      const formateAmount = new Number(amount).toLocaleString('en-US', {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2
      })
      return <span className={twMerge("font-medium", className)}>{formateAmount}</span>
};

export default PriceFomate;