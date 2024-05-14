import {Schema, model} from 'mongoose'

const CouponSchema = new Schema({
     coupon_code: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: Boolean, default: true },
    discountAmount: { type: Number, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    free_shipping: Boolean,
  });

export const CouponModel = model('Coupon', CouponSchema);


