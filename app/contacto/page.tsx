"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useState } from "react"
import { ConfirmationDialog } from "@/components/confirmation-dialog"

export default function ContactoPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    setIsDialogOpen(true)
    // Reset form
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      servicio: "",
      mensaje: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "+34 785 245 145",
      link: "tel:+34 785 245 145",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@eliteautoes.com",
      link: "mailto:info@eliteautoes.com",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Madrid, España",
      link: "#",
    },
    {
      icon: Clock,
      title: "Horario",
      content: "Lun-Sáb: 9:00 - 20:00",
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6 text-balance">
            Contáctanos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para responder tus preguntas y ayudarte a reservar el servicio perfecto para tu vehículo
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border text-center hover:border-primary/50 transition-colors"
              >
                <info.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  {info.title}
                </h3>
                {info.link !== "#" ? (
                  <a href={info.link} className="text-foreground hover:text-primary transition-colors">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-foreground">{info.content}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-4 bg-card/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">Envíanos un Mensaje</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Completa el formulario y nos pondremos en contacto contigo lo antes posible
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-foreground">
                  Nombre Completo
                </Label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="bg-background border-border text-foreground"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background border-border text-foreground"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="telefono" className="text-foreground">
                  Teléfono
                </Label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className="bg-background border-border text-foreground"
                  placeholder="+34 123 456 789"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="servicio" className="text-foreground">
                  Servicio de Interés
                </Label>
                <select
                  id="servicio"
                  name="servicio"
                  required
                  value={formData.servicio}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="lavado-premium">Lavado Premium</option>
                  <option value="detailing-completo">Detailing Completo</option>
                  <option value="limpieza-interior">Limpieza de Interior</option>
                  <option value="eliminacion-manchas">Eliminación de Manchas</option>
                  <option value="pulido-encerado">Pulido y Encerado</option>
                  <option value="proteccion-ceramica">Protección Cerámica</option>
                  <option value="restauracion-faros">Restauración de Faros</option>
                  <option value="limpieza-motor">Limpieza de Motor</option>
                  <option value="otro">Otro / Consulta General</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensaje" className="text-foreground">
                Mensaje
              </Label>
              <Textarea
                id="mensaje"
                name="mensaje"
                required
                value={formData.mensaje}
                onChange={handleChange}
                className="bg-background border-border text-foreground min-h-32"
                placeholder="Cuéntanos más sobre lo que necesitas..."
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Card className="overflow-hidden border-border">
            <div className="relative h-96 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Mapa de ubicación</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />

      <ConfirmationDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </div>
  )
}
