
import { Link } from "react-router-dom";
import { ArrowLeft, Wine, Star, Award, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "@/components/OptimizedImage";

const Menu = () => {
  const tapas = [
    {
      name: "Bombom de Coalho e Linguiça de Blumenau",
      description: "Massa folhada recheada com queijo coalho e linguiça Blumenau, assada no forno. Finalizada com gremolata, picles de mostarda e limão confitado. (5 unidades). Contém glúten e lactose.",
      price: "R$ 49,00",
      image: "https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/main/public/images/cheese_curd_bombom.webp",
      isNew: false
    },
    {
      name: "Pancetta de Porco, Geleia de Bacon, Jamón Serrano, Limão Confitado e Hortelã Fresca",
      description: "Pancetta de porco, geleia de bacon, jamón serrano, limão confitado e hortelã fresca.",
      price: "R$ 49,00",
      image: "https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/main/public/images/pork_belly.webp",
      isNew: true
    },
    {
      name: "Gougères Recheados com Creme de Camarão e Queijo Fresco, Chutney de Abacaxi e Furikake",
      description: "Gougères recheados com creme de camarão e queijo fresco, chutney de abacaxi e furikake caseiro",
      price: "R$ 69,00",
      image: "https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/main/public/images/gougeres.webp",
      isNew: true
    },
    {
      name: "Pão Naam com Queijo de Cabra Fresco, Shitake Refogado no Shoyu, Avelãs Tostadas, Agrião e Mel",
      description: "Pão Naam com queijo de cabra fresco caseiro, cogumelos shiitake refogados no shoyu, avelãs tostadas, agrião e mel",
      price: "R$ 59,00",
      image: "https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/refs/heads/main/public/images/pao%20naam.webp",
      isNew: true
    },
    {
      name: "Torrada de Salmão Defumado, Creme de Abacate, Creme Azedo com Endro e Limão Confitado",
      description: "Torrada de salmão defumado da casa, creme de abacate, creme azedo com endro e limão confitado (2 unidades)",
      price: "R$ 65,00",
      image: "https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/main/public/images/smoked_salmon_toast.webp",
      isNew: true
    },
    {
      name: "JAMÓN IBÉRICO PATA NEGRA (ALIMENTADO COM BOLOTA)",
      description: "Considerado o melhor Jamón do mundo o Jamón Ibérico de Bellota tem 36 meses de cura, alimentado com bellotas (um tipo de castanha) e cortado a cuchillo (faca especial para jamón). Acompanha focaccia, tomates confitados, azeite de ervas e tomate resfregado. Porção de Jamón 50 gramas.",
      price: "R$ 149,00",
      image: "https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/main/public/images/iberian_ham.webp",
      isNew: false
    }
  ];

  const appetizers = [
    {
      name: "Ricota da Casa Recheada com Queijo Gorgonzola, Acompanhada de Compota de Frutas Vermelhas, Nozes e Pães",
      description: "Ricota da casa recheada com queijo gorgonzola, acompanhada de compota de frutas vermelhas, nozes e pães",
      price: "R$ 59,00",
      image: "https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/main/public/images/house_ricotta.webp",
      isNew: true
    },
    {
      name: "Crudo de Peixe Fresco, Ponzu de Laranja, Aioli de Wasabi, Algas e Pó de Hibisco",
      description: "Crudo de peixe fresco, ponzu de laranja, aioli de wasabi, algas e pó de hibisco. Servido com torrada artesanal.",
      price: "R$ 59,00",
      image: "https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/main/public/images/fresh_fish_crudo.webp",
      isNew: true
    },
    {
      name: "Carpaccio de Salmão com Creme Azedo Trufado, Regado com Molho Tailandês (Gengibre, Laranja e Pimenta) e Gergelim",
      description: "Carpaccio de salmão com creme azedo trufado, regado com molho tailandês (gengibre, laranja e pimenta) e gergelim. Servido com torradas de pão de fermentação longa. Obs: contém glúten e lactose, consulte disponibilidade de pão sem glúten.",
      price: "R$ 69,00",
      image: "https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/main/public/images/salmon_carpaccio.webp",
      isNew: false
    },
    {
      name: "Steak Tartare com Gema Infusionada na Cachaça, Mousse de Mostarda Dijon",
      description: "Steak tartare com gema infusionada na cachaça, mousse de mostarda dijon acompanhado de pão caseiro de fermentação longa",
      price: "R$ 69,00",
      image: "https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/refs/heads/main/public/images/steak.webp",
      isNew: true
    },
    {
      name: "Mix of Greens, Candied Fig, Fresh Goat Cheese, Shavings of Jamón Serrano, Savory Granola and Orange Vinaigrette",
      description: "Mix of greens, candied fig, house-made fresh goat cheese, serrano ham shavings, savory granola, and orange vinaigrette",
      price: "R$ 69,00",
      image: "https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/main/public/images/mix_of_greens.webp",
      isNew: true
    },
    {
      name: "Organic Mushroom Skillet Sautéed in Olive Oil with Fresh Herbs and Cherry Tomatoes Confit with Truffle Oil",
      description: "Risoto de cogumelos orgânicos com farofa de gergelim e azeite de ervas",
      price: "R$ 69,00",
      image: "https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/refs/heads/main/public/images/ad026cb0-3da9-11f0-9071-09d6118f0bd4.webp",
      isNew: true
    },
    {
      name: "Seafood Stew with Sicilian Lemon Sauce and Slow-Fermented Toasts",
      description: "Pink shrimp from deep sea, squid, shellfish, octopus and grilled fish with Sicilian lemon sauce accompanied by toasted long-fermented breads. Note: contains gluten and lactose, check availability of gluten-free bread, for lactose-free we remove ghee butter.",
      price: "R$ 95,00",
      image: "https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/main/public/images/seafood_stew.png",
      isNew: true
    },
    {
      name: "Selection of Living Cheeses and Artisanal Charcuterie with Jellies, Butter, and House Breads",
      description: "Selection of unpasteurized (raw) cheeses, artisanal charcuterie. Served with jellies, smoked paprika ghee butter and breads, all made in-house. Note: contains gluten and lactose, check availability of gluten-free bread.",
      price: "R$ 117,00",
      image: "https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/main/public/images/selection_of_cheeses.webp",
      isNew: true
    },
    {
      name: "Bread Add-on",
      description: "House bread served as an extra portion for other appetizers, does not come with butter.",
      price: "R$ 15,00",
      image: "https://raw.githubusercontent.com/jenerpaulo/floripa-sabor-digital-05/main/public/images/bread_add_on.webp",
      isNew: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-amber-50/30 to-stone-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" className="text-amber-700 hover:text-amber-800 hover:bg-amber-50 px-6 py-3 font-light tracking-wide">
              <ArrowLeft className="h-5 w-5 mr-3" />
              Voltar ao Início
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="text-3xl font-serif font-light text-stone-800">Cardápio</h1>
            <div className="w-16 h-px bg-amber-600 mx-auto mt-2"></div>
          </div>
          <div className="w-32"></div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Tasting Menu */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="w-12 h-px bg-amber-600"></div>
              <Crown className="h-8 w-8 text-amber-600" />
              <div className="w-12 h-px bg-amber-600"></div>
            </div>
            <h2 className="text-5xl font-serif font-light text-stone-800 mb-6">Menu Degustação</h2>
            <p className="text-2xl text-stone-600 font-light max-w-4xl mx-auto">
              * Sugestão para um jantar de quatro etapas *
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-white shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-10">
                <div className="flex items-center mb-8">
                  <Award className="h-8 w-8 text-amber-600 mr-4" />
                  <h3 className="text-3xl font-serif font-light text-stone-800">Menu Degustação</h3>
                </div>
                <div className="space-y-8">
                  <div className="border-l-2 border-amber-200 pl-6">
                    <h4 className="font-serif text-xl text-amber-700 mb-3">Couvert</h4>
                    <p className="text-stone-600 leading-relaxed font-light">Pães de fermentação longa, manteiga ghee e geleia da casa</p>
                  </div>
                  <div className="border-l-2 border-amber-200 pl-6">
                    <h4 className="font-serif text-xl text-amber-700 mb-3">Entrada</h4>
                    <p className="text-stone-600 leading-relaxed font-light">Bolinho de peixe com aioli de limão siciliano</p>
                  </div>
                  <div className="border-l-2 border-amber-200 pl-6">
                    <h4 className="font-serif text-xl text-amber-700 mb-3">Prato Principal</h4>
                    <p className="text-stone-600 leading-relaxed font-light">Pancetta de porco marinada no vinho tinto e especiarias, cozida em baixa temperatura por oito horas, servida sobre purê de batatas, regada com molho demi glace, finalizada com gremolata e farofa de bacon</p>
                  </div>
                  <div className="border-l-2 border-amber-200 pl-6">
                    <h4 className="font-serif text-xl text-amber-700 mb-3">Sobremesa</h4>
                    <p className="text-stone-600 leading-relaxed font-light">Alfajor de xícara (ganache de chocolate, farofa de biscoito e creme de doce de leite)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-stone-900 via-amber-900 to-stone-900 text-white shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-10">
                <div className="flex items-center mb-8">
                  <Wine className="h-10 w-10 mr-4 text-amber-400" />
                  <h3 className="text-3xl font-serif font-light">Menu Degustação com Harmonização</h3>
                </div>
                <p className="text-4xl font-serif font-light text-amber-400 mb-8">R$ 269,00</p>
                <p className="text-amber-100 mb-8 leading-relaxed font-light text-lg">
                  Harmonize cada etapa do Menu Degustação com uma taça de vinho para tornar seu jantar ainda mais especial:
                </p>
                <div className="space-y-6 text-base font-light">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-amber-400">Entrada:</strong> Vinho rosé La Cave Blend, 2023 (Brasil) - 100ml
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-amber-400">Prato principal:</strong> Vinho tinto Entrelinhas Douro Doc, 2022 (Portugal) - 100ml
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-amber-400">Sobremesa:</strong> Espumante Claudi'Onor Moscatel (Argentina) - 100ml
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tapas Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="w-12 h-px bg-amber-600"></div>
              <Star className="h-8 w-8 text-amber-600 fill-current" />
              <div className="w-12 h-px bg-amber-600"></div>
            </div>
            <h2 className="text-5xl font-serif font-light text-stone-800 mb-6">Tapas / Para Comer com as Mãos</h2>
            <p className="text-2xl text-stone-600 font-light">Petiscos especiais para compartilhar</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {tapas.map((item, index) => (
              <Card key={index} className="group bg-white shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <OptimizedImage
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={() => console.log(`Failed to load tapas image: ${item.name}`)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  {item.isNew && (
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-light tracking-wide shadow-lg">
                      NOVO
                    </span>
                  )}
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif text-stone-800 mb-4 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-stone-600 text-base mb-6 leading-relaxed font-light">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-serif text-amber-600 font-medium">
                      {item.price}
                    </p>
                    <div className="w-8 h-px bg-amber-600 group-hover:w-12 transition-all duration-300"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Appetizers Section */}
        <section className="mb-16">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="w-12 h-px bg-amber-600"></div>
              <Award className="h-8 w-8 text-amber-600" />
              <div className="w-12 h-px bg-amber-600"></div>
            </div>
            <h2 className="text-5xl font-serif font-light text-stone-800 mb-6">Entradas</h2>
            <p className="text-2xl text-stone-600 font-light">Começe sua experiência gastronômica</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {appetizers.map((item, index) => (
              <Card key={index} className="group bg-white shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="lg:flex">
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <OptimizedImage
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={() => console.log(`Failed to load appetizer image: ${item.name}`)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    {item.isNew && (
                      <span className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-light tracking-wide shadow-lg">
                        NOVO
                      </span>
                    )}
                  </div>
                  <CardContent className="lg:w-1/2 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-serif text-stone-800 mb-4 leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-stone-600 text-base mb-6 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-serif text-amber-600 font-medium">
                        {item.price}
                      </p>
                      <div className="w-8 h-px bg-amber-600 group-hover:w-12 transition-all duration-300"></div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-24 text-center">
          <div className="bg-gradient-to-br from-stone-900 via-amber-900 to-stone-900 rounded-2xl p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(251, 191, 36, 0.1) 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
            </div>
            <div className="relative">
              <h3 className="text-4xl font-serif font-light mb-6">Faça sua Reserva</h3>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>
              <p className="text-2xl text-amber-200 mb-10 font-light">
                Desfrute de uma experiência gastronômica inesquecível
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-5 text-lg font-light tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  (48) 3037-2828
                </Button>
                <Button 
  asChild 
  size="lg" 
  variant="outline" 
  className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 px-10 py-5 text-lg font-light tracking-wide transition-all duration-300 hover:scale-105"
>
  <a 
    href="https://linkly.link/2BReA" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    WhatsApp
  </a>
</Button>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;
