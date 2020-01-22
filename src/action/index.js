
export const imageDetails =(details)=>{
    return {
        type:"IMAGE_DETAIL",
        payload:{
            details:details
        }
    }
}
export const gifImages =(images)=>{
    return {
        type:"FETCH_IMAGES",
        payload:{
            images:images
        }
    }
}