import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = __DEV__
  ? 'http://localhost:3000/api/v1'
  : 'https://api.pantri.app/api/v1';

class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor to add auth token
    this.api.interceptors.request.use(
      async (config) => {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor to handle token refresh
    this.api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = await AsyncStorage.getItem('refreshToken');
            if (refreshToken) {
              const response = await this.api.post('/auth/refresh', {
                refreshToken,
              });

              const { accessToken, refreshToken: newRefreshToken } = response.data.data;

              await AsyncStorage.setItem('accessToken', accessToken);
              await AsyncStorage.setItem('refreshToken', newRefreshToken);

              originalRequest.headers.Authorization = `Bearer ${accessToken}`;
              return this.api(originalRequest);
            }
          } catch (refreshError) {
            await AsyncStorage.removeItem('accessToken');
            await AsyncStorage.removeItem('refreshToken');
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );
  }

  // Auth endpoints
  async register(email: string, password: string, firstName?: string, lastName?: string) {
    const response = await this.api.post('/auth/register', {
      email,
      password,
      firstName,
      lastName,
    });
    return response.data;
  }

  async login(email: string, password: string) {
    const response = await this.api.post('/auth/login', { email, password });
    return response.data;
  }

  async logout(refreshToken: string) {
    const response = await this.api.post('/auth/logout', { refreshToken });
    return response.data;
  }

  async getCurrentUser() {
    const response = await this.api.get('/auth/me');
    return response.data;
  }

  // Inventory endpoints
  async getInventory() {
    const response = await this.api.get('/inventory/items');
    return response.data;
  }

  async addInventoryItem(item: any) {
    const response = await this.api.post('/inventory/items', item);
    return response.data;
  }

  async scanBarcode(barcode: string) {
    const response = await this.api.post('/inventory/items/scan', { barcode });
    return response.data;
  }

  async ocrExpiryDate(imageBase64: string) {
    const response = await this.api.post('/inventory/items/ocr', { image: imageBase64 });
    return response.data;
  }

  async updateInventoryItem(id: string, updates: any) {
    const response = await this.api.put(`/inventory/items/${id}`, updates);
    return response.data;
  }

  async deleteInventoryItem(id: string) {
    const response = await this.api.delete(`/inventory/items/${id}`);
    return response.data;
  }

  // Recipe endpoints
  async getRecipeSuggestions() {
    const response = await this.api.get('/recipes/suggestions');
    return response.data;
  }

  async generateRecipe(ingredients: string[], preferences?: any) {
    const response = await this.api.post('/recipes/generate', {
      ingredients,
      preferences,
    });
    return response.data;
  }

  async getRecipe(id: string) {
    const response = await this.api.get(`/recipes/${id}`);
    return response.data;
  }

  // Shopping list endpoints
  async getShoppingList() {
    const response = await this.api.get('/shopping/list');
    return response.data;
  }

  async addShoppingItem(item: any) {
    const response = await this.api.post('/shopping/list/items', item);
    return response.data;
  }

  async updateShoppingItem(id: string, updates: any) {
    const response = await this.api.put(`/shopping/list/items/${id}`, updates);
    return response.data;
  }

  async comparePrices(items: string[]) {
    const response = await this.api.get('/shopping/prices/compare', {
      params: { items },
    });
    return response.data;
  }

  // Household endpoints
  async createHousehold(name: string) {
    const response = await this.api.post('/households/create', { name });
    return response.data;
  }

  async inviteMember(email: string) {
    const response = await this.api.post('/households/invite', { email });
    return response.data;
  }

  async getHouseholdMembers() {
    const response = await this.api.get('/households/members');
    return response.data;
  }

  // Analytics endpoints
  async getWasteAnalytics() {
    const response = await this.api.get('/analytics/waste');
    return response.data;
  }

  async getSavingsAnalytics() {
    const response = await this.api.get('/analytics/savings');
    return response.data;
  }

  async getInsights() {
    const response = await this.api.get('/analytics/insights');
    return response.data;
  }
}

export default new ApiService();
