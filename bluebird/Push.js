import { Permissions, Notifications } from 'expo';
import { AsyncStorage, Alert } from 'react-native';

export const Push = async () => {
    try{
        const { status: existingStatus } = await Permissions.getAsync(
                Permissions.NOTIFICATIONS
            );
    
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            // Android remote notification permissions are granted during the app
            // install, so this will only ask on iOS
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
    
        // Stop here if the user did not grant permissions
        if (finalStatus !== 'granted') {
            return;
        }
    
        let token = await Notifications.getExpoPushTokenAsync();
        
        await AsyncStorage.setItem("TOKEN", token);
        
    } catch(error) {
        console.warn(error);
        Alert.alert('토큰 생성 오류', '죄송합니다. 잠시 후 다시 시도해주세요.');
    }
  
}