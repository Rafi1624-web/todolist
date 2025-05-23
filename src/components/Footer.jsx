import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="border-t pt-8 pb-8 text-center text-sm bg-lime-700">
                <p className="mb-2">© 2025 PaperPallet – Curators of Brand Identity</p>
                <p className="mb-1">Branding | Custom Stationery | Corporate Gifts</p>
                <p className="text-white">
                    <a href="#" className="underline mr-2">
                        Privacy Policy
                    </a>
                    <a href="#" className="underline">
                        Terms of Service
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default Footer;
