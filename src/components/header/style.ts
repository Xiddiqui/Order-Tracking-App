import { StyleSheet } from "react-native";
import { AppColors } from "../../constants/colors";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.primary,
        height: responsiveHeight(15),
        borderBottomRightRadius:responsiveWidth(10)
    }
})