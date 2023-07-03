"use client";

import UserSection from "@/components/sections/user";
import { useParams } from "next/navigation";

export default function User() {
  const params = useParams();
  const email = params.email;

  return (
    <UserSection
      email={email}
    />
  );
}
