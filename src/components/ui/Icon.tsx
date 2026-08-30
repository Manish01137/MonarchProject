import {
  Award,
  BadgeCheck,
  Briefcase,
  ClipboardCheck,
  Compass,
  FileText,
  Globe2,
  GraduationCap,
  Heart,
  HeartHandshake,
  Home,
  LifeBuoy,
  Map,
  MapPin,
  Plane,
  School,
  ShieldCheck,
  Star,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

const registry: Record<string, LucideIcon> = {
  award: Award,
  badge: BadgeCheck,
  clipboard: ClipboardCheck,
  compass: Compass,
  file: FileText,
  globe: Globe2,
  graduation: GraduationCap,
  heart: Heart,
  lifebuoy: LifeBuoy,
  map: Map,
  pin: MapPin,
  plane: Plane,
  school: School,
  shield: ShieldCheck,
  star: Star,
  target: Target,
  users: Users,
  work: Briefcase,
  // country-service icon keys
  permanent: Home,
  visitor: Plane,
  family: HeartHandshake,
  more: Globe2,
  settlement: Home,
  greencard: BadgeCheck,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = registry[name] ?? Compass;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
