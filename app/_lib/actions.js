"use server";

import { signIn, signOut } from "./auth";

export async function signInAction() {
  // when the signIn becomes true go ro redirectTo:
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
