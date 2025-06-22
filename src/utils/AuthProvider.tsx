"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import axios from "axios";

interface AuthContextType {
  user: any | null;
  setUser: Dispatch<SetStateAction<any | null>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);

  const getUser = useCallback(async () => {
    try {
      const response = await axios.get<any>(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users/profile`,
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        setUser(response.data?.data);
      }
      if (!response.data.success) {
        setUser(null);
      }
    } catch (error) {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user, getUser, setUser]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
