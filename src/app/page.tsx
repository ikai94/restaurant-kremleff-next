import About from '@/components/About/About';
import Event from '@/components/Event/Event';
import Features from '@/components/Features/Features';
import Footer from '@/components/Footer/Footer';
import BackToTopButton from '@/components/Header/BackToTopButton';
import Header from '@/components/Header/Header';
import HeroSlider from '@/components/HeroSlider/HeroSlider';
import Menu from '@/components/Menu/Menu';
import Reviews from '@/components/Reviews/Reviews';
import Services from '@/components/Services/Services';
import SpecialDish from '@/components/SpecialDish/SpecialDish';
import TopBar from '@/components/TopBar/TopBar';
import { getMenu } from '@/entities/menu/api/get-menu';

export default async function HomePage() {
    const menuItems = await getMenu();
    return (
        <>
            <TopBar />
            <Header />
            <main>
                <HeroSlider />
                <Services />
                <About />
                <SpecialDish />
                <Menu items={menuItems} />
                <Reviews />
                <Features />
                <Event />
            </main>
            <Footer />
            <BackToTopButton />
        </>
    );
}
