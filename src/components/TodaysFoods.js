function TodaysFoods(props) {
    return (
        <>
            <h2 className="subtitle">Today's foods</h2>
            <ul>
                {props.todaysFoods.map((todaysFoodsObj) => {
                    return (
                        <li key={todaysFoodsObj.name}>
                            {todaysFoodsObj.quantity} {todaysFoodsObj.name} ={' '}
                            {todaysFoodsObj.calories * todaysFoodsObj.quantity} cal
                        </li>
                    );
                })}
            </ul>
            <strong>
                Total: {' '}
                {props.todaysFoods.reduce(
                    (acc, currentElement) =>
                        acc + currentElement.calories * currentElement.quantity,
                    0
                )}{' '}
                cal
            </strong>
        </>
    );
}

export default TodaysFoods;