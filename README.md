# Black Label Auto Detailing Landing Page

High-end auto detailing landing built with Next.js 14 (App Router), TypeScript, TailwindCSS, Framer Motion, GSAP + ScrollTrigger, and React Three Fiber. Fully bilingual (EN/ES) via next-intl with a locale-aware navbar switcher.

## Features

- Luxury dark layout with smooth micro-interactions and scroll reveals.
- React Three Fiber hero display with a rotating placeholder car; replace with your GLB/GLTF.
- GSAP + ScrollTrigger global scroll effects; Framer Motion section-level animation.
- Sections: Hero, About, Services, Pricing (with add-ons), Brands carousel, Before/After gallery, Reviews slider, Vehicle compatibility, Videos, FAQ accordion, Contact/Booking, Footer.
- Internationalization: English & Spanish strings in `messages/en.json` and `messages/es.json`.

## Getting Started

1. Install dependencies

```
pm install
```

2. Run dev server

```
pm run dev
```

3. Open http://localhost:3000/en or http://localhost:3000/es.

## Replacing the 3D Model

- Add your GLB/GLTF to `public/models/car.glb` (or another path).
- Update `components/three/HeroCanvas.tsx` to load it with `useGLTF('/models/car.glb')` and render `<primitive object={scene} />`.
- Keep materials lightweight for performance; prefer compressed mesh and textures.

## Adding Videos / Media

- Replace the placeholders in the Gallery and Videos sections with your assets.
- Background video: update the hero section container to include your video tag or component.

## Translations

- Edit text in `messages/en.json` and `messages/es.json`.
- Add keys as needed; keep IDs consistent with `lib/content.ts` arrays.

## Build

```
pm run build
```

## Notes

- Navbar language switcher preserves the current path when switching locales.
- Scroll effects use `components/effects/ScrollEffects.tsx`; adjust triggers/selectors as desired.
- Styling tokens live in `tailwind.config.ts` and `app/globals.css`.
