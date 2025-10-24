import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Award, Users, Target, Heart } from "lucide-react"

export default function SobreNosotrosPage() {
  const values = [
    {
      icon: Award,
      title: "Excelencia",
      description: "Nos comprometemos a ofrecer servicios de la más alta calidad en cada detalle.",
    },
    {
      icon: Users,
      title: "Profesionalismo",
      description: "Nuestro equipo está formado por expertos certificados con años de experiencia.",
    },
    {
      icon: Target,
      title: "Precisión",
      description: "Cada vehículo recibe atención meticulosa y cuidado personalizado.",
    },
    {
      icon: Heart,
      title: "Pasión",
      description: "Amamos lo que hacemos y se refleja en cada servicio que proporcionamos.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6 text-balance">
            Sobre Nosotros
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dedicados a la excelencia en el cuidado automotriz desde hace más de una década
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 bg-card border-border">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6">Nuestra Historia</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Elite Auto Detailing nació de una pasión por los automóviles y el deseo de ofrecer servicios de
                detailing de nivel superior en España. Fundada por profesionales con más de 15 años de experiencia en la
                industria automotriz, nuestra empresa se ha convertido en sinónimo de calidad y excelencia.
              </p>
              <p>
                Comenzamos como un pequeño taller especializado en detailing de vehículos de lujo, y gracias a la
                confianza de nuestros clientes y nuestro compromiso con la perfección, hemos crecido hasta convertirnos
                en uno de los centros de detailing más respetados de la región.
              </p>
              <p>
                Hoy en día, seguimos manteniendo los mismos valores que nos inspiraron desde el principio: atención
                meticulosa al detalle, uso de productos premium, y un servicio al cliente excepcional. Cada vehículo que
                pasa por nuestras manos recibe el mismo nivel de cuidado y dedicación, sin importar su marca o modelo.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-12 text-center">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 bg-card border-border text-center">
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Nuestra Misión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Proporcionar servicios de detailing automotriz de la más alta calidad, superando las expectativas de
                nuestros clientes y tratando cada vehículo como si fuera nuestro. Nos esforzamos por ser el estándar de
                excelencia en la industria del cuidado automotriz.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Nuestra Visión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconocidos como el centro de detailing automotriz líder en España, estableciendo nuevos estándares
                de calidad y servicio en la industria. Aspiramos a expandir nuestros servicios mientras mantenemos
                nuestro compromiso inquebrantable con la excelencia.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-8 text-center">
            Nuestro Equipo
          </h2>
          <Card className="p-8 bg-card border-border">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nuestro equipo está compuesto por profesionales certificados y apasionados por el detailing automotriz.
              Cada miembro ha sido cuidadosamente seleccionado y entrenado en las técnicas más avanzadas de la
              industria.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nos mantenemos constantemente actualizados con las últimas tendencias, productos y técnicas del sector
              para garantizar que su vehículo reciba el mejor cuidado posible. La formación continua y la atención al
              detalle son pilares fundamentales de nuestro equipo.
            </p>
          </Card>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-8 text-center">
            ¿Por Qué Elegirnos?
          </h2>
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Productos Premium</h3>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos exclusivamente productos de las marcas más reconocidas y respetadas en la industria del
                detailing automotriz.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Experiencia Comprobada</h3>
              <p className="text-muted-foreground leading-relaxed">
                Más de 15 años de experiencia trabajando con todo tipo de vehículos, desde coches clásicos hasta
                superdeportivos modernos.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Atención Personalizada</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cada vehículo recibe un plan de tratamiento personalizado basado en sus necesidades específicas y el
                estado actual.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Garantía de Satisfacción</h3>
              <p className="text-muted-foreground leading-relaxed">
                Respaldamos nuestro trabajo con una garantía de satisfacción total. Si no está completamente satisfecho,
                lo corregiremos.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
