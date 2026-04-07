import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reviews = [
  {
    name: "Jade Sobek",
    date: "Février 2026",
    rating: 5,
    title: "Che piacere di mangiare in questo posto ! Service,",
    text: "Che piacere di mangiare in questo posto ! Service, ambiance et cuisine très appréciable ! Mention spéciale pour la bande son, qui, à chaque visite, m'enchante :) L'équipe cuisine et salle sont très pro, et le rapport qualité-quantité-prix est valorisant. Toujours un plaisir de s'y attabler. Les produits sont bel et bien italiens, et tout y est réfléchi pour s'y sentir comme en Italie.",
  },
  {
    name: "Sophie ROCHETTE",
    date: "Janvier 2026",
    rating: 4,
    title: "Endroit joliment décoré",
    text: "Endroit joliment décoré.  On se sent bien dans ce restaurant. Côté cuisine, bon sans plus: jambon de parme au lieu du jambon aux herbes sur la pizza, moins apprécié par mon fils. Pizzas copieuses bien présentées Accueil agréable des patrons",
  },
  {
    name: "El Tamal",
    date: "Juin 2025",
    rating: 5,
    title: "Parmi les meilleures pizzas de Dijon ! Mehdi, le c",
    text: "Parmi les meilleures pizzas de Dijon ! Mehdi, le chef, est passionné et très talentueux. Une pâte très fine, des ingrédients de qualité et de l’innovation permanente (tous les midi une pizza du jour à un prix très avantageux). La mortadelle pistache à jamais dans mon cœur ! 🤌🏻 Je n’ai pas goûté les autres produits sur le menu mais tout a l’air très bon ! La salle est très belle, bien décorée. Le lieu est chaleureux et agréable. Globalement le service est qualitatif et on est bien accueillis ! Je recommande vivement.",
  },
  {
    name: "Loïc",
    date: "Août 2025",
    rating: 4,
    title: "Venu pour manger un midi en couple",
    text: "Venu pour manger un midi en couple. Le four a pizza était HS mais on était venu pour les pâtes. J'ai trouvé ça un peu étonnant que la majorité des plats à base de pâtes soient pâtes+sauce sans viande en accompagnement mais c'était bon La déco du restorant fait penser a un bar vintage avec les ventilos au plafond Le serveur qui nous a accueilli a été prévenant et sympathique",
  },
  {
    name: "Rémi Huchot",
    date: "Août 2025",
    rating: 5,
    title: "Meilleur pizza de Dijon ! Et de loin, la pâte est ",
    text: "Meilleur pizza de Dijon ! Et de loin, la pâte est légère et digeste avec une belle fermentation. Mehdi qui réalise les pizzas est passionné, il travaille la pâte sur plusieurs jours et propose des recettes travaillées avec des produits de qualité. Pour avoir testé beaucoup de pizza à Dijon, je reviens toujours chez eux. Je recommande sans hésiter.",
  },
];

const StarIcon = () => (
  <svg className="w-4 h-4 fill-accent" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ReviewCard = ({ review, index }: { review: typeof reviews[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`border border-border p-8 hover:border-primary/30 hover:-translate-y-1 hover:shadow-md transition-all duration-500
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex gap-1 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <h3 className="font-heading text-lg text-foreground mb-2">{review.title}</h3>
      <p className="text-muted-foreground font-light leading-relaxed mb-6 text-sm">
        « {review.text} »
      </p>
      <div className="flex items-baseline justify-between">
        <span className="font-body font-medium text-foreground text-sm">{review.name}</span>
        <span className="text-muted-foreground text-xs">{review.date}</span>
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-body mb-4">
            Témoignages
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Avis de nos clients
          </h2>
          <p className="text-muted-foreground font-light text-sm">
            Ce que nos clients disent de nous
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
