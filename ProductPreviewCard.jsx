import React from 'react';
import './ProductPreviewCard.css'; // 👈 Import CSS

export default function ProductPreviewCard({
  product = {},
  onAddToCart,
  className = '',
  bgColor = '#ffffff', // can be solid or gradient
}) {
  const {
    image = '',
    title = 'Product title',
    description = 'Short product description that explains the key benefit.',
    price = null,
    oldPrice = null,
    badge = '',
    rating = null,
  } = product;

  const handleAdd = () => {
    if (typeof onAddToCart === 'function') onAddToCart(product);
  };

  return (
    <article
      className={`ppc ${className}`}
      aria-label={title}
      style={{ background: bgColor }} // ✅ still supports solid or gradient
    >
      <div className="ppc__media">
        {image ? (
          <img className="ppc__img" src={image} alt={title + ' image'} />
        ) : (
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect width="24" height="24" rx="4" fill="#e9e9e9" />
            <path d="M6 15l3-4 2 3 3-4 4 6H6z" fill="#d1d5db" />
          </svg>
        )}
      </div>

      <div className="ppc__body">
        <div className="ppc__title-row">
          <h3 className="ppc__title">{title}</h3>
          {badge ? <span className="ppc__badge">{badge}</span> : null}
        </div>

        <p className="ppc__desc">{description}</p>

        <div className="ppc__price-row">
          {price != null ? (
            <div className="ppc__price">₱{Number(price).toFixed(2)}</div>
          ) : (
            <div className="ppc__price">Contact</div>
          )}
          {oldPrice != null ? <div className="ppc__oldprice">₱{Number(oldPrice).toFixed(2)}</div> : null}
          {rating != null ? <div className="ppc__rating">★ {rating}</div> : null}
        </div>

        <div className="ppc__actions">
          <button className="ppc__btn" type="button">
            View
          </button>
          <button className="ppc__btn ppc__btn--primary" type="button" onClick={handleAdd}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
