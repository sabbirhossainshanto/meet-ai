import { auth } from "@/lib/auth";
import { SignUpView } from "@/modules/auth/view/sign-up-view";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const SignUp = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/");
  }
  return <SignUpView />;
};

export default SignUp;
