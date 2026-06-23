import { useEffect, useState } from 'react';
import { IonIcon } from '@ionic/react';
import { chevronUpOutline } from 'ionicons/icons';

const BackToTopButton: React.FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        const onScroll = () => setIsActive(window.scrollY >= 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: 'smooth' as ScrollBehavior });

    return (
        <button
            className={`back-top-btn ${isActive ? 'active' : ''}`}
            onClick={scrollToTop}
            data-back-top-btn
            aria-label="Back to top"
        >
            <IonIcon icon={chevronUpOutline} />
        </button>
    );
};

export default BackToTopButton;
