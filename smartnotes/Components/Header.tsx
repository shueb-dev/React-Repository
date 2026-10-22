import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="navbar bg-base-300 shadow-sm ">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl text-amber-400">
          Smart Notes
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <Link href="/New">
            <button className="btn btn-outline btn-accent">New Note</button>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
