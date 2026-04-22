<div align="center">

# 🐾 PawPalace

### Premium Pet Boarding Management SaaS Platform

A full-featured pet boarding management system built with **one prompt** using [Verdent](https://www.verdent.ai).

[**Try it live**](https://verdent-ai.github.io/paw-palace) · [Report Issue](https://github.com/verdent-ai/paw-palace/issues)

</div>

---

## Overview

PawPalace is a complete SaaS platform for pet boarding businesses — featuring a stunning landing page, admin dashboard with analytics, booking management, pet health profiles, and customer CRM.

This project demonstrates how a single AI prompt can produce a production-quality web application. It's open-sourced as a **learning reference** for anyone looking to build their own niche SaaS.

## Features

| Module | Description |
|---|---|
| **Landing Page** | Hero with animations, feature showcase, how-it-works flow, testimonials, CTA |
| **Dashboard** | Revenue charts, occupancy rates, active bookings overview, boarding status |
| **Bookings** | Card-based booking management with search, status filters, and add-on tracking |
| **Pet Profiles** | Photo cards with health info, vaccination status, temperament tags, owner notes |
| **Customers** | Customer CRM with VIP tiers, visit history, spending analytics |
| **Settings** | Business profile, notification preferences, theme customization |

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Charts:** Recharts
- **Icons:** Lucide React
- **Routing:** React Router 7

## Getting Started

```bash
# Clone the repo
git clone https://github.com/verdent-ai/paw-palace.git
cd paw-palace

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it.

## Project Structure

```
src/
├── components/
│   ├── landing/       # Landing page sections (Hero, Features, etc.)
│   ├── layout/        # App shell (Sidebar, Header, Footer)
│   └── ui/            # Reusable components (Button, Card, Badge, Input)
├── pages/             # Route pages (Dashboard, Bookings, Pets, Customers, Settings)
├── data/              # Mock data and type definitions
└── utils/             # Utility functions
```

## License

MIT

---

<div align="center">

Built with [Verdent](https://www.verdent.ai) — an AI coding agent that handled the full workflow in a single conversation.

</div>
