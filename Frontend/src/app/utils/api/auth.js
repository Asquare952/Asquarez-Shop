import API from "./index";

export const registerUser = (userData) => API.post("/api/v1/auth/register", userData);
export const loginUser = (userData) => API.post("/api/v1/auth/login", userData);
export const forgotPassword = (userData) => API.post("/api/v1/auth/forgot-password", userData);
export const resetPassword = (userData) => API.post("/api/v1/auth/reset-password", userData);
