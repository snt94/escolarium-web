import "@/app/globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
          <div id="auth-container" className=" bg-white shadow-xl rounded-2xl p-8">
            {children}
          </div>
  );
}
