import React, { useState } from "react";
import "./../styles/FlipCard.css";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentFact, setCurrentFact] = useState("");

  const funFacts = [
    "The average person spends 6 months of their lifetime waiting at red lights",
  "A day on Venus is longer than a year on Venus (243 vs. 225 Earth days)",
  "The inventor of WiFi was inspired by the way chocolate melts (frequency spectrum research)",
  "Your smartphone has more computing power than NASA had for the Apollo 11 moon landing",
  "The 'save' icon (floppy disk) is unrecognizable to 95% of people born after 2000",
  "The entire internet weighs about as much as one strawberry (from electrons in motion)",
  "The first webcam was created to monitor a coffee pot at Cambridge University",
  "There's a species of jellyfish (Turritopsis dohrnii) that is biologically immortal",
  "The Eiffel Tower can be 15cm taller during summer due to thermal expansion",
  "Octopuses have three hearts and blue blood",
  "The longest English word without vowels is 'rhythms"
  ];

  const handleFlip = () => {
    if (!isFlipped) {
      const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
      setCurrentFact(randomFact);
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card-container" onClick={handleFlip}>
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front">
            <h2>Seri</h2>
        </div>

        <div className="flip-card-back">
          <div className="fact-container">
            <div className="fact-icon"><i className="fa-solid fa-lightbulb" style={{ color: "#FFD43B" }}></i></div>
            <p className="fun-fact">
              {currentFact || funFacts[Math.floor(Math.random() * funFacts.length)]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;