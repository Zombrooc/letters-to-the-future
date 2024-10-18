"use server";

import { createClient } from "@/lib/supabase/server";

export default async function signInAction(email) {
  console.log(email);
  const supabase = createClient();

  let { data, error } = await supabase.auth.signInWithOtp({
    email,
  });

  console.log(error);

  if (error) {
    throw new Error(error);
  }

  console.log("Data: ", data);

  return data;
}
