// src/services/api.js
const API_BASE = "http://localhost:5000/api";

export const getTenants = async () => {
  const res = await fetch(`${API_BASE}/companies`);
  return res.json();
};

export const login = async (slug, credentials) => {
  const res = await fetch(
    `${API_BASE}/auth/login?company=${slug}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    }
  );
  return res.json();
};

