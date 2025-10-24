import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6 text-balance">
            Política de Privacidad
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Última actualización:{" "}
            {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="space-y-8">
            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Información que Recopilamos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En Elite Auto Detailing, recopilamos información personal que usted nos proporciona directamente cuando:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                <li>Solicita información sobre nuestros servicios</li>
                <li>Reserva una cita o servicio</li>
                <li>Se comunica con nosotros a través de nuestro formulario de contacto</li>
                <li>Se suscribe a nuestro boletín informativo</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                La información que podemos recopilar incluye: nombre, dirección de correo electrónico, número de
                teléfono, y cualquier otra información que decida proporcionarnos.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Uso de la Información</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos la información recopilada para los siguientes propósitos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                <li>Proporcionar y mantener nuestros servicios</li>
                <li>Procesar sus reservas y solicitudes</li>
                <li>Comunicarnos con usted sobre nuestros servicios</li>
                <li>Enviarle información promocional (con su consentimiento)</li>
                <li>Mejorar nuestros servicios y experiencia del cliente</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Protección de Datos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información
                personal contra el acceso no autorizado, la alteración, divulgación o destrucción. Sin embargo, ningún
                método de transmisión por Internet o almacenamiento electrónico es 100% seguro.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Compartir Información</h2>
              <p className="text-muted-foreground leading-relaxed">
                No vendemos, intercambiamos ni transferimos su información personal a terceros sin su consentimiento,
                excepto cuando sea necesario para proporcionar nuestros servicios o cuando lo requiera la ley. Podemos
                compartir información con proveedores de servicios de confianza que nos ayudan a operar nuestro negocio,
                siempre que acepten mantener esta información confidencial.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Sus Derechos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                De acuerdo con el RGPD y la legislación española de protección de datos, usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar datos inexactos o incompletos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Solicitar la limitación del procesamiento</li>
                <li>Portabilidad de datos</li>
                <li>Retirar el consentimiento en cualquier momento</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Para ejercer estos derechos, puede contactarnos en info@eliteauto.es
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Retención de Datos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conservaremos su información personal solo durante el tiempo necesario para cumplir con los propósitos
                descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Cookies y Tecnologías Similares</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web. Para más
                información, consulte nuestra Política de Cookies.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Cambios a esta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos cualquier cambio
                publicando la nueva política en esta página y actualizando la fecha de "última actualización".
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos:
              </p>
              <ul className="space-y-2 text-muted-foreground leading-relaxed ml-4">
                <li>Por correo electrónico: info@eliteautoes.com</li>
                <li>Por teléfono: +34 785 245 145</li>
                <li>Por correo postal: Madrid, España</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
