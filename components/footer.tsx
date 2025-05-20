import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8 px-4 md:px-6">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Fútbol Club. Todos los derechos reservados.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/legal/privacidad" className="text-sm text-muted-foreground hover:underline underline-offset-4">
            Política de Privacidad
          </Link>
          <Link href="/legal/terminos" className="text-sm text-muted-foreground hover:underline underline-offset-4">
            Términos y Condiciones
          </Link>
          <Link href="/contacto" className="text-sm text-muted-foreground hover:underline underline-offset-4">
            Contacto
          </Link>
        </nav>
      </div>
    </footer>
  )
}
