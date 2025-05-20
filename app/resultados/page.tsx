import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Image from "next/image"; // Import the Next.js Image component

// Datos de ejemplo para los resultados
const resultados = [
  {
    id: 1,
    local: { nombre: "Fútbol Club", goles: 3, logo: "/team1.png" },
    visitante: { nombre: "Rivales FC", goles: 1, logo: "/team2.png" },
    fecha: "01/05/2025",
    estadio: "Estadio Principal",
    liga: "Liga Nacional",
    estadisticas: {
      posesion: { local: 58, visitante: 42 },
      tiros: { local: 15, visitante: 8 },
      tirosAPuerta: { local: 7, visitante: 3 },
      corners: { local: 6, visitante: 4 },
      faltas: { local: 10, visitante: 14 },
      tarjetasAmarillas: { local: 2, visitante: 3 },
      tarjetasRojas: { local: 0, visitante: 1 },
    },
  },
  {
    id: 2,
    local: { nombre: "Deportivo Atlético", goles: 2, logo: "/team3.png" },
    visitante: { nombre: "Fútbol Club", goles: 2, logo: "/team1.png" },
    fecha: "08/05/2025",
    estadio: "Estadio Olímpico",
    liga: "Liga Nacional",
    estadisticas: {
      posesion: { local: 45, visitante: 55 },
      tiros: { local: 10, visitante: 12 },
      tirosAPuerta: { local: 5, visitante: 6 },
      corners: { local: 5, visitante: 7 },
      faltas: { local: 13, visitante: 11 },
      tarjetasAmarillas: { local: 3, visitante: 2 },
      tarjetasRojas: { local: 0, visitante: 0 },
    },
  },
  {
    id: 3,
    local: { nombre: "Fútbol Club", goles: 1, logo: "/team1.png" },
    visitante: { nombre: "Real Deportivo", goles: 0, logo: "/team4.png" },
    fecha: "15/05/2025",
    estadio: "Estadio Principal",
    liga: "Copa del Rey",
    estadisticas: {
      posesion: { local: 62, visitante: 38 },
      tiros: { local: 18, visitante: 6 },
      tirosAPuerta: { local: 8, visitante: 2 },
      corners: { local: 9, visitante: 3 },
      faltas: { local: 8, visitante: 15 },
      tarjetasAmarillas: { local: 1, visitante: 4 },
      tarjetasRojas: { local: 0, visitante: 0 },
    },
  },
  {
    id: 4,
    local: { nombre: "Sporting Club", goles: 0, logo: "/team5.png" },
    visitante: { nombre: "Fútbol Club", goles: 3, logo: "/team1.png" },
    fecha: "22/05/2025",
    estadio: "Estadio Metropolitano",
    liga: "Liga Nacional",
    estadisticas: {
      posesion: { local: 40, visitante: 60 },
      tiros: { local: 7, visitante: 16 },
      tirosAPuerta: { local: 2, visitante: 9 },
      corners: { local: 3, visitante: 8 },
      faltas: { local: 16, visitante: 9 },
      tarjetasAmarillas: { local: 4, visitante: 1 },
      tarjetasRojas: { local: 1, visitante: 0 },
    },
  },
];

