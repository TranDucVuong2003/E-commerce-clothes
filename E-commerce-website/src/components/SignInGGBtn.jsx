import * as React from "react";
import SignInButton from "./SignInButton";

const socialProviders = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2b938d459ab07f076de5460d2a50b950a2c66ae6f777acddb7252066065529b2?placeholderIfAbsent=true&apiKey=4da04f992eee41898e0913735c116203",
    text: "Sign up with Facebook",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/82fa7bb389eb5aee6c646970cd1ff03f82f103d4c7e805bcaac0e2a53959c40a?placeholderIfAbsent=true&apiKey=4da04f992eee41898e0913735c116203",
    text: "Sign up with Google",
  },
];

function SocialSignIn() {
  return (
    <div className="flex flex-col text-lg max-w-[454px] text-zinc-800">
      {socialProviders.map((provider, index) => (
        <div key={index} className={index > 0 ? "mt-4" : ""}>
          <SignInButton
            icon={provider.icon}
            text={provider.text}
            onClick={() => {}}
          />
        </div>
      ))}
    </div>
  );
}

export default SocialSignIn;