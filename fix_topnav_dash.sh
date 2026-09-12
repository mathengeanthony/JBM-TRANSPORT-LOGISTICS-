#!/bin/bash
sed -i '/to="\/rates"/,/<\/Link>/ {
  /<\/Link>/!b
  a\
          <Link\
            to="/dashboard"\
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"\
          >\
            Dashboard\
          </Link>
}' src/components/TopNav.tsx
