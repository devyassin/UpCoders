import Input from "@/components/form/Input";
import InputPassword from "@/components/form/InputPassword";
import AskedSignIn from "@/components/ui/AskedSignIn";
import Copyright from "@/components/ui/Copyright";
import Image from "next/image";
import React, { FormEvent, useEffect } from "react";
import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { User } from "@/types";
import FirstBtn from "@/components/btn/FirstBtn";
import { zodHandllingErrors } from "@/helpers/ZodHandlingErrors";
import { UserValidationSignIn } from "@/lib/validation/UserValidation";
import { clearUser, signIn } from "@/store/UserSlice";
import { Toastfailed, ToastLoading, Toastsuccess } from "@/helpers/Toast";

type Props = {};

const SignIn = (props: Props) => {
  const router = useRouter();
  const dispatch = useDispatch<any>();
  const currentTypeSelected = useAppSelector((state) => state.welcome.type);
  const user: User = useAppSelector((state) => state.user.user);
  const errorSignIn = useAppSelector((state) => state.user.errorSignIn);
  const statusSignIn = useAppSelector((state) => state.user.statusSignIn);
  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (zodHandllingErrors(UserValidationSignIn, user)) {
      dispatch(signIn({ email: user.email, password: user.password }));
    }
  };

  useEffect(() => {
    // in here i gonna check if the user is a freelancer and he complited his registration of profile else if he is a client he will not need it
    if (
      // && user.isCompleted === true) ||
      // (statusSignIn === "succeeded" && user.type === "client")
      statusSignIn === "succeeded"
    ) {
      Toastsuccess("Welcome !");

      setTimeout(() => {
        router.push("/");
        dispatch(clearUser());
      }, 1500);
    }

    if (statusSignIn === "failed") {
      Toastfailed(errorSignIn);
    }

    if (statusSignIn === "loading") {
      ToastLoading("processing .....");
    }
  }, [statusSignIn]);
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
        <h1 className="title-welcome max-lg:text-[24px]  mb-[14px]">
          Sign In{" "}
          {currentTypeSelected == "client" ? "as a client" : "As a Freelancer"}
        </h1>
        <div className="flex items-center  justify-between ">
          <hr className="h-[1px] mr-4 w-full  bg-gray-50 opacity-30" />
          {currentTypeSelected == "client" ? (
            <Image
              src="/assets/clientLogo.png"
              alt="client logo"
              className="pt-2 max-md:pb-0 pb-8"
              priority
              width={50}
              height={50}
            />
          ) : (
            <Image
              src="/assets/freelancerLogo.png"
              alt="client logo"
              className="pt-2 max-md:pb-0 pb-8"
              priority
              width={50}
              height={50}
            />
          )}

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
          <AskedSignIn type="sign up" />
        </form>
      </div>
      <Copyright />
    </div>
  );
};

export default SignIn;
