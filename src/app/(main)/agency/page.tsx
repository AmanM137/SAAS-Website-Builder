import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { verifyAndAcceptInvitation, getAuthUserDetails } from "@/lib/queries";
import React from "react";

const Page = async () => {
  const authUser = await currentUser();
  if (!authUser) return redirect("/sign-in");

  const agencyId = await verifyAndAcceptInvitation();

  //get the user details
  const user = await getAuthUserDetails();
  return <div>Agency</div>;
};

export default Page;
