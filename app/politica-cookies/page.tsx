import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6 text-balance">
            Política de Cookies
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Última actualización:{" "}
            {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="space-y-8">
            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">¿Qué son las Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio
                web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, así como
                para proporcionar información a los propietarios del sitio.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">¿Cómo Utilizamos las Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Elite Auto Detailing utiliza cookies para varios propósitos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                <li>Recordar sus preferencias y configuraciones</li>
                <li>Mejorar la funcionalidad del sitio web</li>
                <li>Analizar cómo se utiliza nuestro sitio web</li>
                <li>Personalizar su experiencia</li>
                <li>Proporcionar contenido relevante</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Tipos de Cookies que Utilizamos</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Cookies Estrictamente Necesarias</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Estas cookies son esenciales para que pueda navegar por el sitio web y utilizar sus funciones. Sin
                    estas cookies, los servicios que ha solicitado no pueden proporcionarse.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Cookies de Rendimiento</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Estas cookies recopilan información sobre cómo los visitantes utilizan un sitio web, por ejemplo,
                    qué páginas visitan con más frecuencia. Estos datos nos ayudan a optimizar nuestro sitio web y
                    facilitar la navegación.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Cookies de Funcionalidad</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Estas cookies permiten que el sitio web recuerde las elecciones que hace (como su nombre de usuario,
                    idioma o región) y proporcionan características mejoradas y más personales.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Cookies de Publicidad</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Estas cookies se utilizan para entregar anuncios más relevantes para usted y sus intereses. También
                    se utilizan para limitar el número de veces que ve un anuncio y ayudar a medir la efectividad de las
                    campañas publicitarias.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Cookies de Terceros</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Además de nuestras propias cookies, también podemos utilizar cookies de terceros para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                <li>Análisis web (Google Analytics)</li>
                <li>Redes sociales (Facebook, Instagram)</li>
                <li>Servicios de mapas (Google Maps)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Estas cookies están sujetas a las políticas de privacidad de los respectivos terceros.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Control de Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Usted tiene el derecho de decidir si acepta o rechaza las cookies. Puede ejercer sus preferencias de
                cookies mediante:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                <li>El banner de cookies que aparece cuando visita nuestro sitio por primera vez</li>
                <li>La configuración de su navegador web</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Tenga en cuenta que si rechaza o elimina las cookies, es posible que no pueda utilizar todas las
                funciones de nuestro sitio web.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Cómo Gestionar las Cookies en su Navegador
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La mayoría de los navegadores web permiten cierto control de las cookies a través de la configuración
                del navegador. Para obtener más información sobre cómo gestionar las cookies, visite:
              </p>
              <ul className="space-y-2 text-muted-foreground leading-relaxed ml-4">
                <li>
                  <span className="font-semibold text-foreground">Google Chrome:</span> Configuración {">"} Privacidad y
                  seguridad {">"} Cookies
                </li>
                <li>
                  <span className="font-semibold text-foreground">Mozilla Firefox:</span> Opciones {">"} Privacidad y
                  seguridad
                </li>
                <li>
                  <span className="font-semibold text-foreground">Safari:</span> Preferencias {">"} Privacidad
                </li>
                <li>
                  <span className="font-semibold text-foreground">Microsoft Edge:</span> Configuración {">"} Cookies y
                  permisos del sitio
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Duración de las Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Las cookies pueden ser de sesión o persistentes:
              </p>
              <ul className="space-y-2 text-muted-foreground leading-relaxed ml-4">
                <li>
                  <span className="font-semibold text-foreground">Cookies de sesión:</span> Se eliminan automáticamente
                  cuando cierra su navegador
                </li>
                <li>
                  <span className="font-semibold text-foreground">Cookies persistentes:</span> Permanecen en su
                  dispositivo durante un período específico o hasta que las elimine manualmente
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Actualizaciones de esta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos actualizar esta Política de Cookies periódicamente para reflejar cambios en las cookies que
                utilizamos o por otras razones operativas, legales o reglamentarias. Le recomendamos que revise esta
                página regularmente para mantenerse informado sobre nuestro uso de cookies.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Contacto</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Si tiene preguntas sobre nuestra Política de Cookies, puede contactarnos:
              </p>
              <ul className="space-y-2 text-muted-foreground leading-relaxed ml-4">
                <li>Por correo electrónico: info@eliteautoes.com</li>
                <li>Por teléfono: +34 123 456 789</li>
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
