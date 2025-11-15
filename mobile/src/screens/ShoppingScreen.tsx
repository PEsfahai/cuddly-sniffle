import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, List, Checkbox, FAB, Divider } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setItems, toggleBought } from '../redux/slices/shoppingSlice';
import api from '../services/api';

export default function ShoppingScreen() {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.shopping);

  useEffect(() => {
    loadShoppingList();
  }, []);

  const loadShoppingList = async () => {
    try {
      const response = await api.getShoppingList();
      dispatch(setItems(response.data?.items || []));
    } catch (error) {
      console.error('Failed to load shopping list:', error);
    }
  };

  const handleToggle = (id: string) => {
    dispatch(toggleBought(id));
  };

  const renderItem = ({ item }: any) => (
    <>
      <List.Item
        title={item.name}
        description={`${item.quantity} ${item.unit || ''}`}
        left={() => (
          <Checkbox
            status={item.bought ? 'checked' : 'unchecked'}
            onPress={() => handleToggle(item.id)}
          />
        )}
        right={() => {
          if (item.priority === 'urgent') {
            return <List.Icon icon="alert-circle" color="#F44336" />;
          }
          return null;
        }}
        style={item.bought ? styles.boughtItem : undefined}
      />
      <Divider />
    </>
  );

  const unboughtItems = items.filter((item) => !item.bought);
  const boughtItems = items.filter((item) => item.bought);

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.header}>
        Shopping List
      </Text>

      {items.length === 0 ? (
        <View style={styles.emptyState}>
          <Text>Your shopping list is empty.</Text>
          <Text>Add items as you run out!</Text>
        </View>
      ) : (
        <FlatList
          data={[...unboughtItems, ...boughtItems]}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
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
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    paddingTop: 48,
    fontWeight: 'bold',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  boughtItem: {
    opacity: 0.5,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#4CAF50',
  },
});
