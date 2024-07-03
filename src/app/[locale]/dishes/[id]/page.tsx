const DishesDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <h1>Details about dishes {id}</h1>;
};

export default DishesDetails;
