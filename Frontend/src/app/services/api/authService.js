// services/authService.js
export const registerUser = async (data) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/register`,
    {
      method: "POST",
      credentials: "include", // keep session cookies if used
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.error || "Registration failed");
  }

  return result;
};

export const loginUser = async (data) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/login`,
    {
      method: "POST",
      credentials: "include", // keep session cookies if used
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.error || "Login failed");
  }

  return result;
};

export const getUser = async (data) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/:id`,
    {
      method: "GET",
      credentials: "include", // keep session cookies if used
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.error);
  }

  return result;
};

export const forgotPassword = async (email) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/forgot-password`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(result.erro);
  }

  return result;
};

export const resetPassword = async (token, newPasword) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/reset-password/${token}`,
    {
      method: "POST",
      credentials: "include", // keep session cookies if used
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: newPasword }),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to reset password");
  }

  return result;
};
