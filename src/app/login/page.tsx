"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import AuthShell from "@/components/auth/AuthShell";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <AuthShell
      heading="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      eyebrow="Sign In"
      title="Welcome Back"
      onSubmit={handleSubmit}
      showSocials
      footer={
        <p className="mt-10 text-center text-xs text-gray-500 font-medium">
          New user?{" "}
          <Link href="/signup" className="text-[#1A56EE] font-semibold hover:underline">
            Create an account
          </Link>
        </p>
      }
    >
      {/* Email */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          required
          placeholder="designer@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#1A56EE] transition"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-2">
          Password
        </label>
        <input
          type="password"
          required
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#1A56EE] transition"
        />
      </div>

      {/* Sign In Button (Right Aligned) */}
      <div className="pt-2 flex justify-end">
        <button
          type="submit"
          className="bg-[#D3F832] text-gray-900 font-bold text-xs sm:text-sm px-9 py-3 rounded-full hover:brightness-105 active:scale-95 transition shadow-sm"
        >
          Sign In
        </button>
      </div>
    </AuthShell>
  );
}
