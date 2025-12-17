export default function Disclaimer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-white/40 mb-4">
          <strong>Disclaimer:</strong> This site is not affiliated with Wealthsimple Financial Corp. We may receive a commission if you use this referral link.
          Offer terms are set by Wealthsimple and may change. Please review Wealthsimple's terms and conditions before signing up.
          Investment returns are not guaranteed. Past performance does not guarantee future results.
        </p>
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Wealthsimple Referral Code Canada. For educational purposes only.
          Wealthsimple® is a registered trademark of Wealthsimple Financial Corp.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-white/30">
          <a href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</a>
          <span>•</span>
          <a href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</a>
          <span>•</span>
          <a href="/contact" className="hover:text-white/60 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
