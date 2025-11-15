import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, List, Button, Divider, Avatar } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { logout } from '../redux/slices/authSlice';
import api from '../services/api';

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = async () => {
    const refreshToken = await api.logout(''); // Get from AsyncStorage
    dispatch(logout());
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Text
          size={80}
          label={user?.firstName?.charAt(0) || user?.email.charAt(0) || 'U'}
        />
        <Text variant="headlineSmall" style={styles.name}>
          {user?.firstName || user?.email}
        </Text>
        <Text variant="bodyMedium" style={styles.email}>
          {user?.email}
        </Text>
      </View>

      <Divider />

      <List.Section>
        <List.Subheader>Account</List.Subheader>
        <List.Item
          title="Household Settings"
          left={() => <List.Icon icon="home" />}
          onPress={() => {}}
        />
        <List.Item
          title="Dietary Preferences"
          left={() => <List.Icon icon="food-apple" />}
          onPress={() => {}}
        />
        <List.Item
          title="Notifications"
          left={() => <List.Icon icon="bell" />}
          onPress={() => {}}
        />
      </List.Section>

      <Divider />

      <List.Section>
        <List.Subheader>Analytics</List.Subheader>
        <List.Item
          title="Waste Report"
          left={() => <List.Icon icon="delete" />}
          onPress={() => {}}
        />
        <List.Item
          title="Savings Report"
          left={() => <List.Icon icon="currency-usd" />}
          onPress={() => {}}
        />
        <List.Item
          title="Insights"
          left={() => <List.Icon icon="lightbulb" />}
          onPress={() => {}}
        />
      </List.Section>

      <Button
        mode="outlined"
        onPress={handleLogout}
        style={styles.logoutButton}
        textColor="#F44336"
      >
        Logout
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 24,
    paddingTop: 48,
    backgroundColor: '#fff',
  },
  name: {
    marginTop: 12,
    fontWeight: 'bold',
  },
  email: {
    color: '#666',
  },
  logoutButton: {
    margin: 16,
    borderColor: '#F44336',
  },
});
