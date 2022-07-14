import {
  HeaderContainer,
  MainHeader,
  FormContainer,
  FoodInput,
  Button,
  Select,
} from './Header.style';

const Header = ({ setQuery, setSelectedMeal, mealType, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">SEARCH</Button>
        <Select
          name="mealType"
          id="mealType"
          onChange={(e) => setSelectedMeal(e.target.value)}
        >
          {mealType.map((meal, index) => (
            <option key={index} value={meal.toLowerCase()}>
              {meal}
              {/* //! burada süslü kullanmamazının sebebi tek bir ifade olması eğer süslü kullansaydık returnde koymak zorunda kalırdıkburada sıkıntı çıkmaz ama bazı apilerde sorun çıkartabilir bu yüzden loweCase kullandık */}
            </option>
          ))}
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
