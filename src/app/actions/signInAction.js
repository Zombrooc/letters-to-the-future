"use server";

import { signIn } from "@/services/auth";

export default async function signInAction(data) {
  await signIn("resend", data);

  return;
}
