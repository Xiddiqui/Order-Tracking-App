import { View, Text, TouchableOpacity, ViewProps } from "react-native";
import React from "react";
import { styles } from "./style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AppColors } from "../../constants/colors";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { ProgressBar } from "react-native-paper";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

interface OrderCardProps extends ViewProps {
    onPress: () => void;
    orderId: String;
    status: String;
  [key: string]: any;
}

const OrderCard: React.FC<OrderCardProps> = ({ onPress, orderId, status }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconView}>
        {status == "Pending" ? (
          <FontAwesome6
            name={"people-carry-box"}
            color={AppColors.primary}
            size={responsiveFontSize(4)}
          />
        ) : status == "Delivered" ? (
          <MaterialIcons
            name="verified-user"
            color={AppColors.primary}
            size={responsiveFontSize(4)}
          />
        ) : (
          <MaterialCommunityIcons
            name={"truck-fast"}
            color={AppColors.primary}
            size={responsiveFontSize(4)}
          />
        )}
      </View>
      <View style={styles.orderIdView}>
        <Text style={styles.orderIdTxt}>{orderId}</Text>
        <ProgressBar
          progress={status === "Pending" ? 0.2 : status == "In Transit" ? 0.5 : 1}
          color={AppColors.primary}
        />
      </View>
      <View style={styles.statusView}>
        <Text style={styles.statusTxt}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;
