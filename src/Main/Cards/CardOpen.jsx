
import React from 'react';
 

const MainComponent = ({ data, category, basket, setBasket, addBasket }) => {
    const filteredData = data.filter(item => item.category === category);

    return (
        <div>
            {filteredData.map((item, i) => (
                <Card key={i} {...item} basket={basket} setBasket={setBasket} addBasket={addBasket} />
            ))}
        </div>
    );
};

export default MainComponent;
