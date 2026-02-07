import { FileText, LayoutDashboard, Users } from "lucide-react";

export interface CardItem {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface CardsProps {
  items: CardItem[];
}


const cardData: CardItem[] = [
  {
    title: "Deals",
    description: "Track stages, values, and close dates. See your pipeline at a glance.",
    Icon: LayoutDashboard,
  },
  {
    title: "Contacts",
    description: "Keep people and companies organized. Link contacts to deals.",
    Icon: Users,
  },
  {
    title: "Notes",
    description: "Capture follow-ups and context. Never lose a detail again.",
    Icon: FileText,
  },
];

export default cardData;