export default function LoginPage() {
  return (
    <>
      <main className="flex justify-center items-center w-screen h-screen bg-gray-400">
        <div
          id="card-container"
          className="flex flex-col w-90 h-120 shadow-xl/30 shadow-gray-800 bg-gray-200 rounded-2xl m-8 p-4"
        >
          <h1 className="mt-2 text-4xl flex justify-center">Escolarium</h1>
          <p className="text-xs flex justify-center font-">Acesso ao portal</p>
          <form className="flex flex-col flex-wrap justify-center">
            <label>Email</label>
            <input className="border-2 border-blue-600" type="email"></input>
            <label>Senha</label>
            <input className="border-2 border-blue-600" type="password"></input>
            <ol className="flex flex-row justify-evenly mb-50">
              <li>
                <button>Estudante</button>
              </li>
              <li>
                <button>Professor</button>
              </li>
              <li>
                <button>Coordenador</button>
              </li>
            </ol>
            <button className="flex flex-row justify-center text-blue-200 bg-blue-900 rounded-xs p-2">
              Entrar
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
