const initialState = {
  values: {
    id: "",
    fullName: "",
    phone: "",
    email: "",
  },
  errors: {
    id: "",
    fullName: "",
    phone: "",
    email: "",
  },
  formState: true,
  isDisabled: true,
  arrStudent: [],
};

export const studentReducer = (state = initialState, action) => {
  return state;
};
