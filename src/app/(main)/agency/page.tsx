import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { verifyAndAcceptInvitation, getAuthUserDetails } from "@/lib/queries";
import React from "react";

const Page = async () => {
    return <div>Agency</div>;
};

export default Page;
