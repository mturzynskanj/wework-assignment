import { LOAD_IMAGES } from '../actionTypes';

export default function loadImages(state = [], action = {}) {
    const { type, data } = action;
    switch (type) {
        case LOAD_IMAGES: {
            state = [];
            return [...state, ...data]
        }   
        default:
            return state;
    }
    return state;
}