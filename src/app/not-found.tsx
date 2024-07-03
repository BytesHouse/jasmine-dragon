"use client";

import { useRouter } from "next/navigation";

const NotFound = () => {
  const { push } = useRouter();
  const redirect = setTimeout(() => {
    push("/");
    clearTimeout(redirect);
  }, 3000);

  redirect;
  return (
    <body>
      <h1>404</h1>
      <h2>Page not found :{"("}</h2>
      <p>Redirect in 3 seconds</p>
    </body>
  );
};

export default NotFound;
