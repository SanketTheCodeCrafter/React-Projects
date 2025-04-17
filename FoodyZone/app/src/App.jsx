import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const App = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch('http://localhost:9000/');
        const data = await response.json();
        setFoods(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching food data:", error);
        setLoading(false);
      }
    };

    fetchFoodData();
  }, []);

  return (
    <>
      <Container>      
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="search">
            <input type="text" placeholder='Search food...' />
          </div>
        </TopContainer>
        <FilterContainer>
          <Button>All</Button>
          <Button>Breakfast</Button>
          <Button>Lunch</Button>
          <Button>Dinner</Button>
        </FilterContainer>

        <FoodContainer>
          <FoodCards>
            {loading ? (
              <p>Loading...</p>
            ) : (
              foods.map((food) => (
                <FoodCard key={food.name}>
                  <div className="food_image">
                    <img src={`http://localhost:9000${food.image}`} alt={food.name} />
                  </div>
                  <div className="food_info">
                    <div className="info">
                      <h3>{food.name}</h3>
                      <p>{food.text}</p>
                    </div>
                    <Button>${food.price}.00</Button>
                  </div>
                </FoodCard>
              ))
            )}
          </FoodCards>
        </FoodContainer>
      </Container>
    </>
  )
}

export default App

const Container=styled.div`
  max-height: 1200px;
  margin: 0 auto;
`

const TopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 80px;
  background-color: #323334;
  /* box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); */
  position: sticky;
  top: 0;
  z-index: 100;

  .logo {
    img {
      width: 200px;
      transition: transform 0.3s ease;
      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .search {
    input {
      width: 300px;
      padding: 12px 15px;
      border-radius: 8px;
      border: 2px solid #c93636;
      background-color: rgba(255, 255, 255, 0.05);
      color: white;
      font-weight: 300;
      font-size: 1rem;
      transition: all 0.3s ease;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }

      &:focus {
        outline: none;
        border: 2px solid #ff4747;
        box-shadow: 0 0 10px rgba(201, 54, 54, 0.3);
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
`

const FilterContainer=styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 30px;
  background-color: #323334;
`

const Button=styled.button`
  background-color: #FF4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 300;
  transition: all 0.3s ease;

  &:hover {
    background-color: #db2c2c;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`

const FoodContainer=styled.section`
  background-image: url("./bg.png");
  background-size: cover;
  min-height: calc(100vh - 220px);
  overflow: hidden;
`

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 20px;
  }
`

const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid rgba(255, 255, 255, 0.25);
  border-radius: 19.447px;
  background: rgba(255, 255, 255, 0.073);
  backdrop-filter: blur(10px);
  padding: 8px;
  display: flex;
  gap: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .food_image {
    width: 133px;
    height: 133px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 3px solid #FF4343;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
      
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    flex: 1;
    padding: 8px;

    .info {
      width: 100%;
      h3 {
        margin-top: 8px;
        font-size: 18px;
        font-weight: 600;
        color: #ffffff;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        letter-spacing: 0.5px;
      }
      p {
        margin-top: 4px;
        font-size: 13px;
        color: #e6e6e6;
        line-height: 1.4;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
      }
    }

    button {
      padding: 8px 16px;
      font-weight: 500;
      font-size: 15px;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 160px;
  }
`