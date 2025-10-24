import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-semibold tracking-tight text-foreground">
              <div className="flex items-center gap-4">
                <Image src="/favicon.ico" alt="Logo" width={64} height={48} />
                Elite Auto
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Servicios premium de detailing automotriz para los más exigentes.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicios/lavado-premium"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Lavado Premium
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/detailing-completo"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Detailing Completo
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/limpieza-interior"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Limpieza de Interior
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/eliminacion-manchas"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Eliminación de Manchas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/politica-privacidad"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-cookies"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} />
                <span>+34 785 245 145</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} />
                <span>info@eliteautoes.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} />
                <span>Madrid, España</span>
              </li>
            </ul>

          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EliteAutoES.com. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
