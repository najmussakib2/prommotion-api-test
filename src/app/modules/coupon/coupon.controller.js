import { couponServices } from "./coupon.service.js";

const createCoupon = async (req,res)=>{
    try {
        const payload  = req.body;
        const result = await couponServices.createCouponInDB(payload);
        res.status(200).json({
          success: true,
          message: 'Coupon is created succesfully',
          data: result,
          
        });
        console.log(result)
      } catch (err) {
        console.log(err);
      }
}

const updateCoupon = async (req,res)=>{
    try {
        const id = req.params.id;
        const payload  = req.body;
        const result = await couponServices.updateCouponFromDB(id,payload);
        res.status(200).json({
          success: true,
          message: 'Coupon is updated succesfully',
          data: result,
          
        });
        console.log(result)
      } catch (err) {
        console.log(err);
      }
}

const getAllCoupon = async (req,res)=>{
    try {
        const result = await couponServices.getAllCouponFromDB();
        res.status(200).json({
          success: true,
          message: 'Coupons are retrieved succesfully',
          data: result,
        });
      } catch (err) {
        console.log(err);
      }

}

export const couponController = {
    createCoupon,
    updateCoupon,
    getAllCoupon
}