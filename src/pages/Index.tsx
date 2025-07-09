import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Phone, Instagram, Facebook, Star, Award, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-amber-50/30 to-stone-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-stone-900/30 to-neutral-900/80"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/refs/heads/main/public/images/la%20cave%20gastrobar%20em%20florianopolis.webp')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-10 text-center px-8 max-w-6xl mx-auto">
          <div className="mb-8 flex flex-col items-center space-y-4">
            <img 
              src="https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/refs/heads/main/public/images/la%20cave%20restaurante%20em%20florianopolis.avif" 
              alt="Hospital do Dente Logo"
              className="w-393 h-143 object-contain"
            />
            <div className="flex items-center space-x-2 text-amber-600">
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-light text-amber-400 mb-8 tracking-wide animate-fade-in">
            O Melhor Restaurante em
            <span className="block text-7xl md:text-9xl font-normal italic text-amber-400 mt-2">Florianópolis</span>
          </h1>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8"></div>
          
          <p className="text-2xl md:text-3xl text-amber-400 mb-6 font-light tracking-wide animate-fade-in">
            Uma experiência gastronômica única
          </p>
          <p className="text-xl text-amber-400/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in">
            Descubra sabores autênticos e criações exclusivas do chef em um ambiente sofisticado no seu melhor restaurante em Florianópolis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
            <Link to="/menu">
              <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-5 text-lg font-light tracking-wide border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Explorar Cardápio
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
            <Button 
  size="lg" 
  variant="outline" 
  className="border-2 border-amber-700 text-amber-800 hover:bg-amber-700 hover:text-white px-10 py-5 text-lg font-light tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
  onClick={() => window.open("https://linkly.link/2BReA", "_blank", "noopener,noreferrer")}
>
  Fazer Reserva
</Button>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <Award className="h-8 w-8 text-amber-600" />
                  <div className="w-16 h-px bg-amber-600"></div>
                </div>
                <h2 className="text-5xl font-serif font-light text-stone-800 leading-tight">
                  Nossa História
                </h2>
              </div>
              
              <p className="text-stone-600 text-xl leading-relaxed font-light">
                A história do La Cave, é a nossa história, a do Gus & Pris, como nos chamam os amigos. Ela começou lá em 2004, quando chegamos à Espanha quase ao mesmo tempo. Foi naquele país que nos conhecemos e, após quatro anos de amizade, nos apaixonamos e começamos nossa jornada juntos. 
              </p>
              <p className="text-stone-600 text-xl leading-relaxed font-light">
                Aos poucos, construímos uma parceria baseada em amor e cumplicidade, que nos levou a um sonho: abrir nosso próprio negócio. <a 
  href="https://www.instagram.com/lacavegastrobar/" 
  target="_blank" 
  rel="noopener noreferrer"
  class="text-blue-500 hover:text-blue-700">
  Leia mais...
