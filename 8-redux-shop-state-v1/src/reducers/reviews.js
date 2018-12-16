

import { LOAD_REVIEWS_SUCCESS, ADD_NEW_REVIEW_SUCCESS } from '../constants'

/*

{
    111:[
        {},{}
    ],
    222:[
        {},{}
    ]
}

*/

export function reviewsReducer(state={}, action) {
    console.log('-reviews-reducer-');
    switch (action.type) {
        case LOAD_REVIEWS_SUCCESS: {
            let { productId, reviews } = action;
            let existingReviews = state[productId] || []
            reviews = existingReviews.concat(reviews);
            return Object.assign({}, state, { [productId]: reviews })
        }
        case ADD_NEW_REVIEW_SUCCESS: {
            let { productId, review } = action;
            let existingReviews = state[productId] || []
            reviews = existingReviews.concat(review);
            return Object.assign({}, state, { [productId]: reviews })
        }
        default:
            return state;
    }
}