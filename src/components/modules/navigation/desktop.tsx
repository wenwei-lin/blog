'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Home, User, Briefcase, BookOpen, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { NavItem } from './type';

interface NavigationProps {
  pathname: string;
  navItems: NavItem[];
}

export default function DesktopNavigation({
  pathname,
  navItems,
}: NavigationProps) {
  const { scrollY } = useScroll();

  // Transform scroll value to opacity and backdrop blur
  const backgroundOpacity = useTransform(
    scrollY,
    [0, 100], // scroll values
    [0.9, 0.3] // opacity values
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100], // scroll values
    [12, 4] // blur values
  );
  return (
    <header className="fixed top-4 left-0 right-0 z-50 hidden lg:flex justify-center">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="px-1.5 py-1.5 rounded-full border border-zinc-800/50"
        style={{
          backgroundColor: `rgba(24, 24, 27, ${backgroundOpacity})`,
          backdropFilter: `blur(${backdropBlur}px)`,
        }}
      >
        <ul className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              (item.href === '/' && item.href === pathname) ||
              (item.href !== '/' && pathname.startsWith(item.href));

            return (
              <motion.li
                key={item.name}
                initial={false}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={item.href}
                  className={cn(
                    'relative flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-colors',
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>

                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute inset-0 rounded-full bg-blue-600 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </motion.li>
            );
          })}
        </ul>
      </motion.nav>
    </header>
  );
}
