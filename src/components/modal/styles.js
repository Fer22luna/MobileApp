import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        paddingVertical: 20,
      },
      modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      modalDetailContainer: {
        padddingVertical: 20,
      },
      modalDetailMessage: {
        fontSize: 16,
        color: '#212121' 
      },
      selectedTask: {
        fontSize: 16,
        color: '#212121',
        fontWeight: 'bold',
        paddingVertical: 10,
        textAlign: 'center',
        marginBottom: 30,
      },
      modalButtonContainer: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 30,
      }
});