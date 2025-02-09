"use client";
import DesktopNavigation from "./desktop";
import MobileNavigation from "./mobile";
import type { NavItem } from "./type";
import { Home, Briefcase, BookOpen, Mail } from "lucide-react";

const navItems: NavItem[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "Blog", href: "/blog", icon: Briefcase },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Bookshelf", href: "/bookshelf", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Navigation({ pathname }: { pathname: string }) {
  return (
    <>
      <DesktopNavigation pathname={pathname} navItems={navItems} />
      <MobileNavigation navItems={navItems} pathname={pathname} />
    </>
  );
}
