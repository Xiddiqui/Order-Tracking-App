import { StyleSheet } from "react-native";
import { AppColors } from "../../constants/colors";
import { responsiveHeight } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  container: {
        ...StyleSheet.absoluteFillObject,
    marginTop:responsiveHeight(10),
    height: 400,
    width: '100%',
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});