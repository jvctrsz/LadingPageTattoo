import { ReactNode } from "react";

interface ContactFieldProps {
  children: ReactNode;
  label: string;
  name: string;
  required?: boolean;
}

const ContactField = ({
  children,
  label,
  name,
  required = true,
}: ContactFieldProps) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block text-sm uppercase tracking-wider mb-2 text-gray-400"
      >
        {label} {required && "*"}
      </label>
      {children}
    </div>
  );
};

export default ContactField;
