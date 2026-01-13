import type { JSX } from "react";

interface ProtectedType {
  children: JSX.Element;
  roles?: Role[];
}
type Role = "ADMIN" | "STAFF" | "VIEWER";

export type { ProtectedType };
