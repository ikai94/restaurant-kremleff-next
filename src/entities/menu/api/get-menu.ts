import type { MenuItem } from '../model/types';
import { withBasePath } from '@/shared/lib/with-base-path';

const menuItems: MenuItem[] = [
    { id: 'bulgarian-salad', title: 'Салат Болгарский', description: 'Говядина, помидор, сладкий перец и сыр с лёгким медово-горчичным соусом', weight: '40/120/50 г', price: 410, image: withBasePath('/images/menu-1.jpg'), alt: 'Салат Болгарский' },
    { id: 'tongue-salad', title: 'Салат с языком', description: 'Отварной говяжий язык, жареные грибы, яйцо, маринованный лук и домашний майонез', price: 470, image: withBasePath('/images/menu-2.jpg'), alt: 'Салат с говяжьим языком' },
    { id: 'stuffed-sturgeon', title: 'Осётр фаршированный Kremleff', description: 'Начинённый креветками, овощами и зеленью, украшенный лососевой икрой и другими морскими деликатесами', price: 520, image: withBasePath('/images/menu-3.jpg'), alt: 'Фаршированный осётр Kremleff' },
    { id: 'caviar-tartlets', title: 'Блинчики с икрой', description: 'Лососевая икра в блинных корзиночках с ароматным крем-маслом', price: 890, image: withBasePath('/images/menu-4.jpg'), alt: 'Тарталетки с красной икрой' },
    { id: 'kremleff-crown', title: 'Корона Kremleff', description: 'Эффектно запечённая свиная корейка в фирменной глазировке с огненной подачей', price: 410, image: withBasePath('/images/menu-5.jpg'), alt: 'Запечённая свиная корейка' },
    { id: 'seafood-salad', title: 'Салат с морепродуктами', description: 'Морепродукты, слегка обжаренные в соусе терияки, свежий огурец, кинза, салатный микс и лимон', price: 520, image: withBasePath('/images/menu-6.jpg'), alt: 'Салат с морепродуктами' },
];

/** Серверная граница данных: здесь локальный массив можно заменить запросом к CMS. */
export async function getMenu(): Promise<MenuItem[]> {
    return menuItems;
}
