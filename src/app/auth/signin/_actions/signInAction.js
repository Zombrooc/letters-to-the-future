"use server";

import { signIn } from "@/lib/auth";

export default async function signInAction(email) {
  console.log("From Server: ", email);
  try {
    await signIn("nodemailer", {
      email,
    });

    return;
  } catch (e) {
    return { message: e.message };
  }
}
