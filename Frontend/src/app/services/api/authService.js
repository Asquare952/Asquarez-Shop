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

export const getUser = async (userId) => {
  const res = await fetch(
    `https://asquare-techs-backend.onrender.com/api/v1/auth/${userId}`,
    {
      method: "GET",
      credentials: "include", // optional, if you're using cookies
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  return await res.json();
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

  if (!res.ok) {
    throw new Error(result.erro);
  }

  return responce.json();
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

  if (!res.ok) {
    throw new Error("Failed to reset password");
  }

  return responce.json();
};
