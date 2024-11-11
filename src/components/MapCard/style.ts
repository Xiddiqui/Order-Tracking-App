import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import { fontFamily } from "../../constants/fonts";
import { AppColors } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.background,
    height: responsiveHeight(30),
    marginTop: responsiveHeight(60),
  },
  heading: {
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(2.5),
    textAlign: "center",
    marginTop: responsiveHeight(1),
    color: AppColors.onBackGround,
  },
    timerText: {
        textAlign: 'center',
        fontFamily: fontFamily.appTextExtraBold,
        fontSize: responsiveFontSize(6),
        marginTop:responsiveHeight(3)
  },
});