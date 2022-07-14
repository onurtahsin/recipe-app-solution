import { HeaderText, HomeImg, ImgDiv } from './Home.style';
import axios from 'axios';
import { useState } from 'react';
import Header from '../../components/header/Header';
import Cards from '../../components/cards/Cards';
import homeSvg from '../../assets/home.svg';

const Home = () => {
  const mealType = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];
  const [query, setQuery] = useState('egg');
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
  const [recipes, setRecipes] = useState(null);

  // const APP_ID = 'd39fc8f5';
  // const APP_KEY = '383666bc2947bf87b0a72fa8ec624b7d';

  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_APPKEY;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios.get(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('Please Enter your meal');
    }
  };

  // console.log(recipes);
  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}

      {recipes?.length === 0 && (
        <HeaderText>The Food can not be found</HeaderText>
      )}

      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
};

export default Home;

