import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Kremleff БанкетХолл — Краснодар',
    description: 'Банкетный зал для свадеб, юбилеев и корпоративных мероприятий в Краснодаре.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru">
            <body>{children}</body>
        </html>
    );
}
