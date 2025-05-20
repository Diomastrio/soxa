import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-100 to-white dark:from-blue-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Bienvenidos a Fútbol Club
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Toda la información sobre nuestros partidos, resultados y cómo
                  reservar tus asientos para los próximos encuentros.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/calendario">
                  <Button size="lg">Ver Calendario</Button>
                </Link>
                <Link href="/reservas">
                  <Button size="lg" variant="outline">
                    Reservar Asientos
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/est2.jpg"
                width={550}
                height={550}
                alt="Imagen de estadio de fútbol"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Próximo Partido
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                No te pierdas nuestro próximo encuentro. ¡Adquiere tus entradas
                ahora!
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">
                  Fútbol Club vs Rivales FC
                </h3>
                <p className="text-muted-foreground">
                  <span className="font-semibold">Fecha:</span> 15 de Junio,
                  2025
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold">Hora:</span> 20:00
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold">Estadio:</span> Estadio
                  Principal
                </p>
              </div>
              <div>
                <Link href="/reservas">
                  <Button>Reservar Asientos</Button>
                </Link>
              </div>
            </div>
            <Image
              src="/vs.jpg"
              width={500}
              height={350}
              alt="Imagen del próximo partido"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Nuestros Servicios
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Todo lo que necesitas saber sobre nuestro club y partidos
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Calendario de Partidos</h3>
              <p className="text-center text-muted-foreground">
                Consulta las fechas y horarios de todos nuestros próximos
                encuentros.
              </p>
              <Link href="/calendario">
                <Button variant="outline">Ver Calendario</Button>
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10"
                >
                  <path d="M5.52 19h-2.52a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h2.52"></path>
                  <path d="M21 18h0.5a.5 .5 0 0 0 .5-.5v-15a.5 .5 0 0 0-.5-.5h-0.5"></path>
                  <path d="M15 16v1a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-1"></path>
                  <path d="M8 7h8v7a4 4 0 0 1-8 0v-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Reserva de Asientos</h3>
              <p className="text-center text-muted-foreground">
                Selecciona y reserva tus asientos para cualquier partido.
              </p>
              <Link href="/reservas">
                <Button variant="outline">Reservar Ahora</Button>
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10"
                >
                  <path d="M12 2v6.5l3-3"></path>
                  <path d="M12 2v6.5l-3-3"></path>
                  <path d="M3.45 11c-1.11.013-2.07.787-2.31 1.86c-.38 1.72.65 3.14 2.31 3.14h1.55"></path>
                  <path d="M5 16c0 2.21 2.2 4 5 4s5-1.79 5-4a7.95 7.95 0 0 0-2-5h-6a7.95 7.95 0 0 0-2 5z"></path>
                  <path d="M20.55 11c1.11.013 2.07.787 2.31 1.86c.38 1.72-.65 3.14-2.31 3.14h-1.55"></path>
                  <path d="m9 14 2 3l2-3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Resultados</h3>
              <p className="text-center text-muted-foreground">
                Consulta los resultados y estadísticas de los partidos jugados.
              </p>
              <Link href="/resultados">
                <Button variant="outline">Ver Resultados</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
