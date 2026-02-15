import { NextResponse } from "next/server";
import { auth } from "./app/_lib/auth";

// export function middleware(request) {
//

//   // for rediredct to another page
//   return NextResponse.redirect(new URL("/about", request.url));
// }

export const middleware = auth;

// set matcher to know middleware runs before wich routes
// now the matcher protected /account and when some one click on the account link the authorized() functions in the auth.js is run
export const config = {
  matcher: ["/account"],
};
