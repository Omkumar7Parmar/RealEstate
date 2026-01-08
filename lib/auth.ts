export interface User {
  id: string;
  name: string;
  email: string;
}

export function getUser(): User | null {
  if (typeof window === "undefined") return null;
  try {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
}

export function loginUser(userData: User): void {
  localStorage.setItem("user", JSON.stringify(userData));
}

export function logoutUser(): void {
  localStorage.removeItem("user");
}

export function isLoggedIn(): boolean {
  return !!getUser();
}
