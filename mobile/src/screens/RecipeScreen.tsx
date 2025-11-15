import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Chip } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setSuggestions } from '../redux/slices/recipeSlice';
import api from '../services/api';

export default function RecipeScreen() {
  const dispatch = useDispatch();
  const { suggestions } = useSelector((state: RootState) => state.recipe);

  useEffect(() => {
    loadRecipeSuggestions();
  }, []);

  const loadRecipeSuggestions = async () => {
    try {
      const response = await api.getRecipeSuggestions();
      dispatch(setSuggestions(response.data || []));
    } catch (error) {
      console.error('Failed to load recipes:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text variant="headlineMedium" style={styles.header}>
        Recipe Suggestions
      </Text>

      <Text style={styles.subtitle}>
        Based on what's in your kitchen
      </Text>

      {suggestions.length === 0 ? (
        <View style={styles.emptyState}>
          <Text>No recipe suggestions available.</Text>
          <Text>Add items to your inventory first!</Text>
        </View>
      ) : (
        suggestions.map((recipe) => (
          <Card key={recipe.id} style={styles.card}>
            <Card.Cover source={{ uri: recipe.imageUrl || 'https://via.placeholder.com/400' }} />
            <Card.Content>
              <Text variant="titleLarge" style={styles.recipeTitle}>
                {recipe.name}
              </Text>
              {recipe.description && (
                <Text variant="bodyMedium">{recipe.description}</Text>
              )}
              <View style={styles.meta}>
                {recipe.prepTime && (
                  <Chip icon="clock-outline">{recipe.prepTime} min</Chip>
                )}
                <Chip icon="account-group">{recipe.servings} servings</Chip>
              </View>
            </Card.Content>
            <Card.Actions>
              <Button>View Recipe</Button>
              <Button mode="contained">Start Cooking</Button>
            </Card.Actions>
          </Card>
        ))
      )}

      <Button
        mode="contained"
        style={styles.generateButton}
        onPress={() => {
          // Generate AI recipe
        }}
      >
        Generate New Recipe with AI
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
    padding: 16,
    paddingTop: 48,
    fontWeight: 'bold',
  },
  subtitle: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    color: '#666',
  },
  card: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  recipeTitle: {
    marginTop: 12,
    marginBottom: 8,
  },
  meta: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  emptyState: {
    padding: 32,
    alignItems: 'center',
    gap: 8,
  },
  generateButton: {
    margin: 16,
  },
});
