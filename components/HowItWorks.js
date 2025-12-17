'use client'

export default function HowItWorks() {

  const steps = [
    {
      number: '01',
      title: 'Click the Link',
      description: 'Use our exclusive referral link to access Wealthsimple',
      icon: '🔗',
    },
    {
      number: '02',
      title: 'Sign Up',
      description: 'Create your account in just 5 minutes with basic information',
      icon: '✍️',
    },
    {
      number: '03',
      title: 'Fund Your Account',
      description: 'Add funds to your account (minimum requirements apply)',
      icon: '💰',
    },
    {
      number: '04',
      title: 'Get Your Bonus',
      description: 'Receive your $25 bonus instantly in your account',
      icon: '🎉',
    },
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How to Use This <span className="gradient-text">Wealthsimple Referral Code</span>
          </h2>
          <p className="text-xl text-white/60">
            Get started in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-ws-light to-ws-dark p-6 rounded-2xl border border-white/10 hover:border-ws-purple/50 transition-all duration-300 group-hover:scale-105 group-hover:glow h-full">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-ws-purple/60 font-mono text-sm mb-2">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-ws-purple/30">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
