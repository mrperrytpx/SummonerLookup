const Item = ({ item, version, idx }) => {
	return (
		<div className={`${item} item`}>
			{item ? <img className="item-image" src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item}.png`} alt={`Item slot ${idx + 1}`} /> : <div></div>}
		</div>
	);
}

export default Item;