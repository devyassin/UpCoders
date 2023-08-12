import Input from "@/components/form/Input";
import InputPassword from "@/components/form/InputPassword";
import AskedSignIn from "@/components/ui/AskedSignIn";
import Copyright from "@/components/ui/Copyright";
import Image from "next/image";
import React, { FormEvent } from "react";
import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { User } from "@/types";
import FirstBtn from "@/components/btn/FirstBtn";

type Props = {};

const SignIn = (props: Props) => {
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const currentTypeSelected = useAppSelector((state) => state.welcome.type);
  const user: User = useAppSelector((state) => state.user.user);
  const error = useAppSelector((state) => state.user.error);
  const statusAddUser = useAppSelector((state) => state.user.statusAddUser);
  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col px-6 pt-6 ">
      <div
        onClick={() => router.push("/welcome")}
        className="w-[7.5rem] h-[2.87625rem] cursor-pointer"
      >
        <Image
          src="/assets/logo.png"
          height={200}
          width={200}
          alt="logo"
          priority
        />
      </div>
      <div className="flex flex-col card-welcome mx-auto  px-14 py-6 my-8 w-1/2 max-lg:w-2/3  max-sm:w-full ">
        <h1 className="title-welcome max-lg:text-[24px]  mb-[14px]">Sign In</h1>
        <div className="flex items-center  justify-between ">
          <hr className="h-[1px] mr-4 w-full  bg-gray-50 opacity-30" />

          <Image
            src="/assets/clientLogo.png"
            alt="client logo"
            className="pt-2 max-md:pb-0 pb-8"
            priority
            width={50}
            height={50}
          />

          <hr className="h-[1px] ml-4 w-full bg-gray-50 opacity-30" />
        </div>

        {/* Form */}
        <form onSubmit={onSubmitHandler} className="flex flex-col max-md:pt-8 ">
          <Input
            value={user.email}
            name="email"
            customClasses="w-full mt-8"
            type="email"
            placeholder="Email"
          />
          <InputPassword
            value={user.password}
            name="password"
            customClasses="w-full mt-8"
            placeholder="Password"
          />

          <FirstBtn customClasses="mt-8 py-2" text="Login" />
          <AskedSignIn />
        </form>
      </div>
      <Copyright />
    </div>
  );
};

export default SignIn;
