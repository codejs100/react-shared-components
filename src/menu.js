import React from 'react'
import { NavLink } from 'react-router-dom';

function Menu() {

  const menuItems = () => [
      {
          link: "modal",
          name: "Modal"
      },
      {
          link: "flyout",
          name: "Flyout"
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
