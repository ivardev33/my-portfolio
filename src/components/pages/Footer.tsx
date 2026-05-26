export default function Footer() {
  return (
    <footer className="w-full py-6 border-t border-gray-800 text-center text-sm text-gray-400 bg-gray-950">
      <p>
        Diseñado con dedicación por <span className="font-semibold text-gray-200">Iván Cano</span> · ©{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}
