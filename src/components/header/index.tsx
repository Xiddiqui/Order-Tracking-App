import { View, ViewProps } from 'react-native'
import React, { ReactNode } from 'react'
import { styles } from './style';

interface AppHeaderProps extends ViewProps {
  children: ReactNode;
  [key: string]: any;
}

const AppHeader: React.FC<AppHeaderProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default AppHeader;