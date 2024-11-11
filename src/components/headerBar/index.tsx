import { View, Text, ViewProps } from 'react-native'
import React from 'react'
import { styles } from './style';
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppColors } from '../../constants/colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

interface HeaderBarProps extends ViewProps {
    onPress: () => void;
    title:String
  [key: string]: any;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ onPress,title }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back"
        color={AppColors.background}
        size={responsiveFontSize(3)}
        onPress={onPress}
      />
      <Text style={styles.headerTxt}>{title}</Text>
    </View>
  );
};

export default HeaderBar;