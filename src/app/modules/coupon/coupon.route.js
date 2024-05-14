import express from "express";
import { couponController } from "./coupon.controller.js";
const router = express.Router();


router.post('/create-coupon', couponController.createCoupon)

router.patch('/update-coupon/:id', couponController.updateCoupon)

router.get('/coupons', couponController.getAllCoupon)

export const couponRoutes = router;