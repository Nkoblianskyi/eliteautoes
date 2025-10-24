import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Check, Clock, Shield, Droplets } from "lucide-react"

export default function ProteccionCeramicaPage() {
  const features = [
    "Preparación completa de la superficie",
    "Corrección de pintura profesional",
    "Aplicación de recubrimiento cerámico de 9H",
    "Protección contra rayones y químicos",
    "Efecto hidrofóbico extremo",
    "Garantía de hasta 5 años",
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Máxima Protección",
      description: "Dureza 9H que protege contra rayones y daños químicos",
    },
    {
      icon: Droplets,
      title: "Efecto Hidrofóbico",
      description: "El agua y la suciedad se deslizan sin esfuerzo",
    },
    {
      icon: Clock,
      title: "Durabilidad Extrema",
      description: "Protección que dura hasta 5 años con mantenimiento",
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
                Protección Cerámica
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                El recubrimiento cerámico de última generación proporciona la máxima protección para tu vehículo,
                creando una barrera permanente contra rayones, químicos y contaminantes ambientales.
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
                src="/ceramic-coating-application-on-luxury-car.jpg"
                alt="Protección Cerámica"
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
              <h2 className="text-3xl font-light tracking-tight text-foreground mb-6">Beneficios a Largo Plazo</h2>
              <div className="space-y-6">
                <div className="pb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Ahorro en Mantenimiento</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Reduce significativamente la frecuencia de lavados y detalles
                  </p>
                </div>
                <div className="pb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Valor de Reventa</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mantiene la pintura en condiciones óptimas, aumentando el valor del vehículo
                  </p>
                </div>
                <div className="pb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Protección Total</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Defensa completa contra elementos ambientales y químicos
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
