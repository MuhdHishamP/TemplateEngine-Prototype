import React from 'react';
import CardOne from './card-1';
import CardTwo from './card-2';
import BlogCard from './blog-card';
import AdvertCard from './advert-card';

const CardPreview = ({ cardId, cardOneData, cardTwoData, blogData, advertData }) => {
    const storeCurrency = "₹"
    const retailPrice = "1000"
    const disPrice = "500";
    const discount = "50";

    const productData =
    {
        "id": 326,
        "cat": {
            "id": 3,
            "created_at": "2023-10-24T18:13:14.784764+05:30",
            "updated_at": "2023-10-24T18:13:14.784780+05:30",
            "is_deleted": false,
            "is_active": true,
            "name": "men",
            "desc": "",
            "meta_title": "",
            "meta_keywords": "",
            "meta_description": "",
            "image": null,
            "tenant": 1
        },
        "subcat": {
            "id": 9,
            "created_at": "2023-10-24T18:15:56.982392+05:30",
            "updated_at": "2023-10-24T18:15:56.982410+05:30",
            "is_deleted": false,
            "is_active": true,
            "name": "Trousers",
            "desc": "",
            "meta_title": "",
            "meta_keywords": "",
            "meta_description": "",
            "image": null,
            "tenant": 1,
            "cat": 3
        },
        "brand": {
            "id": 19,
            "created_at": "2023-10-25T11:39:37.068656+05:30",
            "updated_at": "2023-10-25T11:39:37.068674+05:30",
            "is_deleted": false,
            "is_active": true,
            "name": "H&M",
            "desc": "",
            "image": null,
            "domain_url": "https://www2.hm.com/en_in/index.html",
            "tenant": 1
        },
        "images": [
            {
                "id": 322,
                "created_at": "2023-10-25T12:57:25.397526+05:30",
                "updated_at": "2023-10-25T12:57:25.397543+05:30",
                "is_deleted": false,
                "is_active": false,
                "image": "https://sketchapp-sas.s3-ap-south-1.amazonaws.com/static/media/Product/839368568047/blob",
                "tenant": 1,
                "product_image": null
            },
            {
                "id": 323,
                "created_at": "2023-10-25T12:57:25.484228+05:30",
                "updated_at": "2023-10-25T12:57:25.484247+05:30",
                "is_deleted": false,
                "is_active": false,
                "image": "https://sketchapp-sas.s3-ap-south-1.amazonaws.com/static/media/Product/515319014258/blob",
                "tenant": 1,
                "product_image": null
            },
            {
                "id": 324,
                "created_at": "2023-10-25T12:57:25.486224+05:30",
                "updated_at": "2023-10-25T12:57:25.486241+05:30",
                "is_deleted": false,
                "is_active": false,
                "image": "https://sketchapp-sas.s3-ap-south-1.amazonaws.com/static/media/Product/505087934656/blob",
                "tenant": 1,
                "product_image": null
            },
            {
                "id": 325,
                "created_at": "2023-10-25T12:57:25.719795+05:30",
                "updated_at": "2023-10-25T12:57:25.719812+05:30",
                "is_deleted": false,
                "is_active": false,
                "image": "https://sketchapp-sas.s3-ap-south-1.amazonaws.com/static/media/Product/882981062661/blob",
                "tenant": 1,
                "product_image": null
            }
        ],
        "created_at": "2023-10-25T12:57:30.432660+05:30",
        "updated_at": "2023-10-25T12:57:30.432678+05:30",
        "is_deleted": false,
        "is_active": true,
        "name": "Relaxed Fit Corduroy trousers",
        "price": "3500.00",
        "discount_price": null,
        "sku": "tr64582",
        "weight": "200g",
        "quantity": 200,
        "thumbnail": null,
        "meta_title": "",
        "meta_keywords": "",
        "meta_description": "",
        "date": "2023-10-25T12:57:30.430689+05:30",
        "content": "Relaxed-fit trousers in soft corduroy with a regular waist, button and a zip fly. Welt back pockets, side pockets and straight legs",
        "item_tax": null,
        "tenant": 1
    }

    const productDataTwo = {
        "id": 326,
        "cat": {
            "id": 3,
            "created_at": "2023-10-24T18:13:14.784764+05:30",
            "updated_at": "2023-10-24T18:13:14.784780+05:30",
            "is_deleted": false,
            "is_active": true,
            "name": "men",
            "desc": "",
            "meta_title": "",
            "meta_keywords": "",
            "meta_description": "",
            "image": null,
            "tenant": 1
        },
        "subcat": {
            "id": 9,
            "created_at": "2023-10-24T18:15:56.982392+05:30",
            "updated_at": "2023-10-24T18:15:56.982410+05:30",
            "is_deleted": false,
            "is_active": true,
            "name": "Trousers",
            "desc": "",
            "meta_title": "",
            "meta_keywords": "",
            "meta_description": "",
            "image": null,
            "tenant": 1,
            "cat": 3
        },
        "brand": {
            "id": 19,
            "created_at": "2023-10-25T11:39:37.068656+05:30",
            "updated_at": "2023-10-25T11:39:37.068674+05:30",
            "is_deleted": false,
            "is_active": true,
            "name": "H&M",
            "desc": "",
            "image": null,
            "domain_url": "https://www2.hm.com/en_in/index.html",
            "tenant": 1
        },
        "images": [
            {
                "id": 322,
                "created_at": "2023-10-25T12:57:25.397526+05:30",
                "updated_at": "2023-10-25T12:57:25.397543+05:30",
                "is_deleted": false,
                "is_active": false,
                "image": "https://sketchapp-sas.s3-ap-south-1.amazonaws.com/static/media/Product/839368568047/blob",
                "tenant": 1,
                "product_image": null
            },
            {
                "id": 323,
                "created_at": "2023-10-25T12:57:25.484228+05:30",
                "updated_at": "2023-10-25T12:57:25.484247+05:30",
                "is_deleted": false,
                "is_active": false,
                "image": "https://sketchapp-sas.s3-ap-south-1.amazonaws.com/static/media/Product/515319014258/blob",
                "tenant": 1,
                "product_image": null
            },
            {
                "id": 324,
                "created_at": "2023-10-25T12:57:25.486224+05:30",
                "updated_at": "2023-10-25T12:57:25.486241+05:30",
                "is_deleted": false,
                "is_active": false,
                "image": "https://sketchapp-sas.s3-ap-south-1.amazonaws.com/static/media/Product/505087934656/blob",
                "tenant": 1,
                "product_image": null
            },
            {
                "id": 325,
                "created_at": "2023-10-25T12:57:25.719795+05:30",
                "updated_at": "2023-10-25T12:57:25.719812+05:30",
                "is_deleted": false,
                "is_active": false,
                "image": "https://sketchapp-sas.s3-ap-south-1.amazonaws.com/static/media/Product/882981062661/blob",
                "tenant": 1,
                "product_image": null
            }
        ],
        "created_at": "2023-10-25T12:57:30.432660+05:30",
        "updated_at": "2023-10-25T12:57:30.432678+05:30",
        "is_deleted": false,
        "is_active": true,
        "name": "Relaxed Fit Corduroy trousers",
        "price": "3500.00",
        "discount_price": null,
        "sku": "tr64582",
        "weight": "200g",
        "quantity": 200,
        "thumbnail": null,
        "meta_title": "",
        "meta_keywords": "",
        "meta_description": "",
        "date": "2023-10-25T12:57:30.430689+05:30",
        "content": "Relaxed-fit trousers in soft corduroy with a regular waist, button and a zip fly. Welt back pockets, side pockets and straight legs",
        "item_tax": null,
        "tenant": 1
    }


    const blogDemoData = {
        "id": 334,
        "created_at": "2023-10-25T13:13:55.592322+05:30",
        "updated_at": "2023-10-25T13:13:55.592339+05:30",
        "is_deleted": false,
        "is_active": true,
        "name": "Zlatan Ibrahimović, Nadia Nadim & JaQuel Knight HIIT the Zone",
        "image": "https://sketchapp-sas.s3-ap-south-1.amazonaws.com/static/data/blog/428511663609/blob",
        "meta_title": "",
        "meta_keywords": "",
        "meta_description": "",
        "content": "",
        "tenant": 1
    };

    const advertDemoData =  {
        "id": 342,
        "created_at": "2023-10-25T13:25:45.304510+05:30",
        "updated_at": "2023-10-25T13:27:22.965964+05:30",
        "is_deleted": false,
        "is_active": true,
        "name": "50% off Buy Now",
        "image": "https://sketchapp-sas.s3-ap-south-1.amazonaws.com/static/data/794201481517/blob",
        "product_id": "281",
        "desc": "But hurry, this incredible Black Friday deal won't last forever!",
        "tenant": 1
    }

    return (
        <>
            {cardId === "1" ? (
                <>
                    <CardOne key="1" productData={productData} storeCurrency={storeCurrency}
                        dis_price={disPrice} retail_price={retailPrice} discount={discount}
                        cardData={cardOneData} />
                </>
            ) : null}

            {cardId === "2" ? (
                <>
                    <CardTwo key="2" productData={productDataTwo} storeCurrency={storeCurrency}
                        dis_price={disPrice} retail_price={retailPrice} discount={discount}
                        cardData={cardTwoData} />
                </>
            ) : null}


            {cardId === "3" ? (
                <>
                    <BlogCard key="3" blogDemoData={blogDemoData} blogData={blogData} />
                </>
            ) : null}

            {cardId === "4" ? (
                <>
                    <AdvertCard key="4" advertDemoData={advertDemoData} advertData={advertData} />
                </>
            ) : null}



        </>
    )
}

export default CardPreview;