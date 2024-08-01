import RegisterForm from "@/components/authentication/RegisterForm";


export default function RegistrationPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <h2 className="mb-5">Welcome to NextJS with NextAuth V5</h2>
      <RegisterForm />
    </main>
  )
}
