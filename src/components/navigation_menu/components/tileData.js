// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { NavLink } from 'react-router-dom';

export const mailFolderListItems = (
  <div>
    <ListItem button component={NavLink} to="/home">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={NavLink} to="/financial">
      <ListItemIcon>
        <TrendingUpIcon />
      </ListItemIcon>
      <ListItemText primary="Financeiro" />
    </ListItem>
    <ListItem button component={NavLink} to="/products">
      <ListItemIcon>
        <ShoppingBasketIcon />
      </ListItemIcon>
      <ListItemText primary="Produtos"/>
    </ListItem>
    <ListItem button component={NavLink} to="/orders">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Pedidos" />
    </ListItem>
    <ListItem button component={NavLink} to="/reports">
      <ListItemIcon>
        <AssessmentIcon />
      </ListItemIcon>
      <ListItemText primary="Relatórios" />
    </ListItem>
  </div>
);

