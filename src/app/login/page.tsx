"use client"
import { useState } from "react";

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    { label: "Estudante", value: "student" },
    { label: "Professor", value: "teacher" },
    { label: "Coordenador", value: "coordinator" },
  ];
  return (
    <>
      <main className="flex justify-center items-center w-screen h-screen bg-gradient-to-br from-blue-100 to-gray-200">
        <div
          id="card-container"
          className="flex flex-col w-[380px] shadow-lg bg-white rounded-2xl p-8"
        >
          <h1 className="text-3xl font-bold text-center text-blue-900">
            Escolarium
          </h1>
          <p className="text-sm text-gray-500 text-center mb-6">
            Acesso ao portal
          </p>

          <form className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700 focus: transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Senha
              </label>
              <input
                type="password"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700 focus: transition"
              />
            </div>

            <div className="flex gap-3 mt-2">
              {roles.map((role) => (
                <button
                  key={role.value}
                  type="button"
                  onClick={() => setSelectedRole(role.value)}
                  className={`flex-1 py-1 text-sm border rounded-lg transition
                ${
                  selectedRole === role.value
                    ? "bg-blue-800 text-white border-blue-800"
                    : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-blue-200"
                }
              `}
                >
                  {role.label}
                </button>
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white rounded-lg py-2 font-semibold hover:bg-blue-900 transition"
            >
              Entrar
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
