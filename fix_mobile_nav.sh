#!/bin/bash
sed -i '/to="\/rates"/,/<\/Link>/ {
  /<\/Link>/!b
  a\
            <Link\
              to="/dashboard"\
              className="group flex items-center gap-4 text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white hover:text-orange-500 transition-colors"\
              onClick={onClose}\
            >\
              <span className="opacity-50 text-sm font-mono mt-1 group-hover:opacity-100 transition-opacity">05</span>\
              <span>Dashboard</span>\
            </Link>
}' src/components/MobileMenu.tsx
