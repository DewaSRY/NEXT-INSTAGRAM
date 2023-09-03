import { NextPage } from "next";
import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
} from "next-auth/react";
interface signingProps {
  provider: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}

const signing: NextPage<signingProps> = async ({ provider }) => {
  // const provider = await getProviders();
  console.log("test", provider);
  return <div>signing two</div>;
};

export default signing;

export async function getServerSideProps() {
  const provider = await getProviders();
  return {
    props: provider,
  };
}
