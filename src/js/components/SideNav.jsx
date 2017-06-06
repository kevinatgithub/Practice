import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from 'antd/lib/menu';

const SideNav = ({ links }) => {
    const { Item } = Menu;
    return (
      <Menu >
        {links.map(link => (
          <Item key={link.path}>
            <Link className="list-group-item" to={link.path}>{link.title}</Link>
          </Item>
        ))}
      </Menu>
    );
};

SideNav.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        component: PropTypes.component,
    })).isRequired,
};


export default SideNav;
