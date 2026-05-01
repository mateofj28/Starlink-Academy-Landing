import { Satellite } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-cyber-400 flex items-center justify-center">
                <Satellite className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Starlink <span className="text-primary-400">Academy</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              La plataforma líder en formación sobre tecnología Starlink en Latinoamérica.
              Aprende a instalar, configurar y monetizar tus conocimientos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Cursos</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><span className="hover:text-slate-300 transition-colors cursor-pointer">Starlink Básico</span></li>
              <li><span className="hover:text-slate-300 transition-colors cursor-pointer">Starlink Avanzado</span></li>
              <li><span className="hover:text-slate-300 transition-colors cursor-pointer">Starlink Empresarial</span></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><span className="hover:text-slate-300 transition-colors cursor-pointer">Términos y condiciones</span></li>
              <li><span className="hover:text-slate-300 transition-colors cursor-pointer">Política de privacidad</span></li>
              <li><span className="hover:text-slate-300 transition-colors cursor-pointer">Política de reembolso</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 text-center text-xs text-slate-600">
          © {year} Starlink Academy. Todos los derechos reservados. No afiliado a SpaceX o Starlink.
        </div>
      </div>
    </footer>
  )
}
