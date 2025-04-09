import * as React from "react";

const SignInButton = ({ icon, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="hover:opacity-60 flex overflow-hidden flex-col justify-center items-center px-12 py-3 w-full bg-white border border-solid border-zinc-800 rounded-[40px]"
      tabIndex={0}
    >
      <div className="flex gap-4 justify-center items-center">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
        />
        <span className="self-stretch my-auto">{text}</span>
      </div>
    </button>
  );
};

export default SignInButton;