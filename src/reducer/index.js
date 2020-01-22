import { combineReducers } from 'redux';

const imageDetails=(imageDetail=null, action)=>{
    if(action.type==="IMAGE_DETAIL"){
        return action.payload.details
    }
   return imageDetail
}

const gifImages=(gifImage=[], action)=>{
    if(action.type==="FETCH_IMAGES"){
        return action.payload.images
    }
   return gifImage
}

export default combineReducers({
    imageList:gifImages,
    selectedImage:imageDetails
}
)