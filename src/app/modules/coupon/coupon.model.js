const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiscountSchema = new Schema({
    type: {
        type: String,
        enum: ['fixed', 'percentage', 'fixed_specific_products', 'percentage_specific_products', 'buy_x_get_y'],
        required: true
    },
    fixed_discount_to_entire_order: {
        amount: Number
    },
    percentage_discount_to_entire_order: {
        percent: Number
    },
    fixed_discount_to_specific_products: {
        maximum: Number,
        key: {
            category: String,
            collection: String,
            attribute_group: String,
            sku: String,
            price: Number
        },
        operator: {
            type: String,
            enum: ['in', 'not_in']
        },
        value: {
            kid: String,
            woman: String,
            man: String
        }
    },
    percentage_discount_to_specific_products: {
        maximum: Number,
        key: {
            category: String,
            collection: String,
            attribute_group: String,
            sku: String,
            price: Number
        },
        operator: {
            type: String,
            enum: ['in', 'not_in']
        },
        value: {
            kid: String,
            woman: String,
            man: String
        }
    },
    buy_x_get_y: {
        sku: [String],
        x: Number,
        y: Number,
        max_of_y: Number,
        discount_percent: Number
    }
});

const CouponSchema = new Schema({
    coupon_code: String,
    description: String,
    status: Boolean,
    discount_amount: Number,
    start_date: Date,
    end_date: Date,
    free_shipping: Boolean,
    discount_type: DiscountSchema,
    order_conditions: {
        minimum_purchase_amount: Number,
        minimum_purchase_qty: Number,
        table: {
            key: {
                category: String,
                collection: String,
                attribute_group: String,
                sku: String,
                price: Number
            },
            operator: {
                type: String,
                enum: ['in', 'not_in']
            },
            value: {
                kid: String,
                woman: String,
                man: String
            }
        }
    },
    customer_conditions: {
        input_field: {
            type: String,
            enum: ['new_group', 'general', 'employee', 'all', 'baseprice']
        },
        customer_email: String,
        customers_purchase: Number
    }
});

const CouponModel = mongoose.model('Coupon', CouponSchema);

module.exports = CouponModel;
