"use client";
import { signOut, useSession } from "@/lib/auth-client";
import { LogoAndroid } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {
  const { data, isPending } = useSession();
  if (isPending) {
    return <div>Loading...</div>;
  }

  const user = data?.user;

  return (
    <div>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <LogoAndroid />
            <p className="font-bold">ACME</p>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <div>
            {user ? (
              <div className="flex gap-4 items-center">
                <p>Welcome, {user.name}!</p>
                <Button onClick={() => signOut()} variant="secondary">Sign Out</Button>
              </div>
            ) : (
              <Link href="/auth/signin">
                <Button variant="secondary">Sign In</Button>
              </Link>
            )}
          </div>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
