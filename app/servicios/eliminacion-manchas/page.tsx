import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Check, Clock, Shield } from "lucide-react"

export default function EliminacionManchasPage() {
  const features = [
    "Evaluación profesional de manchas",
    "Tratamiento especializado según tipo de mancha",
    "Eliminación de manchas de líquidos",
    "Tratamiento de manchas de grasa y aceite",
    "Eliminación de manchas orgánicas",
    "Restauración de color original",
    "Protección post-tratamiento",
    "Garantía de satisfacción",
  ]

  const stainTypes = [
    {
      title: "Manchas de Líquidos",
      description: "Café, refrescos, vino y otros líquidos derramados",
    },
    {
      title: "Manchas de Grasa",
      description: "Aceite, grasa mecánica y productos cosméticos",
    },
    {
      title: "Manchas Orgánicas",
      description: "Comida, sangre y otras manchas biológicas",
    },
    {
      title: "Manchas de Tinta",
      description: "Bolígrafos, marcadores y tintas diversas",
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Técnicas Profesionales",
      description: "Métodos especializados para cada tipo de mancha",
    },
    {
      icon: Clock,
      title: "Tratamiento Rápido",
      description: "Tiempo variable según la complejidad de la mancha",
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
                Eliminación de Manchas
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Tratamiento especializado para eliminar las manchas más difíciles y restaurar el aspecto original de tu
                vehículo.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contacto">Reservar Ahora</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="/car-stain-removal-professional-treatment.jpg"
                alt="Eliminación de Manchas"
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
            Nuestro Servicio
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

      {/* Stain Types Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-8 text-center">
            Tipos de Manchas que Tratamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {stainTypes.map((type, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{type.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{type.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 bg-card/30">
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

      {/* Process Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-12 text-center">
            Nuestro Proceso
          </h2>
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-2 text-foreground">1. Evaluación</h3>
              <p className="text-muted-foreground leading-relaxed">
                Identificamos el tipo de mancha y el material afectado para elegir el tratamiento adecuado.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-2 text-foreground">2. Tratamiento Específico</h3>
              <p className="text-muted-foreground leading-relaxed">
                Aplicamos productos y técnicas especializadas para cada tipo de mancha.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-2 text-foreground">3. Verificación</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprobamos que la mancha ha sido completamente eliminada.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-2 text-foreground">4. Protección</h3>
              <p className="text-muted-foreground leading-relaxed">
                Aplicamos protectores para prevenir futuras manchas y mantener la limpieza.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6 text-balance">
            No dejes que las manchas arruinen tu vehículo
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Contáctanos hoy y eliminaremos esas manchas difíciles de forma profesional
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
