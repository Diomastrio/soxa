import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image"; // Import the Next.js Image component

// Datos de ejemplo para el calendario
const partidos = [
  {
    id: 1,
    local: "Fútbol Club",
    visitante: "Rivales FC",
    localLogo: "/team1.png", // Example logo
    visitanteLogo: "/team2.png", // Example logo
    fecha: "15/06/2025",
    hora: "20:00",
    estadio: "Estadio Principal",
    liga: "Liga Nacional",
  },
  {
    id: 2,
    local: "Deportivo Atlético",
    visitante: "Fútbol Club",
    localLogo: "/team3.png", // Example logo
    visitanteLogo: "/team1.png", // Example logo
    fecha: "22/06/2025",
    hora: "18:30",
    estadio: "Estadio Olímpico",
    liga: "Liga Nacional",
  },
  {
    id: 3,
    local: "Fútbol Club",
    visitante: "Real Deportivo",
    localLogo: "/team1.png", // Example logo
    visitanteLogo: "/team4.png", // Example logo
    fecha: "29/06/2025",
    hora: "21:00",
    estadio: "Estadio Principal",
    liga: "Copa del Rey",
  },
  {
    id: 4,
    local: "Sporting Club",
    visitante: "Fútbol Club",
    localLogo: "/team5.png", // Example logo
    visitanteLogo: "/team1.png", // Example logo
    fecha: "06/07/2025",
    hora: "19:00",
    estadio: "Estadio Metropolitano",
    liga: "Liga Nacional",
  },
  {
    id: 5,
    local: "Fútbol Club",
    visitante: "Unión Deportiva",
    localLogo: "/team1.png", // Example logo
    visitanteLogo: "/team6.png", // Example logo
    fecha: "13/07/2025",
    hora: "20:30",
    estadio: "Estadio Principal",
    liga: "Liga Nacional",
  },
  {
    id: 6,
    local: "Athletic CF",
    visitante: "Fútbol Club",
    localLogo: "/team7.png", // Example logo
    visitanteLogo: "/team1.png", // Example logo
    fecha: "20/07/2025",
    hora: "17:00",
    estadio: "Estadio Central",
    liga: "Copa del Rey",
  },
];

export default function CalendarioPage() {
  return (
    <div className="container py-10 px-4 md:px-6">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Calendario de Partidos
          </h1>
          <p className="text-muted-foreground mt-1">
            Consulta todos los partidos programados para la temporada actual
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto">
            Descargar Calendario
          </Button>
          <Link href="/reservas" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto">Reservar Entradas</Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {partidos.map((partido) => (
          <Card key={partido.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex flex-col items-start gap-1 sm:flex-row sm:justify-between sm:items-center">
                <Badge
                  variant={
                    partido.liga === "Copa del Rey" ? "destructive" : "default"
                  }
                >
                  {partido.liga}
                </Badge>
                <p className="text-sm font-medium">{partido.fecha}</p>
              </div>
              {/* Team display section */}
              <div className="flex flex-col items-center sm:flex-row sm:justify-between mt-2 gap-1 sm:gap-2">
                {/* Local Team */}
                <div className="flex items-center gap-2">
                  {partido.localLogo && (
                    <Image
                      src={partido.localLogo}
                      alt={`${partido.local} logo`}
                      // Reduced size
                      width={32}
                      // Reduced size
                      height={32}
                      className="rounded-full"
                    />
                  )}
                  <CardTitle className="text-lg font-semibold">
                    {partido.local}
                  </CardTitle>{" "}
                  {/* Adjusted size */}
                </div>
                <span className="text-base font-semibold my-1 sm:my-0">vs</span>{" "}
                {/* Adjusted size */}
                {/* Visitor Team - sm:flex-row-reverse to keep logo on the right in horizontal layout */}
                <div className="flex items-center gap-2 text-right sm:text-left sm:flex-row-reverse">
                  <CardTitle className="text-lg font-semibold">
                    {partido.visitante}
                  </CardTitle>{" "}
                  {/* Adjusted size */}
                  {partido.visitanteLogo && (
                    <Image
                      src={partido.visitanteLogo}
                      alt={`${partido.visitante} logo`}
                      // Reduced size
                      width={32}
                      // Reduced size
                      height={32}
                      className="rounded-full"
                    />
                  )}
                </div>
              </div>
              <CardDescription className="mt-2 text-center sm:text-left">
                {" "}
                {/* Adjusted margin and text alignment */}
                {partido.hora} - {partido.estadio}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:justify-between sm:items-center">
                <p className="text-sm text-muted-foreground">
                  Jornada {partido.id}
                </p>
                <Link
                  href={`/reservas?partido=${partido.id}`}
                  className="w-full sm:w-auto"
                >
                  <Button size="sm" className="w-full sm:w-auto">
                    Reservar
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
