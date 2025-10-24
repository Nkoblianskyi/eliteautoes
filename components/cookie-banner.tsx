"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom">
      <Card className="max-w-4xl mx-auto p-6 bg-card border-border shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2 text-foreground">Uso de Cookies</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar navegando, aceptas
              nuestra{" "}
              <Link href="/politica-cookies" className="text-primary hover:underline">
                Política de Cookies
              </Link>{" "}
              y{" "}
              <Link href="/politica-privacidad" className="text-primary hover:underline">
                Política de Privacidad
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Button
              onClick={rejectCookies}
              variant="outline"
              className="flex-1 md:flex-none border-border text-foreground hover:bg-secondary bg-transparent"
            >
              Rechazar
            </Button>
            <Button
              onClick={acceptCookies}
              className="flex-1 md:flex-none bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Aceptar
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
