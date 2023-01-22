import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#E5E0FF',
        marginBottom: 10,
        borderRadius: 10,
      },
      checkbox:{
        marginRight:10
      },
      itemList: {
        fontSize: 16,
        color: 'black',
        fontWeight: "normal"
      },
      checkTask:{
        fontSize:18,
        color:"#FF1E1E",
        textAlign:"auto",
        marginLeft:10,
      }
})