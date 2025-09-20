/// now throw promis
const asyncHandler = (requestHandler) => async (req, res, next) => {
  Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
};

/// throw try and catch
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.cod || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

export { asyncHandler };
