interface PageBannerProps {
  title: string
  subtitle: string
  image: string
}

export default function PageBanner({ title, subtitle, image }: PageBannerProps) {
  return (
    <section className="relative h-96 mt-16 lg:mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-ivory animate-in fade-in-0 slide-in-from-left-10 duration-1000">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{title}</h1>
            <p className="text-xl md:text-2xl text-almond font-light">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
