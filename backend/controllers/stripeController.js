require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); 

// const stripeModel = require("../models/stripeModel");

exports.stripeCheckout = async (req, res) => {
  const { product } = req.body;
  console.log(product.rates.hourly_rate);

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "us_bank_account"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              images: [product.photos_directory.imageUrl[0]],
            },
            unit_amount: product.rates.hourly_rate * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
            maximum: 10,
          },
          quantity: 1,
        },
      ],
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      custom_text: {
        shipping_address: {
          message:
            "Please note that we can't guarantee 2-day delivery for PO boxes at this time.",
        },
        submit: {
          message: "We'll email you instructions on how to get started.",
        },
      },
      mode: "payment",
      success_url: "http://localhost:3000/",
      cancel_url: "http://localhost:3000/",
    });
    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};
