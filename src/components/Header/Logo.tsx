import React from 'react';
import { withBasePath } from '@/shared/lib/with-base-path';

const Logo: React.FC = () => (
    <a href="#" className="logo">
        <img
            src={withBasePath('/images/krem-logo.png')}
            width={80}
            height={25}
            alt="Kremleff"
        />
    </a>
);

export default Logo;
