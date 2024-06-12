import React from "react";
import './ExploreMenu.css';
// @ts-ignore
import { menu_list } from '../../../assets/assetsi/frontend_assets/assets.js';

interface ExploreMenuProps {
    category: string;
    setCategory: (category: string) => void;
}

const ExploreMenu: React.FC<ExploreMenuProps> = ({ category, setCategory }) => {
    return (
        <div className="explore-menu" id="explore-menu">
            <h1>Explore</h1>
            <p className="explore-menu-text">ncdknslncslkcn</p>
            <div className="explore-menu-list">
                {menu_list.map((item: { menu_image: string, menu_name: string }, index: number) => {
                    return (
                        <div onClick={() => setCategory(item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category==item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu;
