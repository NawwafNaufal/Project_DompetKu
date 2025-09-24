import React from "react";

const Login = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className="w-full max-w-md flex flex-col items-center rounded-lg sm:border-2 sm:border-blue-600 p-10 sm:shadow-lg gap-6">
        <img src="/logo.svg" alt="Logo" className="w-64" />
        <h1 className="mx-4">Aplikasi Manajemen Keuangan</h1>
        <form
          action="/users/Dashboard"
          method="POST"
          className="w-full flex flex-col items-center gap-4"
        >
          <input
            type="text"
            name="username"
            required
            placeholder="username"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="password"
            name="password"
            required
            placeholder="password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="flex">
          <p className="text-sm text-gray-500">Belum punya akun?</p>
          <a
            href="/auth/register"
            className="text-sm text-blue-600 hover:underline"
          >
            Daftar
          </a>
        </div>
      </div>
    </main>
  );
};

export default Login;
