import React from 'react';
import {Header} from 'react-native-elements';
import {COLORS} from '../../constants';
import {styles} from './styles';

const AppBar = () => {
  return (
    <Header
      containerStyle={styles.container}
      leftComponent={{icon: 'menu', color: COLORS.white}}
      centerComponent={{
        text: 'BMI CALCULATOR',
        style: styles.headerTitle,
      }}
    />
  );
};

export default AppBar;
