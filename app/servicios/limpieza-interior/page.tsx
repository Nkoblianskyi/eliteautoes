import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Check, Clock, Shield } from "lucide-react"

export default function LimpiezaInteriorPage() {
  const features = [
    "Aspirado profundo de alfombras y tapicería",
    "Limpieza de asientos de cuero o tela",
    "Tratamiento de plásticos y vinilo",
    "Limpieza de cristales interiores",
    "Limpieza de consola central y salpicadero",
    "Desinfección y eliminación de olores",
    "Limpieza de puertas y paneles",
    "Acondicionamiento de superficies",
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Ambiente Saludable",
      description: "Eliminamos bacterias y alérgenos del interior",
    },
    {
      icon: Clock,
      title: "Servicio Eficiente",
      description: "Completado en aproximadamente 2-3 horas",
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
                Limpieza de Interior
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Limpieza profunda y profesional del interior de tu vehículo. Restauramos la frescura y el confort de tu
                habitáculo.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contacto">Reservar Ahora</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="/luxury-car-interior-cleaning-leather-seats.jpg"
                alt="Limpieza de Interior"
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
            ¿Qué incluye?
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

      {/* Why Choose Section */}
      <section className="py-12 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-8 text-center">
            ¿Por qué elegir nuestro servicio?
          </h2>
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Productos Especializados</h3>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos productos específicos para cada tipo de material, garantizando la mejor limpieza sin daños.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Atención al Detalle</h3>
              <p className="text-muted-foreground leading-relaxed">
                Limpiamos cada rincón, incluyendo áreas difíciles de alcanzar que normalmente se pasan por alto.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Resultados Duraderos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Aplicamos protectores que mantienen las superficies limpias por más tiempo.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6 text-balance">
            Disfruta de un interior impecable
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Reserva tu limpieza de interior y redescubre el confort de tu vehículo
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
