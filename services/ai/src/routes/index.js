import { Router } from 'express';
import { healthRoutes } from './health.routes.js';

const router = Router();

// Health endpoint
router.use('/health', healthRoutes);

// Future AI pipeline routes will mount here:
// router.use('/classify-issue', classificationRoutes);
// router.use('/recommend-service', recommendationRoutes);
// router.use('/match-provider', matchingRoutes);

export const aiRoutes = router;
