import React, { useState, useEffect } from 'react';
import { StyleSheet, Pressable, Text, View, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Profilefiled from '../components/profile_filed';
import CustomButton from '../components/custom_button';

const ProfileScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
      const { status: mediaStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (cameraStatus !== 'granted' || mediaStatus !== 'granted') {
        Alert.alert('Permission Denied', 'Camera and Media Library permissions are required!');
      }
    })();
  }, []);
  const handleTakeProfilePhoto = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log('Result of taking photo:', result);
  
      if (result.assets && result.assets.length > 0) {
        const selectedImageUri = result.assets[0].uri;
        setProfileImage(selectedImageUri);
      } else if (result.uri) {
        setProfileImage(result.uri);
      } else {
        console.warn('No valid image URI found in result:', result);
      }
    } catch (error) {
      console.error('Error taking profile photo:', error);
      Alert.alert('Error', 'Failed to take profile photo. Please try again.');
    }
  };
  

  const launchImageLibrary = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setProfileImage(result.uri);
      }
    } catch (error) {
      console.error('Error choosing profile photo:', error);
      Alert.alert('Error', 'Failed to choose profile photo. Please try again.');
    }
  };


  const handleSave = () => {
    console.log('Save button pressed');

  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.avatar} onPress={handleTakeProfilePhoto}>
        <Image
          style={styles.img}
          source={profileImage ? { uri: profileImage } : require("../../../assets/Profile-PNG-File.png")}
        />

        <Text style={styles.profileText}>Change Profile Photo</Text>
      </Pressable>

      <View style={styles.body}>
        {/* Replace Profilefiled components with actual fields */}
        <Profilefiled
          placeholder='Username'
          onChangeText={(text) => {
            // Implement your logic
          }}
          secureTextEntry={false}
        />
        <Profilefiled
          placeholder='First Name'
          onChangeText={(text) => {
            // Implement your logic
          }}
          secureTextEntry={false}
        />
        <Profilefiled
          placeholder='Last Name'
          onChangeText={(text) => {
            // Implement your logic
          }}
          secureTextEntry={false}
        />
        <Profilefiled
          placeholder='Email id'
          onChangeText={(text) => {
            // Implement your logic
          }}
          secureTextEntry={false}
        />
        <Profilefiled
          placeholder='Change Password'
          onChangeText={(text) => {
            // Implement your logic
          }}
          secureTextEntry={false}
        />

        <View><Text style={styles.iamtext}>I am a</Text></View>
        <View style={styles.radioButtons}>
          <Pressable
            style={[styles.radioButton, selectedOption === 'medium_report' ? styles.radioButtonSelected : null]}
            onPress={() => setSelectedOption('medium_report')}
          >
            {selectedOption === 'medium_report' && <Text style={styles.radioButtonIcon}>✓</Text>}
          </Pressable>
          <Text style={styles.radioButtonText}>Medium Report</Text>

          <Pressable
            style={[styles.radioButton, selectedOption === 'visitor' ? styles.radioButtonSelected : null]}
            onPress={() => setSelectedOption('visitor')}
          >
            {selectedOption === 'visitor' && <Text style={styles.radioButtonIcon}>✓</Text>}
          </Pressable>
          <Text style={styles.radioButtonText}>Visitor</Text>
        </View>

        <CustomButton
          title="Save"
          onPress={handleSave}
          buttonStyle={{ marginBottom: 20 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  avatar: {
    borderRadius: 75,
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 10,
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileText: {
    color: '#0EA5E9',
    fontSize: 14,
    marginTop: 5,
  },
  body: {
    backgroundColor: 'white',
    height: 'auto',
    alignItems: 'center',
    padding: 20,
  },
  iamtext: {
    fontSize: 18,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'start',
    marginRight: 250,
  },
  radioButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  radioButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
    height: 24,
    width: 24,
    marginHorizontal: 10,
  },
  radioButtonSelected: {
    backgroundColor: '#0EA5E9',
  },
  radioButtonText: {
    fontSize: 16,
    marginRight: 8,
  },
  radioButtonIcon: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProfileScreen;
