import React from 'react';

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Magne-bnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Magne-bnb Plus</p>
        <p>Magne-bnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility </p>
        <p>This is not a real site</p>
        <p>It&apos;s a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Papafam</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Magne React</p>
        <p>Presents</p>
        <p>Zero to Full Stack Hero</p>
        <p>Hundreds of Students</p>
        <p>Join Now</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Investors</p>
        <p>Say Hi Youtube</p>
        <p>Easter Eggs</p>
        <p>For the Win</p>
      </div>
    </div>
  );
};

export default Footer;
