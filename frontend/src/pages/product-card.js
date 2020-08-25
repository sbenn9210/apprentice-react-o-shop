import React from 'react';

function ProductCard(props) {
  const { title, image, price } = props;

  return (
    <div className="col-lg-4 col-sm-12 pt-5">
      {title && (
        <div className="card">
          {image && <img src={image} alt="product" className="card-img-top" />}
          <div className="card-body">
            <p className="card-text">{title ? title : ''}</p>
            <p className="card-text">{price ? `$ ${price}` : ''}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
