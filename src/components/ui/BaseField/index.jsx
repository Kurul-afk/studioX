import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";

export default function BaseField({ IsTextArea = false, error, ...props }) {
  const lastErrorRef = useRef(null);
  const Component = IsTextArea ? "textarea" : "input";

  useEffect(() => {
    if (error && error !== lastErrorRef.current) {
      toast.error(error, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
      });
      lastErrorRef.current = error;
    } else if (!error) {
      lastErrorRef.current = null;
    }
  }, [error]);

  return (
    <div className="relative w-full flex flex-col group">
      <div className="absolute bottom-0 left-3 top-1/2 -translate-y-1/2 text-gray-500 transition-colors duration-300 group-focus-within:text-orange-500"></div>
      <Component
        required
        placeholder={`Enter ${props.name}...`}
        className={`w-full text-2xl py-2.5 pl-10 pr-3 bg-transparent border-b-2 border-gray-300 outline-none transition-colors duration-300 focus:border-orange-500 peer ${IsTextArea ? "resize-none overflow-y-auto" : ""} ${error ? "border-red-500 placeholder:text-red-500/70" : ""}`}
        rows={5}
        {...props}
      />
      <div
        className={`absolute bottom-0 left-0 h-[1px] w-full bg-orange-500 scale-x-0 transition-transform duration-300 origin-left peer-focus:scale-x-100 ${error ? "bg-red-500" : ""}`}
      />
      <div
        className={`absolute bottom-0 left-0 h-full w-0 bg-orange-500/10 transition-all duration-300 -z-10 peer-focus:w-full ${error ? "bg-red-500/10" : ""}`}
      />
    </div>
  );
}
