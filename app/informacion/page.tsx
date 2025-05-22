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

const desarrolladores = [
  {
    nombre: "Desarrollador 1",
    rol: "Frontend Developer",
    imagen: "/player1.jpg", // Ensure this path is correct
  },
  {
    nombre: "Desarrollador 2",
    rol: "Backend Developer",
    imagen: "/player2.jpg", // Ensure this path is correct
  },
  {
    nombre: "Desarrollador 3",
    rol: "UI/UX Designer",
    imagen: "/player3.jpg", // Ensure this path is correct
  },
  {
    nombre: "Desarrollador 4",
    rol: "QA Engineer",
    imagen: "/player4.png", // Ensure this path is correct
  },
  {
    nombre: "Desarrollador 5",
    rol: "DevOps Engineer",
    imagen: "/player5.jpg", // Ensure this path is correct
  },
  {
    nombre: "Desarrollador 6",
    rol: "Product Manager",
    imagen: "/player6.jpg", // Ensure this path is correct
  },
];

const lideresTecnicos = [
  {
    nombre: "Carlos Sánchez",
    rol: "CTO",
    imagen: "/player7.webp", // Replace with actual image if available
  },
  {
    nombre: "Javier López",
    rol: "Lead Developer",
    imagen: "/player8.avif", // Replace with actual image if available
  },
  {
    nombre: "Marta Rodríguez",
    rol: "Project Manager",
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
          Todo lo que necesitas saber sobre nuestra aplicación
        </p>
      </div>

      <Tabs defaultValue="app" className="space-y-8">
        <TabsList className="w-full sm:w-auto flex flex-wrap">
          <TabsTrigger value="app">La Aplicación</TabsTrigger>
          <TabsTrigger value="caracteristicas">Características</TabsTrigger>
          <TabsTrigger value="equipo">Equipo de Desarrollo</TabsTrigger>
          <TabsTrigger value="contacto">Contacto</TabsTrigger>
        </TabsList>

        <TabsContent value="app" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Sobre la Aplicación</h2>
              <div className="prose dark:prose-invert">
                <p>
                  SOXA fue desarrollada en 2023 como una solución integral para
                  gestión deportiva, enfocada en mejorar la experiencia de
                  aficionados, jugadores y administradores de clubes deportivos.
                </p>
                <p>
                  Desde su lanzamiento, nuestra plataforma ha evolucionado para
                  ofrecer:
                </p>
                <ul>
                  <li>Gestión completa de calendarios de partidos y eventos</li>
                  <li>Sistema de reserva de entradas y abonos</li>
                  <li>Perfiles detallados de equipos y jugadores</li>
                  <li>Estadísticas en tiempo real</li>
                  <li>Integración con redes sociales</li>
                </ul>
                <p>
                  Nuestro compromiso con la innovación tecnológica y la
                  experiencia de usuario nos ha permitido crear una plataforma
                  intuitiva y potente que se adapta a las necesidades de clubes
                  de todos los tamaños.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Datos de la Aplicación</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Lanzamiento</p>
                      <p className="text-sm text-muted-foreground">2023</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Usuarios Activos</p>
                      <p className="text-sm text-muted-foreground">
                        +100,000 usuarios
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Reconocimientos</p>
                      <p className="text-sm text-muted-foreground">
                        Premio a la Mejor App Deportiva 2024
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Disponibilidad</p>
                      <p className="text-sm text-muted-foreground">
                        Web, iOS y Android
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="aspect-video relative rounded-lg overflow-hidden border">
                <Image
                  src="/App.png"
                  alt="Captura de pantalla de la aplicación"
                  className="fit-cover"
                  fill
                />
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Valores de la Aplicación</CardTitle>
              <CardDescription>
                Los principios que guían nuestro desarrollo
              </CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-bold">Innovación</h3>
                <p className="text-sm text-muted-foreground">
                  Buscamos constantemente nuevas formas de mejorar la
                  experiencia del usuario y ofrecer soluciones tecnológicas
                  avanzadas.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Accesibilidad</h3>
                <p className="text-sm text-muted-foreground">
                  Nos esforzamos por hacer que nuestra plataforma sea accesible
                  para todos, independientemente de sus habilidades técnicas o
                  necesidades específicas.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">Comunidad</h3>
                <p className="text-sm text-muted-foreground">
                  Construimos herramientas que fortalecen las comunidades
                  deportivas y fomentan la participación activa de aficionados y
                  deportistas.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="caracteristicas" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Características Principales
              </h2>
              <div className="prose dark:prose-invert">
                <p>
                  SOXA ofrece una suite completa de herramientas para la gestión
                  deportiva, diseñada pensando en las necesidades de clubes,
                  aficionados y jugadores.
                </p>
                <p>Nuestras características destacadas incluyen:</p>
                <ul>
                  <li>
                    Calendario interactivo con sincronización multiplatforma
                  </li>
                  <li>Sistema de reservas con pago integrado</li>
                  <li>Perfiles detallados para jugadores y equipos</li>
                  <li>Estadísticas avanzadas y visualización de datos</li>
                  <li>Notificaciones personalizables</li>
                  <li>Panel de administración para gestores de clubes</li>
                  <li>Integración con redes sociales</li>
                  <li>Modo offline con sincronización posterior</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-video relative rounded-lg overflow-hidden border">
                <Image
                  src="/car.png"
                  alt="Interfaz de la aplicación"
                  className="fit-cover"
                  fill
                />
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Especificaciones Técnicas</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">Frontend</p>
                    <p className="text-sm text-muted-foreground">
                      React, Next.js, Tailwind CSS
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Backend</p>
                    <p className="text-sm text-muted-foreground">
                      Node.js, Express, MongoDB
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Mobile</p>
                    <p className="text-sm text-muted-foreground">
                      React Native, Flutter
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Hosting</p>
                    <p className="text-sm text-muted-foreground">AWS, Vercel</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Requisitos del Sistema</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1">
                    <p className="font-medium">Web</p>
                    <p className="text-sm text-muted-foreground">
                      Navegador moderno (Chrome, Firefox, Safari, Edge)
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">iOS</p>
                    <p className="text-sm text-muted-foreground">
                      iOS 13.0 o superior
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Android</p>
                    <p className="text-sm text-muted-foreground">
                      Android 7.0 o superior
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="equipo" className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">
            Nuestro Equipo de Desarrollo
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {desarrolladores.map((desarrollador, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage
                        src={desarrollador.imagen}
                        alt={`Foto de ${desarrollador.nombre}`}
                      />
                      <AvatarFallback>
                        {desarrollador.nombre.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1 text-center">
                      <h3 className="font-bold text-lg">
                        {desarrollador.nombre}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {desarrollador.rol}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Liderazgo Técnico</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {lideresTecnicos.map((miembro, index) => (
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
                      Calle Tecnología 123, 28001 Madrid, España
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-sm text-muted-foreground">
                      +34 91 123 45 67
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      info@soxaapp.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Web</p>
                    <p className="text-sm text-muted-foreground">
                      www.soxaapp.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Soporte Técnico</CardTitle>
                <CardDescription>
                  Horarios de atención al usuario
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
                      Solo soporte por email
                    </p>
                  </div>
                  <div className="flex justify-between pt-2 border-t mt-2">
                    <p className="font-medium">Tiempo de respuesta</p>
                    <p className="text-muted-foreground">
                      Máximo 24 horas laborables
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
              <div className="aspect-video rounded-md overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0865999999997!2d2.122819815317804!3d41.37520797926525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498e5%3A0x0!2sEstadi%20Ol%C3%ADmpic%20Llu%C3%ADs%20Companys!5e0!3m2!1sen!2ses!4v1678886400000!5m2!1sen!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Nuestras Oficinas"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
