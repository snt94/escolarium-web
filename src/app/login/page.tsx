export default function LoginPage() {
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
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus: transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Senha
              </label>
              <input
                type="password"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus: transition"
              />
            </div>

            <div className="flex gap-3 mt-2">
              <button
                type="button"
                className="flex-1 py-1 text-sm border border-gray-300 rounded-lg hover:bg-blue-200 transition"
              >
                Estudante
              </button>
              <button
                type="button"
                className="flex-1 py-1 text-sm border border-gray-300 rounded-lg hover:bg-blue-200 transition"
              >
                Professor
              </button>
              <button
                type="button"
                className="flex-1 py-1 text-sm border border-gray-300 rounded-lg hover:bg-blue-200 transition"
              >
                Coordenador
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white rounded-lg py-2 font-semibold hover:bg-blue-800 transition"
            >
              Entrar
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
