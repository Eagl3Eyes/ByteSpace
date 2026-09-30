"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import AuthShell from "@/components/auth/AuthShell";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ fullName, email, password });
  };

  return (
    <AuthShell
      heading="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      eyebrow="Create an Account"
      title={
        <>
          Welcome to <br /> ByteSpace
        </>
      }
      onSubmit={handleSubmit}
      footer={
        <p className="mt-12 text-center text-xs text-gray-500 font-medium">
          Already have an account?{" "}
          <Link href="/login" className="text-[#1A56EE] font-semibold hover:underline">
            Login
          </Link>
        </p>
      }
    >
      {/* Full Name */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          required
          placeholder="Jamie Davis"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#1A56EE] transition"
        />
      </div>

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

      {/* Continue Button */}
      <div className="pt-2 flex justify-end">
        <button
          type="submit"
          className="bg-[#D3F832] text-gray-900 font-bold text-xs sm:text-sm px-8 py-3 rounded-full hover:brightness-105 active:scale-95 transition shadow-sm"
        >
          Continue
        </button>
      </div>
    </AuthShell>
  );
}
