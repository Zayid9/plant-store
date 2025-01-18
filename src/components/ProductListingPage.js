import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const plants = [
  { id: 1, name: 'Snake Plant', price: 20, category: 'Succulents', img: '/images/snake.jpg' },
  // More plants here...
];

const ProductListingPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      {['Succulents', 'Ferns', 'Flowering Plants'].map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="plant-grid">
            {plants.filter(plant => plant.category === category).map(plant => (
              <div key={plant.id}>
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