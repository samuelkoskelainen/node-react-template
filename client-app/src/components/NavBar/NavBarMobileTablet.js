import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, Icon, Menu, Sticky } from 'semantic-ui-react';

const NavBarMobileTablet = () => {
  const [burgerIcon, setBurgerIcon] = useState(true);

  return (
    <Sticky>
      <Menu fixed="top" pointing secondary style={{ backgroundColor: 'white' }}>
        <Dropdown
          button
          onClick={() => {
            setBurgerIcon(!burgerIcon);
          }}
          onClose={() => {
            setBurgerIcon(true);
          }}
          icon={burgerIcon ? 'bars' : 'times'}
          style={{ backgroundColor: 'white', color: 'black' }}
        >
          <Dropdown.Menu>
            <Dropdown.Item text="Home" as={NavLink} exact to="/" />
            <Dropdown.Item text="Notes" as={NavLink} to="/notes" />
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Menu position="right">
          <Icon
            name="sticky note outline"
            size="large"
            style={{ marginTop: '9px', marginRight: '-10px' }}
          />
          <Menu.Item name="Notes App" />
        </Menu.Menu>
      </Menu>
    </Sticky>
  );
};

export default NavBarMobileTablet;
