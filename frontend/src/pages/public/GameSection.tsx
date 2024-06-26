import React, { useEffect } from 'react';
import './stylegame.css';

const GameSection: React.FC = () => {
  useEffect(() => {
    // Dynamically load jQuery and Owl Carousel scripts
    const loadScripts = () => {
      const jqueryScript = document.createElement('script');
      jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
      jqueryScript.onload = () => {
        const owlCarouselScript = document.createElement('script');
        owlCarouselScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
        owlCarouselScript.onload = initializeCarousel;
        owlCarouselScript.onerror = handleScriptError;
        document.body.appendChild(owlCarouselScript);
      };
      jqueryScript.onerror = handleScriptError;
      document.body.appendChild(jqueryScript);
    };

    // Initialize Owl Carousel once scripts are loaded
    const initializeCarousel = () => {
      if ($.fn && ($.fn as any).owlCarousel) {
        $('.custom-carousel').owlCarousel({
          autoWidth: true,
          loop: true
        });
      } else {
        console.error('Owl Carousel is not loaded properly');
      }
    };

    // Handle script loading errors
    const handleScriptError = () => {
      console.error('Error loading scripts');
    };

    // Load scripts when component mounts
    loadScripts();
  }, []);

  return (
    <section className="game-section">
      <h2 className="line-title">Popular Vehicles</h2>
      <div className="owl-carousel custom-carousel owl-theme">
        <div className="item">
          <img src="https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg" alt="Dota 2" />
          <div className="item-desc">
            <h3>Dota 2</h3>
            <p>Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
          </div>
        </div>
        <div className="item">
          <img src="https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg" alt="The Witcher 3" />
         {/* <div className="item-desc">
            <h3>The Witcher 3</h3>
            <p>The Witcher 3: Wild Hunt is an action role-playing game developed by CD Projekt Red. It is the third game in the series based on The Witcher series of fantasy novels by Andrzej Sapkowski.</p>
          </div>*/}
        </div>
        <div className="item" style={{backgroundImage: 'url(https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg)'}}>
          {/*  <div className="item-desc">
            <h3>The Witcher 3</h3>
            <p>The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
          </div>*/}
        </div>
        <div className="item" style={{backgroundImage: 'url(https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg)'}}>
          {/*  <div className="item-desc">
            <h3>The Witcher 3</h3>
            <p>The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
          </div>*/}
        </div>
        <div className="item" style={{backgroundImage: 'url(https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg)'}}>
          {/*  <div className="item-desc">
            <h3>The Witcher 3</h3>
            <p>The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
          </div>*/}
        </div>
        <div className="item" style={{backgroundImage: 'url(https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg)'}}>
          {/*  <div className="item-desc">
            <h3>The Witcher 3</h3>
            <p>The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
          </div>*/}
        </div>
        <div className="item" style={{backgroundImage: './car.jpg'}}>
          {/*  <div className="item-desc">
            <h3>The Witcher 3</h3>
            <p>The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.</p>
          </div>*/}
        </div>
        {/* Add more OwlCarousel items as needed */}
      </div>
    </section>
  );
};

export default GameSection;
