import api from "./api";

export const sendOTP = (email) => api.post("/auth/send-otp", { email });
export const verifyOTP = (email, otp) => api.post("/auth/verify-otp", { email, otp });
export const getMe = () => api.get("/auth/me");
export const logout = () => api.post("/auth/logout");