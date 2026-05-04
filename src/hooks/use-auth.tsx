import { createContext, useContext, type ReactNode } from "react";

interface AuthContextValue {
  user: { id: string } | null;
  session: Record<string, unknown> | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
