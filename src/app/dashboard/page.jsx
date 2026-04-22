// path to your Better Auth server instance
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;

  console.log(user);

  if (!user) {
    // redirect("/auth/signin");
    return <div>Please sign in to access the dashboard.</div>;
  }
  return (
    <div>
      <h1>this is dashboard page</h1>
    </div>
  );
};

export default DashboardPage;
