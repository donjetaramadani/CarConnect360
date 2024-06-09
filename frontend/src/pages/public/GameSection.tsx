import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './stylehome.css';
import $ from 'jquery';

const GameSection: React.FC = () => {
  useEffect(() => {
    if ($.fn && ($.fn as any).owlCarousel) {
      ($('.custom-carousel') as any).owlCarousel({
        autoWidth: true,
        loop: true
      });
    }
  }, []);

  return (
    <section className="game-section">
      <h2 className="line-title">Trending Games</h2>
      <div className="owl-carousel custom-carousel owl-theme">
        {/* Add your OwlCarousel items here */}
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
      </div>
    </section>
  );
};

export default GameSection;
