// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full py-6 mt-16 border-t text-center text-sm text-gray-500">
      <p>
        Diseñado con 💻 y ☕ por{' '}
        <span className="font-semibold text-gray-700">Iván</span> · © {new Date().getFullYear()}
      </p>
    </footer>
  )
}
