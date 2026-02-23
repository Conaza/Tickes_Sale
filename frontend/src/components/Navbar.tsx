import { NavLink } from "react-router-dom"
import { Button } from "./tools/button"
import { useAuth } from "@/contexts/AuthContext"
import { Ticket } from "lucide-react"

const adminMenuItems = [
  { label: "Eventos", to: "/admin/events" },
  { label: "Vendas", to: "/admin/sales" },
  { label: "Usuários", to: "/admin/users" },
]

export default function AdminNavigation() {
  const { logout } = useAuth()

  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <div className="flex flex-col">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Sistema de Vendas
          </span>
          <span className="text-lg font-semibold flex items-center gap-2">
            <Ticket className="size-4 text-muted-foreground" />
            Administração de Ingressos
          </span>
        </div>
        <nav className="flex items-center gap-2">
          {adminMenuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Button variant="outline" onClick={logout}>
            Sair
          </Button>
        </nav>
      </div>
    </header>
  )
}