"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

const categoryImages: Record<string, string> = {
  "/company":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&auto=format&fit=crop",
  "/transfer":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&auto=format&fit=crop",
  "/startup":
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80&auto=format&fit=crop",
  "/division":
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80&auto=format&fit=crop",
  "/qa":
    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80&auto=format&fit=crop",
  "/consult":
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1920&q=80&auto=format&fit=crop",
};

const defaultImage =
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&auto=format&fit=crop";

function getImage(pathname: string): string {
  for (const prefix of Object.keys(categoryImages)) {
    if (pathname.startsWith(prefix)) return categoryImages[prefix];
  }
  return defaultImage;
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
}: PageHeaderProps) {
  const pathname = usePathname();
  const backgroundImage = getImage(pathname);

  return (
    <div className="bg-navy pt-[70px]">
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,22,40,0.72) 0%, rgba(30,58,110,0.55) 60%, rgba(37,99,235,0.45) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-4">
              <Link href="/" className="hover:text-gold transition-colors">
                홈
              </Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span>›</span>
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-gold transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          <div className="flex items-center gap-4">
            <div className="h-10 w-1 bg-gold rounded-full" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-2 text-white/60 text-base">{subtitle}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
