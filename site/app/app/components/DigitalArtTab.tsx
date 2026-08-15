"use client";

import { useState } from "react";
import { artworkCollection, artworkCollectionValue, artworkTotals } from "./digitalArtCollection";

export default function DigitalArtTab() {
  const [selectedId, setSelectedId] = useState(artworkCollection[0].id);
  const selectedArtwork = artworkCollection.find((artwork) => artwork.id === selectedId) ?? artworkCollection[0];

  return (
    <section className="atlas-tab atlas-art-workspace" aria-labelledby="atlas-art-title">
      <header className="atlas-art-register-header">
        <div>
          <p className="atlas-eyebrow">03 / Digital art</p>
          <h1 id="atlas-art-title">Cultural works collection</h1>
          <p className="atlas-art-register-intro">
            A fictional visual register of works, rights and reported values for the Atlas prototype.
          </p>
        </div>
        <dl className="atlas-art-register-summary" aria-label="Collection totals">
          <div>
            <dt>Works</dt>
            <dd>{artworkTotals.works}</dd>
          </div>
          <div><dt>Reported value</dt><dd>{artworkCollectionValue}</dd></div>
          <div>
            <dt>Investors</dt>
            <dd>{artworkTotals.investors}</dd>
          </div>
          <div>
            <dt>Shareholders</dt>
            <dd>{artworkTotals.shareholders}</dd>
          </div>
        </dl>
      </header>

      <div className="atlas-art-gallery-layout">
        <div className="atlas-art-gallery" role="list" aria-label="Artwork collection">
          {artworkCollection.map((artwork) => {
            const isSelected = artwork.id === selectedArtwork.id;
            return (
              <button
                className={`atlas-art-card${isSelected ? " is-selected" : ""}`}
                key={artwork.id}
                onClick={() => setSelectedId(artwork.id)}
                type="button"
                role="listitem"
                aria-pressed={isSelected}
              >
                <img src={artwork.image} alt={`${artwork.title}, fictional collection artwork`} />
                <span className="atlas-art-card-overlay" />
                <span className="atlas-art-card-copy">
                  <small>{artwork.id}</small>
                  <strong>{artwork.title}</strong>
                  <em>{artwork.artist}</em>
                </span>
              </button>
            );
          })}
        </div>

        <aside className="atlas-art-selected-work" aria-live="polite">
          <div className="atlas-art-selected-image">
            <img src={selectedArtwork.image} alt={`${selectedArtwork.title}, fictional collection artwork`} />
            <div className="atlas-art-investor-count" aria-label={`${selectedArtwork.investors} investors`}>
              <strong>{selectedArtwork.investors}</strong>
              <span>investors</span>
            </div>
          </div>
          <div className="atlas-art-selected-copy">
            <p className="atlas-mono-label">Selected work / {selectedArtwork.id}</p>
            <h2>{selectedArtwork.title}</h2>
            <p>{selectedArtwork.artist} · {selectedArtwork.medium}</p>
            <dl>
              <div><dt>Reported value</dt><dd>{selectedArtwork.valuation}</dd></div>
              <div><dt>Rights status</dt><dd>Documented</dd></div>
              <div><dt>Participants</dt><dd>{selectedArtwork.investors} investors · {selectedArtwork.shareholders} shareholders</dd></div>
            </dl>
          </div>
        </aside>
      </div>

      <footer className="atlas-wireframe-note">
        <span>Fictional collection</span>
        <span>Generated visual studies</span>
        <span>Reported values only</span>
      </footer>
    </section>
  );
}
