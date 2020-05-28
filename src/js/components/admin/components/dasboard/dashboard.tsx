import React from 'react';
import Card from './card'
import imga from "./images.jpeg";
import MiniReport from './mini_report'
import TopProduct from './Top_procucts'
import Activity from './activity'



export const Dashboard = () => {
    return (
        <div  className="dash_layout_main" >
            <div className="dash_layout_inner_container">
                <div className="dash_card_layout">
                    <Card title="sales" value="$24000" />
                    <Card title="Orders" value="12" />
                </div>
                <MiniReport />
                <TopProduct />
            </div >
            
            <div className="activity_flex_container">
                <Activity />
            </div>    




        </div>


    )
} 