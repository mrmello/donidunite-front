// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import AttachMoney from '@material-ui/icons/AttachMoney';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PieChart from '@material-ui/icons/PieChart';
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
        <AttachMoney />
      </ListItemIcon>
      <ListItemText primary="Financeiro" />
    </ListItem>
    <ListItem button component={NavLink} to="/products">
      <ListItemIcon>
        <ShoppingBasket />
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
        <PieChart />
      </ListItemIcon>
      <ListItemText primary="Relatórios" />
    </ListItem>
    <ListItem button component={NavLink} to="/categories">
      <ListItemIcon>
        <AssessmentIcon />
      </ListItemIcon>
      <ListItemText primary="Categorias" />
    </ListItem>
  </div>
);

