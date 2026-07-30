import React from 'react';

interface PharmacyCrossIconProps {
  className?: string;
  size?: number;
}

export const PharmacyCrossIcon: React.FC<PharmacyCrossIconProps> = ({ className = 'w-7 h-7', size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="6" className="fill-emerald-600" />
      <path
        d="M10.5 6.5C10.5 5.94772 10.9477 5.5 11.5 5.5H12.5C13.0523 5.5 13.5 5.94772 13.5 6.5V10.5H17.5C18.0523 10.5 18.5 10.9477 18.5 11.5V12.5C18.5 13.0523 18.0523 13.5 17.5 13.5H13.5V17.5C13.5 18.0523 13.0523 18.5 12.5 18.5H11.5C10.9477 18.5 10.5 18.0523 10.5 17.5V13.5H6.5C5.94772 13.5 5.5 13.0523 5.5 12.5V11.5C5.5 10.9477 5.94772 10.5 6.5 10.5H10.5V6.5Z"
        fill="white"
      />
    </svg>
  );
};
