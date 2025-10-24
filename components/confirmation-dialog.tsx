"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface ConfirmationDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function ConfirmationDialog({ isOpen, onClose }: ConfirmationDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-primary" />
          </div>
          <DialogTitle className="text-center text-2xl text-foreground">¡Mensaje Enviado!</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground leading-relaxed pt-2">
            Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible,
            generalmente dentro de las próximas 24 horas.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-4">
          <Button onClick={onClose} className="bg-primary text-primary-foreground hover:bg-primary/90">
            Cerrar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
