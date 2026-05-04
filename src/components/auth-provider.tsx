import { type ReactNode } from "react";
import { AuthContext } from "@/hooks/use-auth";

export function AuthProvider({ children }: { children: ReactNode }) {
  const signOut = async () => {
    // No-op
  };

  return (
    <AuthContext.Provider value={{ user: null, session: null, loading: false, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
