import React from "react";

export default function Container({ children }) {
  return (
    <div
      className="
        w-full
        sm:w-[540px]
        md:w-[720px]
        lg:w-[960px]
        xl:w-[1220px]
        mx-auto
        px-4
        sm:px-6
        md:px-8
        lg:px-10
      "
    >
      {children}
    </div>
  );
}
