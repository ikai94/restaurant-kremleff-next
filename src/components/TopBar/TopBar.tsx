import { IonIcon } from '@ionic/react';
import {
    locationOutline,
    callOutline,
    mailOutline,
} from 'ionicons/icons';

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="container">
                <address className="topbar-item">
                    <div className="icon">
                        <IonIcon icon={locationOutline} aria-hidden="true" />
                    </div>
                    <span className="span">Краснодар, ул.Мачуги,142</span>
                </address>

                <div className="topbar-item item-2"></div>

                <a href="tel:+79002626900" className="topbar-item link">
                    <div className="icon">
                        <IonIcon icon={callOutline} aria-hidden="true" />
                    </div>
                    <span className="span">+7 (900) 26 26 900</span>
                </a>

                <div className="separator"></div>

                <a
                    href="mailto:restaurant-kremleff@yandex.ru"
                    className="topbar-item link"
                >
                    <div className="icon">
                        <IonIcon icon={mailOutline} aria-hidden="true" />
                    </div>
                    <span className="span">restaurant-kremleff@yandex.ru</span>
                </a>
            </div>
        </div>
    );
};

export default TopBar;
