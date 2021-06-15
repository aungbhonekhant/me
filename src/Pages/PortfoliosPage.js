import React, { useState } from 'react';
import Title from '../Components/Title';
import Categories from '../Components/Categories';
import MenuItems from '../Components/Menuitems';
import portfolios from '../Components/allportfolios';

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

function PortfoliosPage() {

    const[ categories, setCategories ] = useState(allCategories);
    const[ menus, setMenus ] = useState(portfolios);

    const filter = category => {
        if(category === 'All'){
            setMenus(portfolios);
            return;
        }
        const filteredData = portfolios.filter(item =>{
            return item.category === category;
        });
        setMenus(filteredData);
    }

    return (
        
        <div className="PortfoliosPage">
            <div className="portfolio-title">
                <Title title="Portfolios" span="Portfolios" />
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menus} />
            </div>
        </div>
    )
}

export default PortfoliosPage
