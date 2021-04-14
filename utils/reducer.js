export const initialState = {
  dataSource: {},
  currentAyah: 0, // currentAyah is a number of array, so start from 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_RANDOM_DATA":
      return {
        ...state,
        dataSource: action.dataSource,
      };

    case "SET_AYAH":
      return {
        ...state,
        currentAyah: action.currentAyah,
      };

    case "PREVIOUS_AYAH":
      return {
        ...state,
        currentAyah: action.currentAyah,
      };

    case "NEXT_AYAH":
      return {
        ...state,
        currentAyah: action.currentAyah,
      };

    default:
      return state;
  }
};

export default reducer;
