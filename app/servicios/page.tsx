import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles, Droplets, Trash2, Car, Disc, Shield, Lightbulb, Wrench } from "lucide-react"

export default function ServiciosPage() {
  const services = [
    {
      title: "Lavado Premium",
      description:
        "Lavado exterior completo con productos de alta gama y acabado impecable para dejar tu vehículo brillante.",
      icon: Droplets,
      href: "/servicios/lavado-premium",
      image: "/luxury-car-wash-exterior-black-car.jpg",
    },
    {
      title: "Detailing Completo",
      description: "Restauración completa del vehículo, exterior e interior, con técnicas profesionales de detailing.",
      icon: Sparkles,
      href: "/servicios/detailing-completo",
      image: "/professional-car-detailing-luxury-vehicle.jpg",
    },
    {
      title: "Limpieza de Interior",
      description: "Limpieza profunda de tapicería, alfombras y superficies interiores con productos especializados.",
      icon: Car,
      href: "/servicios/limpieza-interior",
      image: "/luxury-car-interior-cleaning-leather-seats.jpg",
    },
    {
      title: "Eliminación de Manchas",
      description: "Tratamiento especializado para eliminar manchas difíciles y restaurar superficies dañadas.",
      icon: Trash2,
      href: "/servicios/eliminacion-manchas",
      image: "/car-stain-removal-professional-treatment.jpg",
    },
    {
      title: "Pulido y Encerado",
      description: "Pulido profesional y aplicación de cera premium para protección duradera del exterior.",
      icon: Disc,
      href: "/servicios/pulido-encerado",
      image: "/luxury-car-polishing-and-waxing-service.jpg",
    },
    {
      title: "Protección Cerámica",
      description: "Recubrimiento cerámico de última generación para máxima protección y brillo duradero.",
      icon: Shield,
      href: "/servicios/proteccion-ceramica",
      image: "/ceramic-coating-application-on-luxury-car.jpg",
    },
    {
      title: "Restauración de Faros",
      description: "Recuperación y sellado de faros opacos para mejorar visibilidad y estética del vehículo.",
      icon: Lightbulb,
      href: "/servicios/restauracion-faros",
      image: "/car-headlight-restoration-service.jpg",
    },
    {
      title: "Limpieza de Motor",
      description: "Limpieza profunda del compartimento del motor con productos especializados y seguros.",
      icon: Wrench,
      href: "/servicios/limpieza-motor",
      image: "/engine-bay-cleaning-detailing-service.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6 text-balance">
            Nuestros Servicios
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ofrecemos una gama completa de servicios premium diseñados para mantener tu vehículo en perfectas
            condiciones
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href={service.href}>Ver Detalles</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6 text-balance">
            ¿No estás seguro de qué servicio necesitas?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Contáctanos y te ayudaremos a elegir el servicio perfecto para tu vehículo
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
