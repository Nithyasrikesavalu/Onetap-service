/**
 * Async Wrapper to handle try/catch blocks automatically in controllers
 */
const asyncWrapper = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncWrapper;
