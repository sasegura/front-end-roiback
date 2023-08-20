const myPromise = (user) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user);
    }, 1000);
  });

/**
 * service to update user.
 * @param {Object} user - user to by updated
 * @return {Object} return user information
 */
export const updateUserOnApi = async (user) => {
  const userUpdated = await myPromise(user).then(async (response) => response);
  return userUpdated;
};
