import LoginForm from "@/components/authentication/LoginForm";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h2 className="mb-5">Welcome to NextJS with NextAuth V5</h2>
      <LoginForm/>
    </main>
  );
}
