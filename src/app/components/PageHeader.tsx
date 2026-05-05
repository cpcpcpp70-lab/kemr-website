import Link from "next/link";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <div className="bg-white pt-[90px] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-gray-400 text-sm mb-4">
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
                  <span className="text-gray-700">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <div className="flex items-center gap-4">
          <div className="h-10 w-1 bg-gold rounded-full" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-gray-500 text-base">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
