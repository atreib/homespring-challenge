import axios from "axios";

const API_INTERNAL = process.env.BOOKS_API_URL ?? "http://localhost:5000/";

export const BOOKS_API = axios.create({
  baseURL: API_INTERNAL,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getErrorMessage = (err: any) =>
  err?.response?.data?.message || "Internal server error";
