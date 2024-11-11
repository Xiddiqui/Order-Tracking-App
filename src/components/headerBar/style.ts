import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { AppColors } from "../../constants/colors";
import { fontFamily } from "../../constants/fonts";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    height: responsiveHeight(10),
    width: responsiveWidth(100),
    flexDirection: "row",
        alignItems: "center",
    paddingLeft:responsiveWidth(3)
  },
    headerTxt: {
        color: AppColors.background,
        fontFamily: fontFamily.appTextBold,
        fontSize: responsiveFontSize(2.5),
        marginLeft:responsiveWidth(4)
  },
});