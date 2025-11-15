import { Router } from 'express';
import { authenticate } from '../middleware/auth';

const router = Router();

router.use(authenticate);

/**
 * @route   GET /api/v1/shopping/list
 * @desc    Get shopping list for household
 * @access  Private
 */
router.get('/list', (req, res) => {
  res.json({ success: true, data: { items: [] }, message: 'Shopping list - Coming soon' });
});

/**
 * @route   POST /api/v1/shopping/list/items
 * @desc    Add item to shopping list
 * @access  Private
 */
router.post('/list/items', (req, res) => {
  res.json({ success: true, message: 'Add to shopping list - Coming soon' });
});

/**
 * @route   PUT /api/v1/shopping/list/items/:id
 * @desc    Update shopping list item
 * @access  Private
 */
router.put('/list/items/:id', (req, res) => {
  res.json({ success: true, message: 'Update shopping item - Coming soon' });
});

/**
 * @route   GET /api/v1/shopping/prices/compare
 * @desc    Compare prices across retailers
 * @access  Private
 */
router.get('/prices/compare', (req, res) => {
  res.json({ success: true, data: { comparison: [] }, message: 'Price comparison - Coming soon' });
});

export default router;
