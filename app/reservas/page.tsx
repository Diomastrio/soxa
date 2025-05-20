"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, Info } from "lucide-react"

// Datos de ejemplo
const partidos = [
  { id: "1", nombre: "Fútbol Club vs Rivales FC", fecha: "15/06/2025", hora: "20:00" },
  { id: "2", nombre: "Deportivo Atlético vs Fútbol Club", fecha: "22/06/2025", hora: "18:30" },
  { id: "3", nombre: "Fútbol Club vs Real Deportivo", fecha: "29/06/2025", hora: "21:00" },
  { id: "4", nombre: "Sporting Club vs Fútbol Club", fecha: "06/07/2025", hora: "19:00" },
  { id: "5", nombre: "Fútbol Club vs Unión Deportiva", fecha: "13/07/2025", hora: "20:30" },
  { id: "6", nombre: "Athletic CF vs Fútbol Club", fecha: "20/07/2025", hora: "17:00" },
]

const zonas = [
  { id: "A", nombre: "Tribuna Principal", precio: 50 },
  { id: "B", nombre: "Tribuna Lateral", precio: 35 },
  { id: "C", nombre: "Fondo Norte", precio: 25 },
  { id: "D", nombre: "Fondo Sur", precio: 25 },
  { id: "VIP", nombre: "Zona VIP", precio: 120 },
]

export default function ReservasPage() {
  const searchParams = useSearchParams()
  const partidoIdFromUrl = searchParams.get("partido")

  const [partidoSeleccionado, setPartidoSeleccionado] = useState(partidoIdFromUrl || "")
  const [zonaSeleccionada, setZonaSeleccionada] = useState("")
  const [cantidadEntradas, setCantidadEntradas] = useState("1")
  const [reservaCompletada, setReservaCompletada] = useState(false)

  const handleReservar = () => {
    // En una aplicación real, aquí se enviaría la solicitud al servidor
    // Como es un sitio estático, simplemente simulamos el éxito
    setReservaCompletada(true)
  }

  const partidoActual = partidos.find((p) => p.id === partidoSeleccionado)
  const zonaActual = zonas.find((z) => z.id === zonaSeleccionada)
  const precioTotal = zonaActual ? zonaActual.precio * Number.parseInt(cantidadEntradas) : 0

  return (
    <div className="container py-10 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Reserva de Asientos</h1>

        {reservaCompletada ? (
          <Alert className="bg-green-50 dark:bg-green-950 mb-6">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-800 dark:text-green-300">¡Reserva Completada!</AlertTitle>
            <AlertDescription className="text-green-700 dark:text-green-400">
              Tu reserva ha sido confirmada. Recibirás un correo electrónico con los detalles de tu compra.
            </AlertDescription>
            <div className="mt-4">
              <Button onClick={() => setReservaCompletada(false)} variant="outline" className="mr-2">
                Hacer otra reserva
              </Button>
              <Button>Descargar entradas</Button>
            </div>
          </Alert>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Selecciona tu partido y asientos</CardTitle>
              <CardDescription>Completa el formulario para reservar tus entradas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="partido" className="text-sm font-medium">
                  Partido
                </label>
                <Select value={partidoSeleccionado} onValueChange={setPartidoSeleccionado}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un partido" />
                  </SelectTrigger>
                  <SelectContent>
                    {partidos.map((partido) => (
                      <SelectItem key={partido.id} value={partido.id}>
                        {partido.nombre} - {partido.fecha}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {partidoSeleccionado && (
                <>
                  <div className="space-y-2">
                    <label htmlFor="zona" className="text-sm font-medium">
                      Zona del Estadio
                    </label>
                    <Select value={zonaSeleccionada} onValueChange={setZonaSeleccionada}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una zona" />
                      </SelectTrigger>
                      <SelectContent>
                        {zonas.map((zona) => (
                          <SelectItem key={zona.id} value={zona.id}>
                            {zona.nombre} - {zona.precio}€
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="cantidad" className="text-sm font-medium">
                      Cantidad de Entradas
                    </label>
                    <Select value={cantidadEntradas} onValueChange={setCantidadEntradas}>
                      <SelectTrigger>
                        <SelectValue placeholder="Cantidad" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "entrada" : "entradas"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {zonaSeleccionada && (
                    <div className="rounded-lg bg-muted p-4">
                      <div className="flex justify-between mb-2">
                        <span>Partido:</span>
                        <span className="font-medium">{partidoActual?.nombre}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Fecha y hora:</span>
                        <span className="font-medium">
                          {partidoActual?.fecha} a las {partidoActual?.hora}
                        </span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Zona:</span>
                        <span className="font-medium">{zonaActual?.nombre}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Cantidad:</span>
                        <span className="font-medium">{cantidadEntradas}</span>
                      </div>
                      <div className="flex justify-between mt-4 pt-2 border-t">
                        <span className="font-bold">Total:</span>
                        <span className="font-bold">{precioTotal}€</span>
                      </div>
                    </div>
                  )}
                </>
              )}

              <Alert variant="outline" className="mt-6">
                <Info className="h-4 w-4" />
                <AlertTitle>Información importante</AlertTitle>
                <AlertDescription>
                  Las entradas no son reembolsables. En caso de cancelación del partido, se reprogramará para otra
                  fecha.
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter>
              <Button onClick={handleReservar} disabled={!partidoSeleccionado || !zonaSeleccionada} className="w-full">
                Completar Reserva
              </Button>
            </CardFooter>
          </Card>
        )}

        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-bold">Mapa del Estadio</h2>
          <div className="bg-muted aspect-video rounded-lg flex items-center justify-center border">
            <div className="relative w-4/5 h-4/5">
              {/* Campo de fútbol simplificado */}
              <div className="absolute inset-0 border-2 border-primary/70 rounded-md"></div>

              {/* Zonas del estadio */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-blue-100 dark:bg-blue-950 text-center flex items-center justify-center text-xs font-medium rounded-t-md">
                ZONA A - Tribuna Principal
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-green-100 dark:bg-green-950 text-center flex items-center justify-center text-xs font-medium rounded-b-md">
                ZONA B - Tribuna Lateral
              </div>
              <div className="absolute top-10 bottom-10 left-0 w-8 bg-red-100 dark:bg-red-950 text-center flex items-center justify-center text-xs font-medium writing-mode-vertical">
                ZONA C
              </div>
              <div className="absolute top-10 bottom-10 right-0 w-8 bg-yellow-100 dark:bg-yellow-950 text-center flex items-center justify-center text-xs font-medium writing-mode-vertical">
                ZONA D
              </div>

              {/* Campo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/5 h-3/5 border border-white dark:border-gray-700 bg-green-600/20 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
