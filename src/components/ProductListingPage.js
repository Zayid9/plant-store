import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import './styles.css';

const plants = [
  { id: 1, name: 'Snake Plant', price: 20, category: 'Succulents', img: '/images/snake-plant.jpg' },
  { id: 2, name: 'Spider Plant', price: 15, category: 'Ferns', img: '/images/spider-plant.jpg' },
  { id: 3, name: 'Peace Lily', price: 25, category: 'Flowering Plants', img: '/images/peace-lily.jpg' },
  { id: 4, name: 'Aloe Vera', price: 10, category: 'Succulents', img: '/images/aloe-vera.jpg' },
  { id: 5, name: 'Boston Fern', price: 18, category: 'Ferns', img: '/images/boston-fern.jpg' },
  { id: 6, name: 'Orchid', price: 30, category: 'Flowering Plants', img: '/images/orchid.jpg' },
];

const ProductListingPage = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-listing">
      <h1>Our Plants</h1>
      {['Succulents', 'Ferns', 'Flowering Plants'].map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="plant-grid">
            {plants.filter(plant => plant.category === category).map(plant => (
              <div className="plant-card" key={plant.id}>
                <img src={plant.img} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button onClick={() => dispatch(addItem(plant))}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
