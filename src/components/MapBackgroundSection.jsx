import React, { useState } from "react";
import styles from "./MapBackgroundSection.module.css";

const MapBackgroundSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("All Areas");

  const handleSearch = () => {
    if (searchTerm) {
      alert(`Searching for "${searchTerm}" in ${selectedArea}`);
    } else {
      alert("Please enter a search term");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const featureCards = [
    {
      icon: "fas fa-shield-alt",
      title: "Certified Partners",
      description:
        "All printing centers are verified and certified for quality standards.",
      iconColor: styles.iconBlue,
      bgColor: styles.bgBlue,
    },
    {
      icon: "fas fa-bolt",
      title: "Fast Turnaround",
      description: "Quick service delivery with real-time order tracking.",
      iconColor: styles.iconGreen,
      bgColor: styles.bgGreen,
    },
    {
      icon: "fas fa-trophy",
      title: "Premium Quality",
      description: "Enterprise-grade materials and professional finishing.",
      iconColor: styles.iconPurple,
      bgColor: styles.bgPurple,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <h1 className={styles.title}>Professional Printing Partners</h1>

        <p className={styles.subtitle}>
          Connect with certified business printing centers offering
          enterprise-grade solutions for all your corporate document needs.
        </p>

        <div className={styles.searchContainer}>
          <div className={styles.searchInput}>
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search for printing services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>

          <div className={styles.filterContainer}>
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
            >
              <option value="All Areas">All Areas</option>
              <option value="Downtown">Downtown</option>
              <option value="Business District">Business District</option>
              <option value="Industrial Zone">Industrial Zone</option>
              <option value="Suburban">Suburban</option>
            </select>
            <div className={styles.selectArrow}>
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>

          <button className={styles.searchButton} onClick={handleSearch}>
            Search
          </button>
        </div>

        <div className={styles.featuresGrid}>
          {featureCards.map((card, index) => (
            <div key={index} className={styles.featureCard}>
              <div
                className={`${styles.iconContainer} ${card.bgColor} ${card.iconColor}`}
              >
                <i className={card.icon}></i>
              </div>
              <h3 className={styles.featureTitle}>{card.title}</h3>
              <p className={styles.featureDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapBackgroundSection;
