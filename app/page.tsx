import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Sparkles, Shield, Clock, Award } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      title: "Lavado Premium",
      description: "Lavado exterior completo con productos de alta gama y acabado impecable.",
      href: "/servicios/lavado-premium",
      image: "/luxury-car-wash-exterior-black-car.jpg",
    },
    {
      title: "Detailing Completo",
      description: "Restauración completa del vehículo, exterior e interior, con técnicas profesionales.",
      href: "/servicios/detailing-completo",
      image: "/professional-car-detailing-luxury-vehicle.jpg",
    },
    {
      title: "Limpieza de Interior",
      description: "Limpieza profunda de tapicería, alfombras y superficies interiores.",
      href: "/servicios/limpieza-interior",
      image: "/luxury-car-interior-cleaning-leather-seats.jpg",
    },
    {
      title: "Eliminación de Manchas",
      description: "Tratamiento especializado para eliminar manchas difíciles y restaurar superficies.",
      href: "/servicios/eliminacion-manchas",
      image: "/car-stain-removal-professional-treatment.jpg",
    },
    {
      title: "Pulido y Encerado",
      description: "Pulido profesional y aplicación de cera premium para protección duradera.",
      href: "/servicios/pulido-encerado",
      image: "/luxury-car-polishing-and-waxing-service.jpg",
    },
    {
      title: "Protección Cerámica",
      description: "Recubrimiento cerámico de última generación para máxima protección.",
      href: "/servicios/proteccion-ceramica",
      image: "/ceramic-coating-application-on-luxury-car.jpg",
    },
    {
      title: "Restauración de Faros",
      description: "Recuperación y sellado de faros opacos para mejorar visibilidad y estética.",
      href: "/servicios/restauracion-faros",
      image: "/car-headlight-restoration-service.jpg",
    },
    {
      title: "Limpieza de Motor",
      description: "Limpieza profunda del compartimento del motor con productos especializados.",
      href: "/servicios/limpieza-motor",
      image: "/engine-bay-cleaning-detailing-service.jpg",
    },
  ]

  const features = [
    {
      icon: Sparkles,
      title: "Productos Premium",
      description: "Utilizamos solo los mejores productos del mercado",
    },
    {
      icon: Shield,
      title: "Garantía de Calidad",
      description: "Satisfacción garantizada en cada servicio",
    },
    {
      icon: Clock,
      title: "Servicio Rápido",
      description: "Respetamos tu tiempo sin comprometer la calidad",
    },
    {
      icon: Award,
      title: "Profesionales Certificados",
      description: "Equipo experto con años de experiencia",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-10" />
        <img
          src="/luxury-sports-car-in-dark-elegant-setting.jpg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground mb-6 text-balance">
            Excelencia en Cada Detalle
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Servicios premium de detailing automotriz que transforman tu vehículo en una obra de arte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contacto">Reservar Cita</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary bg-transparent"
            >
              <Link href="/servicios">Ver Servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ofrecemos una gama completa de servicios diseñados para mantener tu vehículo en perfectas condiciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="group">
                <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6 text-balance">
            ¿Listo para Transformar tu Vehículo?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Reserva tu cita hoy y experimenta el más alto nivel de cuidado automotriz
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contacto">Contactar Ahora</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
