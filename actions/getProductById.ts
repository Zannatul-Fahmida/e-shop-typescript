import prisma from '@/libs/prismadb';
import { products } from './../utils/products';

interface IParams{
    productId: string
}

export default async function getProductById(params:IParams){
    try {
        const {productId} = params;

        const product = await prisma.product.findUnique({
            where:{
                id: productId
            },
            include:{
                reviews:{
                    include:{
                        user: true
                    },
                    orderBy:{
                        createdDate: 'desc'
                    }
                }
            }
        })

        if(!product){
            return null;
        }
        return product;
    }
    catch(error: any){
        throw new Error(error)
    }
}