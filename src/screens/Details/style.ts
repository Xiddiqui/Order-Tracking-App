import { StyleSheet } from "react-native";
import { AppColors } from "../../constants/colors";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { Card } from "react-native-paper";

export const styles = StyleSheet.create({
  container: {
        ...StyleSheet.absoluteFillObject,
    marginTop:responsiveHeight(10),
    height: responsiveHeight(60),
    width: '100%',
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    },
});