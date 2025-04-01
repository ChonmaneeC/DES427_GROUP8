import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// 🔗 URL ของ Backend (เปลี่ยนตามเครื่องของคุณ ถ้าใช้ Emulator)
const BASE_URL = "http://localhost:5000";

export default function App() {
  const [message, setMessage] = useState(""); // เก็บข้อความจาก API
  const [user, setUser] = useState(""); // เก็บข้อมูล user จาก API

  // 🚀 เรียก API เมื่อแอปโหลด
  useEffect(() => {
    fetch(`${BASE_URL}/api/hello`)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error("Error fetching message:", error));
  }, []);

  // 🚀 ฟังก์ชันเรียก API `/users`
  const fetchUser = () => {
    fetch(`${BASE_URL}/users`)
      .then(response => response.json())
      .then(data => setUser(data.message))
      .catch(error => console.error("Error fetching user data:", error));
  };

  return (
    <View style={styles.container}>
      {/* แสดงข้อความที่ได้จาก API */}
      <Text style={styles.text}>{message}</Text>

      {/* ปุ่มกดเพื่อโหลดข้อมูล Users */}
      <Button title="Load User Data" onPress={fetchUser} />

      {/* แสดงข้อมูล User ถ้ามี
      {user !== "" && <Text style={styles.text}>User ID: {user.id}</Text>} */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
