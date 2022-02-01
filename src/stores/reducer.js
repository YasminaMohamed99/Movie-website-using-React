const INITIAL_VALUE={
    favoriteId:[],
  };

export default function movieReducer(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case "ADD":
      return {
        favoriteId:
        [
          ...state.favoriteId,
          action.payload
        ]
        
      };
      case "REMOVE":
      return {
        favoriteId:
        state.favoriteId.filter ((element)=> element !==action.payload)};
    default:
      return state;
}
}

