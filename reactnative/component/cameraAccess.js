import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Alert } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const cameraRef = useRef<Camera>(null);
  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    const requestPermissions = async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      setHasPermission(cameraPermission === 'authorized');
    };
    requestPermissions();
  }, []);

  const takePhoto = async () => {
    if (!cameraRef.current) return;
    try {
      const photo = await cameraRef.current.takePhoto({
        qualityPrioritization: 'balanced',
      });
      setPhotoUri(photo.path);
    } catch (error) {
      Alert.alert('Error', 'Failed to take photo: ' + error.message);
    }
  };

  if (!device) {
    return (
      <View style={styles.container}>
        <Text>Loading camera...</Text>
      </View>
    );
  }

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>No camera permissions</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {photoUri ? (
        <>
          <Image source={{ uri: 'file://' + photoUri }} style={styles.image} />
          <Button title="Retake Photo" onPress={() => setPhotoUri(null)} />
        </>
      ) : (
        <>
          <Camera
            ref={cameraRef}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive
            photo
          />
          <View style={styles.captureButton}>
            <Button title="Take Photo" onPress={takePhoto} />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  captureButton: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
});

export default CameraScreen;