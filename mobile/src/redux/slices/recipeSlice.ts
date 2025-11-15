import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Recipe {
  id: string;
  name: string;
  description?: string;
  prepTime?: number;
  cookTime?: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  imageUrl?: string;
}

interface RecipeState {
  recipes: Recipe[];
  suggestions: Recipe[];
  isLoading: boolean;
  error: string | null;
}

const initialState: RecipeState = {
  recipes: [],
  suggestions: [],
  isLoading: false,
  error: null,
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setSuggestions: (state, action: PayloadAction<Recipe[]>) => {
      state.suggestions = action.payload;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setSuggestions, setLoading, setError } = recipeSlice.actions;
export default recipeSlice.reducer;
