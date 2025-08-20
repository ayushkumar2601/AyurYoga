import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-primary/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AY</span>
              </div>
              <span className="font-serif text-xl font-semibold gradient-text">AyurYoga</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Ancient wisdom meets modern wellness. Discover the perfect harmony of Yoga and Ayurveda.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Explore</h3>
            <div className="space-y-2">
              <Link
                href="/about-yoga"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                About Yoga
              </Link>
              <Link
                href="/about-ayurveda"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                About Ayurveda
              </Link>
              <Link
                href="/history-culture"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                History & Culture
              </Link>
            </div>
          </div>

          {/* Wellness */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Wellness</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">Meditation</p>
              <p className="text-muted-foreground text-sm">Breathwork</p>
              <p className="text-muted-foreground text-sm">Mindfulness</p>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="space-y-2">
              <Link
                href="/signup"
                className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Join Community
              </Link>
              <p className="text-muted-foreground text-sm">Newsletter</p>
              <p className="text-muted-foreground text-sm">Support</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 AyurYoga. Crafted with mindfulness and modern technology.
          </p>
        </div>
      </div>
    </footer>
  )
}
