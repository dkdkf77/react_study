import React from "react";
import FooterLogo from './footerLogo'
import FooterGroup from './footerGroup'


function Footer() {
    return (
        <div className='footer'>
            <div className="footerIn">
                <FooterLogo />
                <div>
                    <FooterGroup />
                </div>
            </div>

        </div>
    )
}

export default Footer