import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Calendar,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";

const jugadores = [
  {
    nombre: "Jugador 1",
    posicion: "Portero",
    dorsal: 3,
    imagen: "/player1.jpg", // Ensure this path is correct
  },
  {
    nombre: "Jugador 2",
    posicion: "Defensa",
    dorsal: 6,
    imagen: "/player2.jpg", // Ensure this path is correct
  },
  {
    nombre: "Jugador 3",
    posicion: "Defensa",
    dorsal: 9,
    imagen: "/player3.jpg", // Ensure this path is correct
  },
  {
    nombre: "Jugador 4",
    posicion: "Centrocampista",
    dorsal: 12,
    imagen: "/player4.png", // Ensure this path is correct
  },
  {
    nombre: "Jugador 5",
    posicion: "Centrocampista",
    dorsal: 15,
    imagen: "/player5.jpg", // Ensure this path is correct
  },
  {
    nombre: "Jugador 6",
    posicion: "Delantero",
    dorsal: 18,
    imagen: "/player6.jpg", // Ensure this path is correct
  },
  // Add more players as needed
];

const cuerpoTecnico = [
  {
    nombre: "Carlos Sánchez",
    rol: "Entrenador Principal",
    imagen: "/player7.webp", // Replace with actual image if available
  },
  {
    nombre: "Javier López",
    rol: "Asistente Técnico",
    imagen: "/player8.avif", // Replace with actual image if available
  },
  {
    nombre: "Marta Rodríguez",
    rol: "Preparadora Física",
    imagen: "/player9.avif", // Replace with actual image if available
  },
];

