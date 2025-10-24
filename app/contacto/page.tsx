"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
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
    setIsDialogOpen(true)
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
      link: "tel:+34785245145",
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
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground mb-6 text-balance">
            Contáctanos
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para responder tus preguntas y ayudarte a reservar el servicio perfecto para tu vehículo
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info Side */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-8">
                  Información de Contacto
                </h2>
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                          {info.title}
                        </h3>
                        {info.link !== "#" ? (
                          <a href={info.link} className="text-lg text-foreground hover:text-primary transition-colors">
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-lg text-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="border-l-2 border-primary pl-6 space-y-4">
                <h3 className="text-xl font-light text-foreground">¿Por qué elegirnos?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Profesionales certificados con años de experiencia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Productos premium de las mejores marcas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Atención personalizada para cada vehículo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Garantía de satisfacción en todos nuestros servicios</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form Side */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-8">
                Envíanos un Mensaje
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-foreground text-sm uppercase tracking-wider">
                    Nombre Completo
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="bg-background/50 border-border text-foreground h-12 focus:border-primary transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground text-sm uppercase tracking-wider">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background/50 border-border text-foreground h-12 focus:border-primary transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono" className="text-foreground text-sm uppercase tracking-wider">
                    Teléfono
                  </Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="bg-background/50 border-border text-foreground h-12 focus:border-primary transition-colors"
                    placeholder="+34 785 245 145"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="servicio" className="text-foreground text-sm uppercase tracking-wider">
                    Servicio de Interés
                  </Label>
                  <select
                    id="servicio"
                    name="servicio"
                    required
                    value={formData.servicio}
                    onChange={handleChange}
                    className="flex h-12 w-full rounded-md border border-border bg-background/50 px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors"
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

                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="text-foreground text-sm uppercase tracking-wider">
                    Mensaje
                  </Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="bg-background/50 border-border text-foreground min-h-32 focus:border-primary transition-colors"
                    placeholder="Cuéntanos más sobre lo que necesitas..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base uppercase tracking-wider"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>


      <Footer />

      <ConfirmationDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </div>
  )
}
