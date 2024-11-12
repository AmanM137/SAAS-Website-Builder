import { FileVideo } from "lucide-react";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const Page = async () => {
  const authUser = await currentUser();
  if (!authUser) return redirect("/sign-in");
  return <div>Agency</div>;
};

export default Page;
