import Footer from '@/components/shared/Footer';
import Nav from '@/components/shared/Nav';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Nav/>
            {children}
            <Footer/>
        </div>
    );
};

export default layout;