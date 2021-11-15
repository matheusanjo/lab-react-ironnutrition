import { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';

import foodsSrc from '../foods.json';

import FoodBox from './FoodBox';
import Form from './Form';
import SearchBar from './SearchBar';
import TodaysFood from './TodaysFoods';

function App() {
  const [foodsBkp, setFoodsBkp] = useState(foodsSrc);
  const [foods, setFoods] = useState(foodsSrc);
  const [showForm, setShowForm] = useState(false);
  const [todaysFoods, setTodaysFoods] = useState([]);

  useEffect(() => {
    setFoods([...foodsBkp]);
  }, [foodsBkp]);

  function filterFoods(searchTerm) {
    const filtered = foodsBkp.filter((currentFoodObj) => {
      return (
        currentFoodObj.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    });

    setFoods(filtered);
  }

  function addTodaysFood(foodObj) {
    const foodObjIndex = todaysFoods.findIndex(
      (currentFoodObj) => currentFoodObj.name === foodObj.name
    );

    if (foodObjIndex > -1) {
      const todaysFoodClone = [...todaysFoods];

      const foodObjToUpdate = todaysFoodClone[foodObjIndex];

      foodObjToUpdate.quantity = foodObjToUpdate.quantity + foodObj.quantity;

      return setTodaysFoods(todaysFoodClone);
    }

    setTodaysFoods([...todaysFoods, foodObj]);
  }

  return (
    <div className="container">
      <h1 class="title">IronNutrition</h1>
      <div>
        <SearchBar fuilterFoods={filterFoods} />
      </div>
      <div className="column">
        <button
          onClick={() => setShowForm(!showForm)}
          className="button is-link"
        >
          Add Food
        </button>
        {showForm ? <Form food={foodsBkp} setFoods={setFoodsBkp} /> : null}
      </div>

      <div className="columns">
        <div className="column">
          {foods.map((currentFoodObj) => (
            <FoodBox
              key={currentFoodObj.name}
              name={currentFoodObj.name}
              calories={currentFoodObj.calories}
              image={currentFoodObj.image}
              addTodaysFood={addTodaysFood}
            />
          ))}
        </div>
        <div className="column content">
          <TodaysFood todaysFoods={todaysFoods} />
        </div>
      </div>
    </div>
  );
}

export default App;
