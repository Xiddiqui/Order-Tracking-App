import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from "react-native-responsive-dimensions";
import { AppColors } from "../../constants/colors";
import { fontFamily } from "../../constants/fonts";

export const styles = StyleSheet.create({
    input: {
        backgroundColor: AppColors.background,
        width: responsiveScreenWidth(90),
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: responsiveWidth(3),
        height: responsiveHeight(6),
        borderColor: AppColors.primary,
        fontFamily: fontFamily.appTextRegular,
        fontSize: responsiveFontSize(2.3),
        paddingLeft: responsiveWidth(2),
        marginTop:responsiveHeight(4)
    }
})