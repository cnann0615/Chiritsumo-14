import { redirect } from "next/navigation";
import { auth, signIn } from "../../auth";
import SignIn from "./SignIn";
export default async function Home() {
  const session = await auth();

  session && redirect("/main");
  return <SignIn />;
}
