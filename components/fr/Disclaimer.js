export default function Disclaimer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-white/40 mb-4">
          <strong>Avertissement:</strong> Ce site n'est pas affilié à Wealthsimple Financial Corp. Nous pouvons recevoir une commission si vous utilisez ce lien de parrainage.
          Les conditions de l'offre sont fixées par Wealthsimple et peuvent changer. Veuillez consulter les conditions générales de Wealthsimple avant de vous inscrire.
          Les rendements d'investissement ne sont pas garantis. Les performances passées ne garantissent pas les résultats futurs.
        </p>
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Code de Parrainage Wealthsimple Canada. À des fins éducatives seulement.
          Wealthsimple® est une marque déposée de Wealthsimple Financial Corp.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-white/30">
          <a href="/privacy" className="hover:text-white/60 transition-colors">Politique de Confidentialité</a>
          <span>•</span>
          <a href="/terms" className="hover:text-white/60 transition-colors">Conditions d'Utilisation</a>
          <span>•</span>
          <a href="/contact" className="hover:text-white/60 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
