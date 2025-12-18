import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent to-background py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider">
              contato
            </Badge>

            <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Vamos conversar sobre o seu <span className="text-primary">projeto?</span>
            </h1>

            <p className="text-pretty text-lg text-muted-foreground md:text-xl">
              Estamos prontos para transformar suas ideias em realidade digital.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="mb-6 text-2xl font-bold">Envie sua mensagem</h2>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nome
                  </label>
                  <Input id="name" placeholder="Seu nome completo" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-mail
                  </label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Telefone
                  </label>
                  <Input id="phone" placeholder="(11) 99999-9999" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <Textarea id="message" placeholder="Conte-nos sobre seu projeto..." rows={5} />
                </div>

                <Button type="submit" className="w-full">
                  Enviar mensagem
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-bold">Informações de contato</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">E-mail</p>
                      <p className="text-sm text-muted-foreground">contato@tec4u.com.br</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Telefone</p>
                      <p className="text-sm text-muted-foreground">(11) 97312-7075</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Endereço</p>
                      <p className="text-sm text-muted-foreground">
                        R. Gomes de Carvalho, 1629
                        <br />
                        Vila Olímpia, São Paulo - SP
                        <br />
                        04547-006, Brasil
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-primary p-6 text-primary-foreground">
                <h3 className="mb-2 text-lg font-bold">Horário de atendimento</h3>
                <p className="text-sm">
                  Segunda a Sexta: 9h às 18h
                  <br />
                  Sábado e Domingo: Fechado
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
