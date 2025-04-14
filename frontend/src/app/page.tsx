import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { UtensilsCrossed, ChevronRight, Search, ShoppingCart } from "lucide-react"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
  <div className="container mx-auto px-4 flex h-16 items-center justify-between">
    
    {/* Logo e ícono */}
    <div className="flex items-center gap-2">
      {/* Icono de cocina (ejemplo: cuchillo y tenedor) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l6 6m0 0l-6 6M10 10l10 10m-10 0L20 10" />
      </svg>
      <span className="text-xl font-bold tracking-tight text-gray-900">El Sabor</span>
    </div>

    {/* Navegación en pantallas medianas hacia arriba */}
    <nav className="hidden md:flex items-center gap-6">
      {['Inicio', 'Entrada', 'Principal', 'Postre', 'Bebidas', 'Contacto'].map((item, i) => (
        <a
          key={i}
          href="#"
          className="text-sm font-medium text-gray-600 hover:text-amber-600 transition"
        >
          {item}
        </a>
      ))}
    </nav>

    {/* Acciones (carrito, ordenar ahora) */}
    <div className="flex items-center gap-4">
      <div className="relative hidden md:block">
        <input
          type="search"
          placeholder="Buscar postres..."
          className="w-64 pl-10 pr-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
      </div>

      <button className="relative">
        <ShoppingCart className="h-5 w-5 text-gray-700" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
          3
        </span>
      </button>

      <Button className="hidden md:flex">Ordenar Ahora</Button>
    </div>
  </div>
</header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white py-12 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-8">
  {/* Texto a la izquierda */}
  <div className="flex-1 max-w-xl text-center lg:text-left">
    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
      Exquisitas opciones <span className="text-amber-600">gourmet</span><br />
      para cada ocasión
    </h1>
    <p className="mt-4 text-gray-600 text-lg">
      Descubre nuestra selección de platos únicos, elaborados con ingredientes frescos y de la mejor calidad.
    </p>
    <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
      <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-200">
        Ver Catálogo
      </button>
      <button className="bg-white border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-200">
        Pedidos Especiales
      </button>
    </div>
  </div>

  {/* Imagen a la derecha con overlay y texto */}
  <div className="relative flex-1 w-full h-80 lg:h-auto">
    <img
      src="/images/Restaurante El Sabor.png" // reemplaza por tu imagen real
      alt="Platos del restaurante"
      className="w-full h-full object-cover rounded-xl shadow-lg"
    />
    <div className="absolute inset-0 bg-black/40 rounded-xl" />
    <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl lg:text-4xl font-bold tracking-wide drop-shadow-lg">
      RESTAURANTE
    </h2>
  </div>
</section>


        {/* Featured Products */}
        <section className="py-12">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Postres Destacados</h2>
              <Link href="#" className="flex items-center text-sm font-medium text-primary">
                Ver todos <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <div key={product.id} className="group relative overflow-hidden rounded-lg border">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="object-cover transition-transform group-hover:scale-105"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-bold">${product.price.toFixed(2)}</span>
                      <Button size="sm" variant="secondary">
                        Añadir
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-muted/50 py-12">
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold tracking-tight">Categorías</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {categories.map((category) => (
                <Link key={category.id} href="#" className="group relative overflow-hidden rounded-lg">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="object-cover transition-transform group-hover:scale-105"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <p className="text-sm text-white/80">{category.count} productos</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12">
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-center">Lo que dicen nuestros clientes</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="rounded-lg border p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold mb-4">Suscríbete a nuestro boletín</h2>
              <p className="mb-6 max-w-md">
                Recibe nuestras últimas ofertas, recetas y novedades directamente en tu correo.
              </p>
              <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="bg-primary-foreground text-primary"
                />
                <Button variant="secondary">Suscribirse</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
            <UtensilsCrossed className="h-5 w-5 text-primary" />

              <span className="text-lg font-bold">DulceDelicias</span>
            </div>
            <p className="text-sm text-muted-foreground">Postres artesanales para cada ocasión</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Productos</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Pasteles
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Cupcakes
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Galletas
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Postres especiales
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Empresa</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Sobre nosotros
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Contacto
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Preguntas frecuentes
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Términos de servicio
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Política de privacidad
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Política de cookies
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="container mt-6 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 DulceDelicias. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

// Sample data
const featuredProducts = [
  {
    id: 1,
    name: "Pastel de Chocolate",
    description: "Rico pastel de chocolate con ganache",
    price: 28.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Cupcakes de Vainilla",
    description: "Pack de 6 cupcakes con frosting de vainilla",
    price: 15.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Galletas de Mantequilla",
    description: "Docena de galletas artesanales",
    price: 12.5,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Tarta de Fresas",
    description: "Tarta fresca con fresas de temporada",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
  },
]

const categories = [
  {
    id: 1,
    name: "Pasteles",
    count: 12,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    name: "Cupcakes",
    count: 8,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    name: "Galletas",
    count: 15,
    image: "/placeholder.svg?height=400&width=600",
  },
]

const testimonials = [
  {
    id: 1,
    name: "María García",
    location: "Madrid",
    content:
      "Los pasteles son increíbles. Pedí uno para el cumpleaños de mi hija y a todos les encantó. ¡Definitivamente volveré a comprar!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    location: "Barcelona",
    content:
      "Las galletas son las mejores que he probado. El servicio de entrega fue puntual y todo llegó en perfectas condiciones.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Laura Martínez",
    location: "Valencia",
    content:
      "Encargar un pastel personalizado fue muy fácil. El resultado superó mis expectativas. ¡Totalmente recomendable!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

