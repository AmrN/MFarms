export const loadPost = (id, resolve, reject) => {
  return {
    type: 'LOAD_ONE[POST]',
    payload: { id, resolve, reject }
  };
};

export const loadPosts = (filters, resolve, reject) => {
  return {
    type: 'LOAD_MANY[POST]',
    payload: { filters, resolve, reject }
  };
};