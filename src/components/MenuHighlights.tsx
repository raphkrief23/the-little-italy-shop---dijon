import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const categories = [
  {
    title: "APERITIVO",
    items: [
      { name: "WAY OF LIFE", price: "7,50" },
      { name: "SPRITZ 'classico'", price: "7,00" },
      { name: "SPRITZ 'yellow style'", price: "8,50" },
      { name: "St GERMAIN SPRITZ", price: "9,00" },
      { name: "MARTINI Fiero SPRITZ", price: "8,00" },
      { name: "NEGRONI", price: "9,00" },
      { name: "MARSALA fine D.O.C. (Mandorla / Cremovo)", price: "5,20" },
      { name: "BOMBAY FEVER", price: "10,00" },
      { name: "BOMBAY MULE", price: "10,00" },
      { name: "Rossini", price: "8,50" },
      { name: "Kir", price: "4,20" },
      { name: "TARINO bianco", price: "4,20" },
      { name: "TARINO rosso", price: "5,20" },
      { name: "PORTO", price: "4,00" },
    ],
  },
  {
    title: "SOFT",
    items: [
      { name: "Fuzetea pêche", price: "3,40" },
      { name: "Coca-Cola Zero", price: "3,40" },
      { name: "Schweppes Agrum'", price: "3,40" },
      { name: "Chinotto x Lurisia", price: "4,20" },
      { name: "FEVER-TREE Ginger Beer ou Tonic", price: "4,20" },
      { name: "S.PELLEGRINO (50cl)", price: "4,00" },
      { name: "S.PELLEGRINO (75cl)", price: "5,00" },
      { name: "S.PELLEGRINO Aranciata / Limonata (33cl)", price: "3,40" },
      { name: "ACQUA PANNA (75cl)", price: "5,00" },
      { name: "Supplément Sirop", price: "0,50" },
      { name: "Pago Jus (Orange, ACE, Fraise, Tomate)", price: "3,80" },
    ],
  },
  {
    title: "BIÈRES",
    items: [
      { name: "Moretti Pression (25cl)", price: "3,40" },
      { name: "Moretti Pression (50cl)", price: "6,60" },
      { name: "Panaché Pression (25cl)", price: "3,40" },
      { name: "Panaché Pression (50cl)", price: "6,60" },
      { name: "Peroni Bouteille (33cl)", price: "5,20" },
      { name: "Brooklyn Lager N.Y. Bouteille", price: "6,70" },
    ],
  },
];

const MenuCategory = ({ cat, index }: { cat: typeof categories[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="font-heading text-xl text-center text-foreground mb-8 tracking-wide italic">
        {cat.title}
      </h3>
      <div className="space-y-6">
        {cat.items.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-baseline gap-4 group cursor-default"
          >
            <div className="flex-1">
              <p className="font-body font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                {item.name}
              </p>
            </div>
            {item.price && (
              <span className="font-heading text-primary text-lg shrink-0 group-hover:text-terracotta transition-colors duration-300">
                {item.price} €
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="w-12 h-px bg-border mx-auto mt-8" />
    </div>
  );
};

const MenuHighlights = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            La Carte
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Notre Menu
          </h2>
          <p className="text-muted-foreground font-light text-sm">
            Cuisine italienne · Déjeuner & Dîner · Fait maison
          </p>
        </div>
        <div className="space-y-14">
          {categories.map((cat, i) => (
            <MenuCategory key={cat.title + i} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
