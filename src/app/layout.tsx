import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { withBasePath } from '@/shared/lib/with-base-path';
import './globals.css';

export const metadata: Metadata = {
    title: 'Kremleff БанкетХолл — Краснодар',
    description: 'Банкетный зал для свадеб, юбилеев и корпоративных мероприятий в Краснодаре.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const assetStyles = {
        '--separator-image': `url('${withBasePath('/images/separator.svg')}')`,
        '--pattern-image': `url('${withBasePath('/images/img-pattern.svg')}')`,
        '--logo-image': `url('${withBasePath('/images/krem-logo.png')}')`,
        '--footer-form-bg': `url('${withBasePath('/images/footer-form-bg.png')}')`,
        '--footer-form-pattern': `url('${withBasePath('/images/footer-form-pattern.svg')}')`,
    } as CSSProperties;

    return (
        <html lang="ru">
            <body style={assetStyles}>{children}</body>
        </html>
    );
}
