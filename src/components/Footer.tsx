const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-heading text-2xl text-foreground mb-4">The Little Italy Shop - Dijon</p>
        <p className="text-muted-foreground text-sm font-light mb-2">
          25 Rue Verrerie, 21000 Dijon
        </p>
        <a href="tel:+33380305837" className="text-muted-foreground text-sm font-light hover:text-foreground transition-colors">
          +33 3 80 30 58 37
        </a>
        <div className="w-8 h-px bg-border mx-auto my-6" />
        <p className="text-muted-foreground text-xs font-light">
          © {new Date().getFullYear()} The Little Italy Shop - Dijon. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
