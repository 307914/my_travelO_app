export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case 'IS_FILTER_OPEN':
      return {
        ...state,
        isfilteropen: !state.isfilteropen,
      };

    case 'MINIMUM_PRICE':
      return {
        ...state,
        pricerange: [
          Math.min(
            payload.newValue[0],
            payload.pricerange[1] - payload.miniDiff
          ),
          payload.pricerange[1],
        ],
      };
    case 'MAXIMUM_PRICE':
      return {
        ...state,
        pricerange: [
          payload.pricerange[0],
          Math.max(
            payload.newValue[1],
            payload.pricerange[0] + payload.miniDiff
          ),
        ],
      };

    case 'BATHROOMS':
      return {
        ...state,
        noOfBathrooms:
          payload === 'Any'
            ? payload
            : payload === '5+'
            ? payload
            : Number(payload),
      };

    case 'BEDS':
      return {
        ...state,
        noOfBeds:
          payload === 'Any'
            ? payload
            : payload === '5+'
            ? payload
            : Number(payload),
      };

    case 'BEDROOMS':
      return {
        ...state,
        noOfBedrooms:
          payload === 'Any'
            ? payload
            : payload === '5+'
            ? payload
            : Number(payload),
      };

    case 'PROPERTY':
      return {
        ...state,
        propertytype: payload,
      };

    case 'RATING':
      return {
        ...state,
        ratingNumber: Number(payload),
      };
    case 'IS_CANCELABLE':
      return {
        ...state,
        iscancelable: payload,
      };

    case 'CANCEL':
      return {
        ...state,
        pricerange: [300, 20000],
        noOfBedrooms: 'Any',
        noOfBathrooms: 'Any',
        noOfBeds: 'Any',
        propertytype: '',
        ratingNumber: 1,
        iscancelable: true,
      };
    default:
      return state;
  }
};
