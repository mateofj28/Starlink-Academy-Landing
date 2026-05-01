export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 rounded-full border border-white/15" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <span className="text-sm font-semibold text-white tracking-wide font-[family-name:var(--font-display)]">
                STARLINK ACADEMY
              </span>
            </div>
            <p className="text-[13px] text-white/20 leading-relaxed max-w-xs">
              La plataforma líder en formación sobre tecnología Starlink en Latinoamérica.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[11px] font-semibold text-white/30 mb-5 tracking-[0.15em] uppercase">Cursos</h4>
            <ul className="space-y-3 text-[13px] text-white/20">
              <li><span className="hover:text-white/40 transition-colors cursor-pointer">Starlink Básico</span></li>
              <li><span className="hover:text-white/40 transition-colors cursor-pointer">Starlink Avanzado</span></li>
              <li><span className="hover:text-white/40 transition-colors cursor-pointer">Starlink Empresarial</span></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] font-semibold text-white/30 mb-5 tracking-[0.15em] uppercase">Legal</h4>
            <ul className="space-y-3 text-[13px] text-white/20">
              <li><span className="hover:text-white/40 transition-colors cursor-pointer">Términos y condiciones</span></li>
              <li><span className="hover:text-white/40 transition-colors cursor-pointer">Política de privacidad</span></li>
              <li><span className="hover:text-white/40 transition-colors cursor-pointer">Política de reembolso</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.04] text-center text-[11px] text-white/15 tracking-wide">
          © {year} Starlink Academy. Todos los derechos reservados. No afiliado a SpaceX o Starlink.
        </div>
      </div>
    </footer>
  )
}
