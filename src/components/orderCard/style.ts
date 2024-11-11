import { StyleSheet } from "react-native";
import {
    responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { AppColors } from "../../constants/colors";
import { fontFamily } from "../../constants/fonts";

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    marginTop: responsiveHeight(1),
    width: responsiveWidth(90),
    height: responsiveHeight(10),
    borderRadius: responsiveWidth(3),
    alignSelf: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
  },
  iconView: {
    backgroundColor: AppColors.secondary,
    height: responsiveWidth(12),
    width: responsiveWidth(12),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: responsiveWidth(3),
    marginLeft: responsiveWidth(5),
  },
  statusView: {
    backgroundColor: AppColors.secondary,
    height: responsiveHeight(3),
    width: responsiveWidth(20),
    borderRadius: responsiveWidth(4),
    alignItems: "center",
    justifyContent: "center",
  },
  orderIdTxt: {
    color: AppColors.onBackGround,
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(2.2),
    marginBottom: responsiveHeight(1),
  },
  orderIdView: {
    width: responsiveWidth(45),
    marginLeft: responsiveWidth(2),
  },
    statusTxt: {
        color: AppColors.primary,
        fontFamily: fontFamily.appTextRegular,
        fontSize:responsiveFontSize(1.7)
  },
});
