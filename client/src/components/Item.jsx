const Item = ({ item, version }) => {
    return (
        <div className={`${item} item`}>
            {item ? <img className="item-image" src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item}.png`} alt="Item slot 1" /> : <div></div>}
        </div>
    );
}

export default Item;