'use client'

export default function Features() {

  const features = [
    {
      title: 'Commission-Free Trading',
      description: 'Buy and sell Canadian stocks and ETFs with zero commission fees',
      icon: '📈',
      highlight: 'No Fees on CAD Stocks',
    },
    {
      title: 'Tax-Advantaged Accounts',
      description: 'Open TFSA, RRSP, and personal accounts to optimize your taxes',
      icon: '🏦',
      highlight: 'TFSA & RRSP Available',
    },
    {
      title: 'Cash Account',
      description: 'Earn competitive interest rates on your uninvested cash',
      icon: '💵',
      highlight: '4.5% Interest Rate',
    },
    {
      title: 'User-Friendly App',
      description: 'Intuitive mobile and web platform designed for all experience levels',
      icon: '📱',
      highlight: '4.8★ App Rating',
    },
    {
      title: 'Automated Investing',
      description: 'Let robo-advisors manage your portfolio with smart rebalancing',
      icon: '🤖',
      highlight: 'Hands-Free Option',
    },
    {
      title: 'Fractional Shares',
      description: 'Invest in expensive stocks with any amount you can afford',
      icon: '🔀',
      highlight: 'Start with $1',
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-ws-dark/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">Wealthsimple in Canada?</span>
          </h2>
          <p className="text-xl text-white/60">
            Canada's fastest-growing investment platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-ws-light/50 to-ws-dark/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-ws-purple/30 transition-all duration-300 group-hover:scale-105">
                <div className="absolute top-0 right-0 px-3 py-1 bg-ws-purple/20 text-ws-purple text-xs font-bold rounded-bl-xl rounded-tr-2xl">
                  {feature.highlight}
                </div>
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-ws-purple mb-2">3M+</div>
            <div className="text-sm text-white/60">Canadian Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-ws-pink mb-2">$30B+</div>
            <div className="text-sm text-white/60">Assets Under Management</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-ws-green mb-2">0%</div>
            <div className="text-sm text-white/60">Commission Fees</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-ws-purple mb-2">24/7</div>
            <div className="text-sm text-white/60">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
