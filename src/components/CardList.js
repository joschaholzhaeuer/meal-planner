import Card from './Card';

const CardList = ({ meals }) => {
  return (
    meals.map((meal, i) => (
      <Card key={i} meal={meal} />
    ))
  )
}

export default CardList;
