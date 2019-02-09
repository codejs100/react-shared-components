import React from 'react'
import { NavLink } from 'react-router-dom';

function Menu() {

  const menuItems = () => [
      {
          link: "model",
          name: "Model"
      }
  ];   
  return (
    <div>
      <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {
            menuItems().map(item => (
            
            <li key={item.link}>
                <NavLink to={'/' + item.link}>{item.name}</NavLink>
            </li>
            ))
          }
          
      </ul>
    </div>
  )
}


export default Menu;
