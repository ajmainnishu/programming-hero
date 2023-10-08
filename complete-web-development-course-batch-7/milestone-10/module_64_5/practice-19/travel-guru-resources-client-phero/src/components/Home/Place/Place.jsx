const Place = ({ place, handleClick }) => {
  const { place_name, id, image } = place;
  // pass id by button
  const handleClickId = handleClick
  return (
    <div>
      <button onClick={() => handleClickId(`${id}`)} className="relative hover:border-yellow-500 border-2 border-transparent rounded-2xl shadow-2xl" >
        <img className="rounded-2xl " style={{ width: '270px', height: '416px' }} src={image} alt="" />
        <p style={{fontFamily: 'Bebas Neue'}} className="absolute bottom-9 left-5 text-white text-4xl font-normal uppercase">{place_name}</p>
      </button>
    </div>
  );
};

export default Place;