export default function ResultadosPage() {
  return (
    <div className="container py-10 px-4 md:px-6">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Resultados</h1>
        <p className="text-muted-foreground">
          Consulta los resultados y estadísticas de los partidos jugados
        </p>
      </div>

      <Tabs defaultValue="todos" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="todos">Todos</TabsTrigger>
          <TabsTrigger value="liga">Liga Nacional</TabsTrigger>
          <TabsTrigger value="copa">Copa del Rey</TabsTrigger>
        </TabsList>

        <TabsContent value="todos" className="space-y-6">
          {resultados.map((resultado) => (
            <ResultadoCard key={resultado.id} resultado={resultado} />
          ))}
        </TabsContent>

        <TabsContent value="liga" className="space-y-6">
          {resultados
            .filter((r) => r.liga === "Liga Nacional")
            .map((resultado) => (
              <ResultadoCard key={resultado.id} resultado={resultado} />
            ))}
        </TabsContent>

        <TabsContent value="copa" className="space-y-6">
          {resultados
            .filter((r) => r.liga === "Copa del Rey")
            .map((resultado) => (
              <ResultadoCard key={resultado.id} resultado={resultado} />
            ))}
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Estadísticas de la Temporada
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Partidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-green-500 dark:text-green-400">
                    3
                  </p>
                  <p className="text-sm text-muted-foreground">Ganados</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-500 dark:text-yellow-400">
                    1
                  </p>
                  <p className="text-sm text-muted-foreground">Empatados</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-500 dark:text-red-400">
                    0
                  </p>
                  <p className="text-sm text-muted-foreground">Perdidos</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Goles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold">9</p>
                  <p className="text-sm text-muted-foreground">A favor</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">En contra</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-500 dark:text-green-400">
                    +6
                  </p>
                  <p className="text-sm text-muted-foreground">Diferencia</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Disciplina</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-yellow-500 dark:text-yellow-400">
                    5
                  </p>
                  <p className="text-sm text-muted-foreground">Amarillas</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-500 dark:text-red-400">
                    0
                  </p>
                  <p className="text-sm text-muted-foreground">Rojas</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ResultadoCard({ resultado }) {
  const esLocal = resultado.local.nombre === "Fútbol Club";
  const esVisitante = resultado.visitante.nombre === "Fútbol Club";
  // const equipoFutbolClub = esLocal ? resultado.local : resultado.visitante // Not strictly needed with logo in data
  // const equipoRival = esLocal ? resultado.visitante : resultado.local // Not strictly needed with logo in data
  const resultado_label = esLocal
    ? `${resultado.local.goles} - ${resultado.visitante.goles}`
    : `${resultado.visitante.goles} - ${resultado.local.goles}`;

  const victoria =
    (esLocal && resultado.local.goles > resultado.visitante.goles) ||
    (esVisitante && resultado.visitante.goles > resultado.local.goles);
  const empate = resultado.local.goles === resultado.visitante.goles;

  let resultadoColor =
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
  if (empate) {
    resultadoColor =
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
  } else if (!victoria) {
    resultadoColor =
      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
  }

  return (
    <Card>
      <CardHeader className="pb-0">
        <div className="flex justify-between items-center mb-2">
          <Badge
            variant={
              resultado.liga === "Copa del Rey" ? "destructive" : "default"
            }
          >
            {resultado.liga}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {resultado.fecha}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {resultado.local.logo && (
              <Image
                src={resultado.local.logo}
                alt={`${resultado.local.nombre} logo`}
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
            <CardTitle className="text-xl">{resultado.local.nombre}</CardTitle>
          </div>
          <span className="text-xl font-semibold px-2">vs</span>
          <div className="flex items-center gap-2">
            <CardTitle className="text-xl">
              {resultado.visitante.nombre}
            </CardTitle>
            {resultado.visitante.logo && (
              <Image
                src={resultado.visitante.logo}
                alt={`${resultado.visitante.nombre} logo`}
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
          </div>
          <Badge className={`${resultadoColor} ml-auto`}>
            {resultado_label}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          {resultado.estadio}
        </p>
      </CardHeader>
      <CardContent className="pt-4">
        <h3 className="font-semibold mb-3">Estadísticas</h3>

        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Posesión</span>
              <div className="flex gap-2">
                <span className="w-8 text-right">
                  {resultado.estadisticas.posesion.local}%
                </span>
                <span className="w-8 text-left">
                  {resultado.estadisticas.posesion.visitante}%
                </span>
              </div>
            </div>
            <Progress
              value={resultado.estadisticas.posesion.local}
              className="h-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between">
              <span>Tiros</span>
              <span>
                {resultado.estadisticas.tiros.local} -{" "}
                {resultado.estadisticas.tiros.visitante}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Tiros a puerta</span>
              <span>
                {resultado.estadisticas.tirosAPuerta.local} -{" "}
                {resultado.estadisticas.tirosAPuerta.visitante}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Córners</span>
              <span>
                {resultado.estadisticas.corners.local} -{" "}
                {resultado.estadisticas.corners.visitante}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Faltas</span>
              <span>
                {resultado.estadisticas.faltas.local} -{" "}
                {resultado.estadisticas.faltas.visitante}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Tarjetas amarillas</span>
              <span>
                {resultado.estadisticas.tarjetasAmarillas.local} -{" "}
                {resultado.estadisticas.tarjetasAmarillas.visitante}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Tarjetas rojas</span>
              <span>
                {resultado.estadisticas.tarjetasRojas.local} -{" "}
                {resultado.estadisticas.tarjetasRojas.visitante}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
