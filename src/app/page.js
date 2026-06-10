"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function page() {
  const router = useRouter();

  const user = true;

  useEffect(() => {
    if (user) {
      router.push("/dashboard/chat");
    } else {
      router.push("/client");
    }
  }, [user]);

  return null;
}
