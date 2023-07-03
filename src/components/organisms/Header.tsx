"use client";

import Logo from "../molecules/Logo";

export default function Header() {
  return (
    <header className="bg-white w-full h-16 fixed left-0 top-0 border-b-gray-200 border-b flex justify-between z-50 px-8">
      <span>&nbsp;</span>
      <Logo withTextClassName="h-10 mt-3" />
      <span>&nbsp;</span>
    </header>
  )
}
