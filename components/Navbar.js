import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import { NavLink } from 'react-router-dom';

function NavBar(props) {

    return (
        <List component="nav">
            <ListItem component="div">

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <NavLink exact to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Home
                        </NavLink>
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <NavLink exact to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Blog
                        </NavLink>
                    </TypoGraphy>
                </ListItemText>

                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        <NavLink exact to="/scrivimi" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Contattami
                        </NavLink>
                    </TypoGraphy>
                </ListItemText>

            </ListItem >

        </List>
    )
}

export default NavBar;