</a>

              </p>
              
              <div className="flex items-center space-x-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-serif text-amber-700 mb-1">2012</div>
                  <div className="text-sm text-stone-500 uppercase tracking-wider">Fundação</div>
                </div>
                <div className="w-px h-12 bg-stone-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-serif text-amber-700 mb-1">4.8★</div>
                  <div className="text-sm text-stone-500 uppercase tracking-wider">Avaliação</div>
                </div>
                <div className="w-px h-12 bg-stone-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-serif text-amber-700 mb-1">1500+</div>
                  <div className="text-sm text-stone-500 uppercase tracking-wider">Avaliações</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-100 to-stone-100 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/refs/heads/main/public/images/vinhos%20florianopolis.avif" 
                alt="Interior do restaurante"
                className="relative rounded-xl shadow-2xl w-full h-96 object-cover transform -rotate-1 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-24 px-8 bg-gradient-to-br from-stone-50 via-amber-50/20 to-neutral-50 relative">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(217, 119, 6, 0.15) 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="w-12 h-px bg-amber-600"></div>
              <Utensils className="h-8 w-8 text-amber-600" />
              <div className="w-12 h-px bg-amber-600"></div>
            </div>
            <h2 className="text-5xl font-serif font-light text-stone-800 mb-6">
              Destaques do Cardápio
            </h2>
            <p className="text-2xl text-stone-600 font-light max-w-3xl mx-auto">
              Conheça alguns dos nossos pratos mais especiais
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/refs/heads/main/public/images/cheese_curd_bombom.webp" 
                  alt="Bombom de Coalho e Linguiça"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-tight">
                  Bombom de Coalho e Linguiça
                </h3>
                <p className="text-stone-600 leading-relaxed mb-6 font-light">
                  Massa folhada recheada com queijo coalho e linguiça de Blumenau
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-serif text-amber-600 font-medium">R$ 49,00</p>
                  <div className="w-8 h-px bg-amber-600 group-hover:w-12 transition-all duration-300"></div>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/refs/heads/main/public/images/iberian_ham.webp" 
                  alt="Jamón Ibérico de Bellota"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-tight">
                  Jamón Ibérico de Bellota
                </h3>
                <p className="text-stone-600 leading-relaxed mb-6 font-light">
                  O melhor jamón do mundo com 36 meses de cura
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-serif text-amber-600 font-medium">R$ 149,00</p>
                  <div className="w-8 h-px bg-amber-600 group-hover:w-12 transition-all duration-300"></div>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src="https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/refs/heads/main/public/images/salmon_carpaccio.webp" 
                  alt="Carpaccio de Salmão"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-stone-800 mb-4 leading-tight">
                  Carpaccio de Salmão
                </h3>
                <p className="text-stone-600 leading-relaxed mb-6 font-light">
                  Com creme azedo trufado e molho tailandês
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-serif text-amber-600 font-medium">R$ 69,00</p>
                  <div className="w-8 h-px bg-amber-600 group-hover:w-12 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link to="/menu">
              <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-5 text-lg font-light tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Ver Cardápio Completo
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 px-8 bg-gradient-to-br from-stone-900 via-amber-900 to-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(251, 191, 36, 0.1) 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif font-light mb-6">Contato & Reservas</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>
            <p className="text-2xl text-amber-200 font-light">
              Faça sua reserva e desfrute de uma experiência única
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 text-center mb-16">
            <div className="group">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-amber-600/20 rounded-full group-hover:bg-amber-600/30 transition-colors duration-300">
                  <MapPin className="h-10 w-10 text-amber-400" />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-light mb-4">Localização</h3>
              <p className="text-amber-200 text-lg leading-relaxed font-light">
                R. Demétrio Ribeiro, 51 <br />
                Centro<br />
                Florianópolis - SC
              </p>
            </div>
            
            <div className="group">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-amber-600/20 rounded-full group-hover:bg-amber-600/30 transition-colors duration-300">
                  <Clock className="h-10 w-10 text-amber-400" />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-light mb-4">Funcionamento</h3>
              <p className="text-amber-200 text-lg leading-relaxed font-light">
                Terça a Sábado<br />
                11:30 às 24:00<br />
                Domingo/Seg - fechado
              </p>
            </div>
            
            <div className="group">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-amber-600/20 rounded-full group-hover:bg-amber-600/30 transition-colors duration-300">
                  <Phone className="h-10 w-10 text-amber-400" />
                </div>
              </div>
              <h3 className="text-2xl font-serif font-light mb-4">Reservas</h3>
              <p className="text-amber-200 text-lg leading-relaxed font-light">
                (48) 3037-2828<br />
                <a 
                  href="https://linkly.link/2BReA" 
                  target="_blank" 
                  rel="noopener noreferrer">Clique para WhatsApp</a>
                 <br />
                contato@lacavebar.com.br
              </p>
            </div>
          </div>
          
          <div className="flex justify-center gap-8">
            <Button
  asChild
  variant="outline"
  size="lg"
  className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 px-8 py-4 font-light tracking-wide transition-all duration-300 hover:scale-105"
>
  <a
    href="https://www.instagram.com/lacavegastrobar/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Instagram className="h-6 w-6 mr-3" />
    Instagram
  </a>
</Button>
            <Button
  asChild
  variant="outline"
  size="lg"
  className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 px-8 py-4 font-light tracking-wide transition-all duration-300 hover:scale-105"
>
  <a
    href="https://www.ifood.com.br/delivery/florianopolis-sc/la-cave-centro/d1c1a486-856d-4cf4-a786-f35bc05c9d85?utm_medium=share"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Facebook className="h-6 w-6 mr-3" />
    Delivery
  </a>
</Button>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-12 px-8 text-center border-t border-stone-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h3 className="text-2xl font-serif text-amber-600 mb-2">O Melhor Restaurante em Florianópolis.</h3>
            <div className="w-16 h-px bg-amber-600 mx-auto"></div>
          </div>
          <p className="font-light">&copy; 2025 Restaurante em Florianópolis - La Cave. Todos os direitos reservados.</p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
