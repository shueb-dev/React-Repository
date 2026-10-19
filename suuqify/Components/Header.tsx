import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div>
      <div className="navbar bg-green-800 shadow-sm px-4">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Suuqify</a>
        </div>
        <div className="flex-none">
          <nav className="menu menu-horizontal px-4 flex gap-4 font-semibold text-white">
            <Link href="/home">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
