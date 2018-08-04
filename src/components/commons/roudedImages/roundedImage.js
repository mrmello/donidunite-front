import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

const RoundedImage = ({ classes, image, alt }) => {
  return (
    <Avatar
      alt={alt}
      src={image}
      className={classNames(classes.avatar, classes.bigAvatar)}
    />
  );
}

RoundedImage.propTypes = {
  classes: PropTypes.object.isRequired,
  alt: PropTypes.string,
  image: PropTypes.string.isRequired
};

export default withStyles(styles)(RoundedImage);
