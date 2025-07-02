import Technologies from '@/components/Technologies'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <img
        src="/perfil.jpg"
        alt="Mi foto"
        className="w-70 h-70 rounded-full mb-6 shadow-lg border-4 border-white object-cover"
      />
      <h1 className="text-4xl font-bold mb-6">Bienvenido a mi portafolio</h1>
      
      <Technologies />
    </main>
  )
}
