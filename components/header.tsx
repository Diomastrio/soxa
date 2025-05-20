"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
  const pathname = usePathname()

  const routes = [
    { name: "Inicio", path: "/" },
    { name: "Calendario", path: "/calendario" },
    { name: "Reservas", path: "/reservas" },
    { name: "Resultados", path: "/resultados" },
    { name: "Información", path: "/informacion" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="font-bold text-2xl mr-6 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
            FC
          </div>
          <span className="hidden sm:inline-block">Fútbol Club</span>
        </Link>

        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-6">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === route.path ? "text-primary font-semibold" : "text-muted-foreground",
                  )}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex ml-auto">
          <Button asChild className="mr-2">
            <Link href="/reservas">Reservar Entradas</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="px-2 py-6 w-full">
              <Link href="/" className="font-bold text-2xl mb-8 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  FC
                </div>
                <span>Fútbol Club</span>
              </Link>

              <nav className="flex flex-col gap-4 mt-6">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary flex items-center py-2",
                      pathname === route.path ? "text-primary font-semibold" : "text-muted-foreground",
                    )}
                  >
                    {route.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-8">
                <Button asChild className="w-full">
                  <Link href="/reservas">Reservar Entradas</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
