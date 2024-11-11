import { View, Text, TouchableOpacity, ViewProps } from "react-native";
import React from "react";
import { styles } from "./style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AppColors } from "../../constants/colors";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { ProgressBar } from "react-native-paper";

interface OrderCardProps extends ViewProps {
  onPress: () => void;
  [key: string]: any;
}

const OrderCard: React.FC<OrderCardProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconView}>
        <MaterialCommunityIcons
          name={"truck-fast"}
          color={AppColors.primary}
          size={responsiveFontSize(4)}
        />
      </View>
      <View style={styles.orderIdView}>
        <Text style={styles.orderIdTxt}>NB145618X8S</Text>
        <ProgressBar progress={0.5} color={AppColors.primary} />
      </View>
      <View style={styles.statusView}>
        <Text style={styles.statusTxt}>In transit</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;
