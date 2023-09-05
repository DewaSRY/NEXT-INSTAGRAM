/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
} from "next-auth/react";
import Header from "@/Component/Header";
interface signingProps {
  provider: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}

const signing: NextPage<signingProps> = async ({ provider }) => {
  // const provider = await getProviders();
  console.log("test", provider);
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
          src="https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png"
          alt="instagram-image"
        />
        <div className="">
          <div className="flex flex-col items-center">
            <p className="text-sm italic my-10 text-center">
              This app is created for learning purposes
            </p>
            <button className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default signing;

export async function getServerSideProps() {
  const provider = await getProviders();
  return {
    props: provider,
  };
}
