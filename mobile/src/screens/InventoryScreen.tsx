import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, FAB, Card, Chip } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setItems } from '../redux/slices/inventorySlice';
import api from '../services/api';

export default function InventoryScreen() {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.inventory);

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {
    try {
      const response = await api.getInventory();
      dispatch(setItems(response.data || []));
    } catch (error) {
      console.error('Failed to load inventory:', error);
    }
  };

  const renderItem = ({ item }: any) => (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleMedium">{item.productName}</Text>
        {item.brand && <Text variant="bodySmall">{item.brand}</Text>}
        <View style={styles.details}>
          <Chip icon="package-variant" mode="outlined">
            {item.quantity} {item.unit || 'unit(s)'}
          </Chip>
          <Chip icon="map-marker" mode="outlined">
            {item.storageLocation}
          </Chip>
        </View>
        {item.expiryDate && (
          <Text style={styles.expiry}>
            Expires: {new Date(item.expiryDate).toLocaleDateString()}
          </Text>
        )}
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.header}>
        My Inventory
      </Text>

      {items.length === 0 ? (
        <View style={styles.emptyState}>
          <Text>No items in your inventory yet.</Text>
          <Text>Tap + to add your first item!</Text>
        </View>
      ) : (
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      )}

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
          // Navigate to add item screen
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    paddingTop: 48,
    fontWeight: 'bold',
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 12,
  },
  details: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  expiry: {
    marginTop: 8,
    color: '#FF9800',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#4CAF50',
  },
});
