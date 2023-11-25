import { NextResponse } from "next/server";
import Stripe from "stripe";



export async function POST( req ){
    const data = await req.json();
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    try {
      // Create Checkout Sessions from body params.
      const params = {
        submit_type:'pay',
        payment_method_types:['card'],
        billing_address_collection:'auto',
        shipping_options:[
            {shipping_rate: 'shr_1OGDWvJTRSIPtwc3PNQY5eWs'},
        ],
        line_items: data.map((item) => {
            const img = item.image[0].asset._ref
            const newImage = img.replace('image-', 'https://cdn.sanity.io/images/lqbt9ugx/production/').replace('-jpg','.jpg').replace('-webp','.webp').replace('-png','.png').replace('-jpeg','.jpeg')
            return {
                price_data:{
                    currency:'mxn',
                    product_data:{
                        name:item.name,
                        images: [newImage],
                    },
                    unit_amount: item.price * 100,
                },
                adjustable_quantity:{
                    enabled:true,
                    minimum: 1,
                },
                quantity: item.quantity,
            }
        }),
        
        mode: 'payment',
        success_url: `${req.headers.get('origin')}/?success=true`,
        cancel_url: `${req.headers.get('origin')}/?canceled=true`,
      }
      const session = await stripe.checkout.sessions.create(params);
      
      return NextResponse.json({ session: session }, { status: 200 });
    
    } catch (err) {
      return NextResponse.json({error:err.message},{status:err.statusCode || 500})
    }
}