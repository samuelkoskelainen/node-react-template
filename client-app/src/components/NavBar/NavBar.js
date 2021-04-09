import { Grid } from 'semantic-ui-react';
import NavBarDesktop from './NavBarDesktop';
import NavBarMobileTablet from './NavBarMobileTablet';

const NavBar = () => {
  return (
    <Grid style={{ marginBottom: '5em' }}>
      <Grid.Column only="tablet computer" width="16">
        <NavBarDesktop />
      </Grid.Column>
      <Grid.Column only="mobile" mobile="16">
        <NavBarMobileTablet />
      </Grid.Column>
    </Grid>
  );
};

export default NavBar;
