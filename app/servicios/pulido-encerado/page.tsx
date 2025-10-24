import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Check, Clock, Shield, Sparkles } from "lucide-react"

export default function PulidoEnceradoPage() {
  const features = [
    "Pulido profesional en múltiples etapas",
    "Eliminación de arañazos superficiales",
    "Aplicación de cera premium de alta durabilidad",
    "Protección contra rayos UV y contaminantes",
    "Acabado espejo de alto brillo",
    "Sellado de pintura para protección duradera",
  ]

  const benefits = [
    {
      icon: Sparkles,
      title: "Brillo Excepcional",
      description: "Acabado espejo que realza el color original de tu vehículo",
    },
    {
      icon: Shield,
      title: "Protección Duradera",
      description: "Capa protectora que resiste hasta 6 meses",
    },
    {
      icon: Clock,
      title: "Proceso Profesional",
      description: "4-6 horas de trabajo detallado por expertos",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6 text-balance">
                Pulido y Encerado
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nuestro servicio de pulido y encerado profesional restaura el brillo original de tu vehículo y
                proporciona una capa protectora duradera contra los elementos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contacto">Reservar Ahora</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-secondary bg-transparent"
                >
                  <Link href="/servicios">Ver Todos los Servicios</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="/luxury-car-polishing-and-waxing-service.jpg"
                alt="Pulido y Encerado"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-card border-border">
              <h2 className="text-3xl font-light tracking-tight text-foreground mb-6">Qué Incluye</h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-3xl font-light tracking-tight text-foreground mb-6">¿Por qué elegirnos?</h2>
              <div className="space-y-6">
                <div className="pb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Productos Premium</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Utilizamos solo las mejores ceras y compuestos de pulido del mercado
                  </p>
                </div>
                <div className="pb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Técnicos Certificados</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nuestro equipo está altamente capacitado en técnicas de pulido profesional
                  </p>
                </div>
                <div className="pb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Resultados Garantizados</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Garantizamos tu satisfacción con cada servicio
                  </p>
                </div>
              </div>
              <Button asChild className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contacto">Solicitar Información</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
