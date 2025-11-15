import { Router } from 'express';
import { authenticate } from '../middleware/auth';

const router = Router();

router.use(authenticate);

/**
 * @route   POST /api/v1/households/create
 * @desc    Create a new household
 * @access  Private
 */
router.post('/create', (req, res) => {
  res.json({ success: true, message: 'Create household - Coming soon' });
});

/**
 * @route   POST /api/v1/households/invite
 * @desc    Invite member to household
 * @access  Private
 */
router.post('/invite', (req, res) => {
  res.json({ success: true, message: 'Invite member - Coming soon' });
});

/**
 * @route   GET /api/v1/households/members
 * @desc    Get household members
 * @access  Private
 */
router.get('/members', (req, res) => {
  res.json({ success: true, data: [], message: 'Get members - Coming soon' });
});

export default router;
