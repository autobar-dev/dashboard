"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ProgressBar from "next-nprogress-bar";

export default function Shell({ children }: {
  children: ReactNode,
}) {
  return (
    <>
      <Header />
      <div className="flex flex-row mt-16">
        <Sidebar />
        <main className="flex-1 h-auto p-4">
          {children}
        </main>
      </div>
    </>
  );
}
