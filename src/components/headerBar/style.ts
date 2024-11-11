import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { AppColors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.primary,
        height: responsiveHeight(10),
        width: responsiveWidth(100),
        flexDirection: 'row',
        alignItems:'center',
    }
})