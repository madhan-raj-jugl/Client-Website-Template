import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Shield, 
  Globe, 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight
} from 'lucide-react';
import config from './config.json';

const iconMap: Record<string, any> = {
  Zap,
  Shield,
  Globe
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    // Apply theme color from config
    document.documentElement.style.setProperty('--theme-color', config.branding.themeColor);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <img 
                src={config.branding.logoUrl} 
                alt={config.branding.name} 
                className="w-8 h-8"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-bold tracking-tight text-slate-900">
                {config.branding.name}
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Features</a>
              <a href="#" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">About</a>
              <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                {config.hero.ctaText}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4"
          >
            <a href="#" className="block text-base font-medium text-slate-600">Features</a>
            <a href="#" className="block text-base font-medium text-slate-600">About</a>
            <button className="w-full bg-primary text-white px-5 py-3 rounded-xl text-base font-semibold">
              {config.hero.ctaText}
            </button>
          </motion.div>
        )}
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                  {config.hero.title}
                </h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  {config.hero.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-2">
                    {config.hero.ctaText} <ChevronRight className="w-5 h-5" />
                  </button>
                  <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-colors">
                    {config.hero.secondaryCtaText}
                  </button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10" />
                <img 
                  src={config.hero.imageUrl} 
                  alt="Hero" 
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-video lg:aspect-square"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Powerful Features</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Everything you need to succeed in the modern digital landscape.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {config.features.map((feature, index) => {
                const Icon = iconMap[feature.icon] || Zap;
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <img 
                      src={feature.imageUrl} 
                      alt={feature.title} 
                      className="w-full h-40 object-cover rounded-lg mb-6"
                      referrerPolicy="no-referrer"
                    />
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <img 
                  src={config.about.imageUrl} 
                  alt="About" 
                  className="rounded-3xl shadow-xl w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  {config.about.title}
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {config.about.content}
                </p>
                <ul className="space-y-4">
                  {['Unmatched performance', 'Enterprise-grade security', '24/7 Dedicated support'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)] pointer-events-none" />
              <h2 className="text-4xl font-bold mb-6 relative z-10">Ready to transform your workflow?</h2>
              <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                Join thousands of teams who are already building the future with {config.branding.name}.
              </p>
              <button className="bg-white text-primary px-10 py-4 rounded-full text-xl font-bold hover:scale-105 transition-transform relative z-10">
                Get Started Now
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <img 
                src={config.branding.logoUrl} 
                alt={config.branding.name} 
                className="w-6 h-6 brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <span className="text-lg font-bold text-white">
                {config.branding.name}
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              {config.footer.links.map((link) => (
                <a key={link.label} href={link.url} className="text-sm hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-sm">
              {config.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
