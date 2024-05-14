import { CouponModel } from "./coupon.model.js";

const createCouponInDB = async(payload)=>{
    
    const result = await CouponModel.create(payload);
    return result
}

const updateCouponFromDB = async(_id,payload)=>{
    
    const result = await CouponModel.findByIdAndUpdate({_id}, payload,{runValidators: true});
    return result
}

const getAllCouponFromDB = async()=>{
    const currentDate = new Date().toISOString().split('T')[0];
    console.log(typeof currentDate)
    const result = await CouponModel.find({ end_date: { $gt: currentDate } });
    return result;
}

export const couponServices = {
    createCouponInDB,
    updateCouponFromDB,
    getAllCouponFromDB
}