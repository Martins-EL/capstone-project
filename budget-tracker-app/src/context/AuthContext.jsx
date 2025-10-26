import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication on mount
  useEffect(() => {
    const authData = localStorage.getItem("budget_auth");
    if (authData) {
      const { user: savedUser, expiresAt } = JSON.parse(authData);
      const now = new Date().getTime();

      if (now < expiresAt) {
        setUser(savedUser);
        setIsAuthenticated(true);
      } else {
        // Session expired
        localStorage.removeItem("budget_auth");
      }
    }
  }, []);

  // Sign up function
  const signup = (username, email, password) => {
    // Get existing users
    const users = JSON.parse(localStorage.getItem("budget_users") || "[]");

    // Check if username or email already exists
    const existingUser = users.find(
      (u) => u.username === username || u.email === email
    );

    if (existingUser) {
      if (existingUser.username === username) {
        throw new Error("Username already exists");
      }
      if (existingUser.email === email) {
        throw new Error("Email already exists");
      }
    }

    // Create new user
    const newUser = {
      id: Date.now(),
      username,
      email,
      password, // In a real app, you'd hash this!
      createdAt: new Date().toISOString(),
    };

    // Save to users list
    users.push(newUser);
    localStorage.setItem("budget_users", JSON.stringify(users));

    // Auto-login after signup (7 days default)
    const expiresAt = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
    const authData = {
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
      expiresAt,
    };

    localStorage.setItem("budget_auth", JSON.stringify(authData));
    setUser(authData.user);
    setIsAuthenticated(true);

    return true;
  };

  // Login function
  const login = (username, password, rememberMe = false) => {
    const users = JSON.parse(localStorage.getItem("budget_users") || "[]");

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      throw new Error("Invalid username or password");
    }

    // Set expiration: 30 days if remember me, otherwise 7 days
    const days = rememberMe ? 30 : 7;
    const expiresAt = new Date().getTime() + days * 24 * 60 * 60 * 1000;

    const authData = {
      user: { id: user.id, username: user.username, email: user.email },
      expiresAt,
    };

    localStorage.setItem("budget_auth", JSON.stringify(authData));
    setUser(authData.user);
    setIsAuthenticated(true);

    return true;
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("budget_auth");
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    isAuthenticated,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
