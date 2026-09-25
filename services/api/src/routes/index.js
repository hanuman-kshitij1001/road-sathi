import { Router } from 'express';
import { healthRoutes } from './health.routes.js';

const router = Router();

// Platform health checks
router.use('/health', healthRoutes);

// Future module routes will mount here:
// router.use('/auth', authRoutes);
// router.use('/users', userRoutes);
// router.use('/services', serviceRoutes);
// router.use('/assistance-requests', assistanceRequestRoutes);
// router.use('/providers', providerRoutes);

export const apiRoutes = router;
