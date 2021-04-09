import { NavLink } from 'react-router-dom';
import { Icon, Menu, Sticky } from 'semantic-ui-react';

const NavBarDesktop = () => {
  return (
    <Sticky>
      <Menu fixed="top" pointing secondary style={{ backgroundColor: 'white' }}>
        <Menu.Item name="Home" as={NavLink} exact to="/" />
        <Menu.Item name="Notes" as={NavLink} to="/notes" />
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

export default NavBarDesktop;