export default function InformacionPage() {
  return (
    <div className="container py-10 px-4 md:px-6">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Información General
        </h1>
        <p className="text-muted-foreground">
          Todo lo que necesitas saber sobre nuestro club y estadio
        </p>
      </div>

      <Tabs defaultValue="club" className="space-y-8">
        <TabsList>
          <TabsTrigger value="club">El Club</TabsTrigger>
          <TabsTrigger value="estadio">Estadio</TabsTrigger>
          <TabsTrigger value="equipo">Equipo</TabsTrigger>
          <TabsTrigger value="contacto">Contacto</TabsTrigger>
        </TabsList>

        <TabsContent value="club" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Historia del Club</h2>
              <div className="prose dark:prose-invert">
                <p>
                  Fútbol Club fue fundado en 1923 por un grupo de entusiastas
                  del fútbol con la visión de crear un equipo que representara
                  los valores de nuestra ciudad. Desde entonces, el club ha
                  crecido hasta convertirse en uno de los más importantes de la
                  región.
                </p>
                <p>
                  A lo largo de nuestra historia, hemos ganado numerosos
                  títulos, incluyendo:
                </p>
                <ul>
                  <li>5 Ligas Nacionales (1956, 1968, 1992, 2004, 2018)</li>
                  <li>
                    7 Copas del Rey (1948, 1955, 1973, 1985, 1999, 2010, 2021)
                  </li>
                  <li>2 Supercopas (2004, 2018)</li>
                  <li>1 Copa Internacional (1997)</li>
                </ul>
                <p>
                  Nuestro compromiso con el desarrollo de jóvenes talentos ha
                  sido siempre una parte fundamental de nuestra identidad, con
                  una academia que ha producido numerosos jugadores
                  internacionales.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Datos del Club</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Fundación</p>
                      <p className="text-sm text-muted-foreground">1923</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Palmarés</p>
                      <p className="text-sm text-muted-foreground">
                        15 títulos oficiales
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Ciudad</p>
                      <p className="text-sm text-muted-foreground">
                        Barcelona, España
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Socios</p>
                      <p className="text-sm text-muted-foreground">25,000+</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="aspect-video relative rounded-lg overflow-hidden border">
                <Image
                  src="/toria.jpg"
                  alt="Imagen histórica del club"
                  className="object-cover"
                  fill
                />
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Valores del Club</CardTitle>
              <CardDescription>
                Los principios que guían nuestro equipo
              </CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-bold">Excelencia</h3>
                <p className="text-sm text-muted-foreground">
                  Buscamos la excelencia en todo lo que hacemos, desde el
                  rendimiento en el campo hasta la gestión del club.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Respeto</h3>
                <p className="text-sm text-muted-foreground">
                  Promovemos el respeto hacia compañeros, rivales, aficionados y
                  todas las personas vinculadas al fútbol.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Comunidad</h3>
                <p className="text-sm text-muted-foreground">
                  Estamos comprometidos con nuestra comunidad y trabajamos para
                  tener un impacto positivo más allá del deporte.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="estadio" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Estadio Principal</h2>
              <div className="prose dark:prose-invert">
                <p>
                  El Estadio Principal, inaugurado en 1945 y renovado
                  completamente en 2015, es el hogar de Fútbol Club y uno de los
                  recintos deportivos más emblemáticos del país.
                </p>
                <p>
                  Con capacidad para 35,000 espectadores, nuestro estadio cuenta
                  con modernas instalaciones que garantizan una experiencia
                  inolvidable para los aficionados, incluyendo:
                </p>
                <ul>
                  <li>Asientos cubiertos en todas las zonas</li>
                  <li>Pantallas gigantes de última generación</li>
                  <li>Sistema de sonido envolvente</li>
                  <li>Múltiples puntos de restauración</li>
                  <li>Tienda oficial del club</li>
                  <li>Museo del club con trofeos y memorabilia histórica</li>
                  <li>Zona VIP con palcos privados</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-video relative rounded-lg overflow-hidden border">
                <Image
                  src="/est.jpg"
                  alt="Estadio Principal"
                  className="object-cover"
                  fill
                />
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Datos del Estadio</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Capacidad</p>
                    <p className="text-sm text-muted-foreground">
                      35,000 espectadores
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Inauguración</p>
                    <p className="text-sm text-muted-foreground">
                      1945 (Renovado en 2015)
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Dimensiones</p>
                    <p className="text-sm text-muted-foreground">105m x 68m</p>
                  </div>
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-sm text-muted-foreground">
                      Av. del Estadio, s/n, Barcelona
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cómo Llegar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1">
                    <p className="font-medium">Metro</p>
                    <p className="text-sm text-muted-foreground">
                      Línea 3 - Estación &quot;Estadio&quot; (5 min a pie)
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Autobús</p>
                    <p className="text-sm text-muted-foreground">
                      Líneas 45, 67 y 102 (parada frente al estadio)
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Aparcamiento</p>
                    <p className="text-sm text-muted-foreground">
                      500 plazas disponibles (reserva recomendada)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="equipo" className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Nuestro Equipo</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jugadores.map((jugador, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage
                        src={jugador.imagen}
                        alt={`Foto de ${jugador.nombre}`}
                      />
                      <AvatarFallback>
                        {jugador.nombre.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1 text-center">
                      <h3 className="font-bold text-lg">{jugador.nombre}</h3>
                      <p className="text-sm text-muted-foreground">
                        {jugador.posicion}
                      </p>
                      <div className="flex justify-center items-center space-x-1">
                        <span className="text-sm font-medium">Dorsal:</span>
                        <span className="text-sm">{jugador.dorsal}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Cuerpo Técnico</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {cuerpoTecnico.map((miembro, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center space-y-4">
                      <Avatar className="h-24 w-24">
                        <AvatarImage
                          src={miembro.imagen}
                          alt={`Foto de ${miembro.nombre}`}
                        />
                        <AvatarFallback>
                          {miembro.nombre.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-1 text-center">
                        <h3 className="font-bold text-lg">{miembro.nombre}</h3>
                        <p className="text-sm text-muted-foreground">
                          {miembro.rol}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="contacto" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
                <CardDescription>
                  Ponte en contacto con nosotros para cualquier consulta
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-sm text-muted-foreground">
                      Av. del Estadio, s/n, 08028 Barcelona, España
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-sm text-muted-foreground">
                      +34 93 123 45 67
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      info@futbolclub.es
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Web</p>
                    <p className="text-sm text-muted-foreground">
                      www.futbolclub.es
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Horarios</CardTitle>
                <CardDescription>
                  Horarios de atención al público
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <p className="font-medium">Lunes a Viernes</p>
                    <p className="text-muted-foreground">09:00 - 20:00</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-medium">Sábado</p>
                    <p className="text-muted-foreground">10:00 - 14:00</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-medium">Domingos y Festivos</p>
                    <p className="text-muted-foreground">
                      Cerrado (excepto días de partido)
                    </p>
                  </div>
                  <div className="flex justify-between pt-2 border-t mt-2">
                    <p className="font-medium">Días de Partido</p>
                    <p className="text-muted-foreground">
                      Desde 2 horas antes del inicio
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Ubicación</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Replace the div below with the iframe from your map provider */}
              <div className="aspect-video rounded-md overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0865999999997!2d2.122819815317804!3d41.37520797926525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498e5%3A0x0!2sEstadi%20Ol%C3%ADmpic%20Llu%C3%ADs%20Companys!5e0!3m2!1sen!2ses!4v1678886400000!5m2!1sen!2ses" // Replace this src with the one you copied from Google Maps
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del Estadio"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
