const initialState = { loading: false, loaded: false, slots: null, errors: null };

export default function SlotInfo(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_INFO_REQUESTED':
            console.log('fetch slots');    
            return { loading: true, loaded: false };
        case 'LOAD_INFO_OK':
            return { loading: false, loaded: true, slots: action.slots, errors: null };
        case 'LOAD_INFO_FAIL':
            return { loading: false, loaded: false, slots: null, errors: action.errors };
        default:
            return state;
  }
}