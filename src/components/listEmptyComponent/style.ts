import { StyleSheet } from "react-native";
import { AppColors } from "../../constants/colors";
import { fontFamily } from "../../constants/fonts";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
    alignItems: "center",
    justifyContent: "center",
  },
    txt: {
        fontFamily: fontFamily.appTextMedium,
        fontSize: responsiveFontSize(2),
        color:AppColors.onBackGround
  },
});