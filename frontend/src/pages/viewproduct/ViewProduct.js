import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";
import '../../scss/viewproduct.scss'
import Example from "./Example";

const ViewProduct = () => {
  const location = useLocation();
  const product = location.state.product;

  const makePayment = async (product) => {
    const stripe = await loadStripe(
      "pk_test_51OHtYWHfFaxHofKUsnnno0r5QE3LVagHBag6E53tayznGP6vJtVkQPdSL805NPEHiWXgt7Es4r0NhGhOxRyS0cm500ono6kauf"
    );
    const body = { product };
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      "http://localhost:5000/api/stripe/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  const [images, setImages] = useState({
    img1 : "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img2 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img3 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img4 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png"
  })

  const [activeImg, setActiveImage] = useState(images.img1)

  const [amount, setAmount] = useState(1);


  return (
//     <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
//     <div className='flex flex-col gap-6 lg:w-2/4'>
//         <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
//         <div className='flex flex-row justify-between h-24'>
//             <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
//             <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
//             <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
//             <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
//         </div>
//     </div>
//     {/* ABOUT */}
//     <div className='flex flex-col gap-4 lg:w-2/4'>
//         <div>
//             <span className=' text-violet-600 font-semibold'>Special Sneaker</span>
//             <h1 className='text-3xl font-bold'>Nike Invincible 3</h1>
//         </div>
//         <p className='text-gray-700'>
//         Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
//         </p>
//         <h6 className='text-2xl font-semibold'>$ 199.00</h6>
//         <div className='flex flex-row items-center gap-12'>
//             <div className='flex flex-row items-center'>
//                 <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
//                 <span className='py-4 px-6 rounded-lg'>{amount}</span>
//                 <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
//             </div>
//             <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
//         </div>
//     </div>
// </div>
    // <>
    //   <div className="container" key={product._id}>
    //     <Card style={{ width: "20rem" }}>
    //       <Card.Img
    //         variant="top"
    //         src={product.photos_directory.imageUrl[0]}
    //         style={{ width: "12rem" }}
    //       />
    //       <Card.Body>
    //         <Card.Title>{product.name}</Card.Title>
    //         <Card.Text>{product.description}</Card.Text>
    //         <Button onClick={() => makePayment(product)}>Buy Now</Button>
    //       </Card.Body>
    //     </Card>
    //   </div>
    // </>
    <Example/>
  );
};

export default ViewProduct;
