import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Check, Clock, Shield, Award } from "lucide-react"

export default function DetailingCompletoPage() {
  const features = [
    "Lavado exterior completo con descontaminación",
    "Pulido y corrección de pintura",
    "Aplicación de sellador cerámico",
    "Limpieza profunda de interior completo",
    "Tratamiento de cuero y plásticos",
    "Limpieza de motor (opcional)",
    "Restauración de faros",
    "Limpieza y protección de llantas",
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Protección Máxima",
      description: "Sellador cerámico que protege hasta 6 meses",
    },
    {
      icon: Clock,
      title: "Proceso Completo",
      description: "Servicio de 4-6 horas para resultados perfectos",
    },
    {
      icon: Award,
      title: "Calidad Profesional",
      description: "Técnicas y productos de nivel profesional",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6 text-balance">
                Detailing Completo
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                La restauración más completa para tu vehículo. Devolvemos el brillo original y protegemos cada
                superficie con técnicas profesionales.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contacto">Reservar Ahora</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="/professional-car-detailing-luxury-vehicle.jpg"
                alt="Detailing Completo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-8 text-center">
            Servicio Completo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-12 text-center">
            Nuestro Proceso
          </h2>
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-2 text-foreground">1. Inspección Inicial</h3>
              <p className="text-muted-foreground leading-relaxed">
                Evaluamos el estado del vehículo y planificamos el tratamiento específico necesario.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-2 text-foreground">2. Limpieza y Descontaminación</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lavado profundo y eliminación de contaminantes adheridos a la pintura.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-2 text-foreground">3. Corrección de Pintura</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pulido profesional para eliminar arañazos y restaurar el brillo original.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-2 text-foreground">4. Protección y Acabado</h3>
              <p className="text-muted-foreground leading-relaxed">
                Aplicación de sellador cerámico y tratamiento de todas las superficies.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6 text-balance">
            Transforma tu vehículo completamente
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Reserva tu detailing completo y descubre el verdadero potencial de tu vehículo
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
