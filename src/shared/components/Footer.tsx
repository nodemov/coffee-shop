import { Link } from "react-router-dom";

const footerLinks = {
  Product: [
    { label: "Menu", href: "/menu" },
    { label: "Coffee Beans", href: "/menu?category=beans" },
    { label: "Gift Cards", href: "#" },
  ],
  Company: [
    { label: "Our Story", href: "/about" },
    { label: "Locations", href: "/locations" },
    { label: "Careers", href: "#" },
  ],
  Resources: [
    { label: "Brew Guides", href: "#" },
    { label: "Wholesale", href: "#" },
    { label: "Press", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface-dark text-on-dark-soft">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mb-10">
          <span className="font-serif text-2xl tracking-tight text-on-dark">Lamoon</span>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-medium text-on-dark">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-on-dark-soft hover:text-on-dark transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-on-dark-soft/10 pt-8 text-sm text-muted-soft">
          &copy; {new Date().getFullYear()} Lamoon Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
