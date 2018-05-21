import * as types from '../actions/types';
import { StitchClientFactory } from 'mongodb-stitch';

const appId = process.env.STITCH_APP || '';
const stitchClientPromise = StitchClientFactory.create(appId);

const getStitchGenerator = next => (collection, query, action) =>
  stitchClientPromise.then(stitchClient => {
    const db = stitchClient.service('mongodb', 'mongodb-atlas').db('site');
    stitchClient
      .login()
      .then(() =>
        db
          .collection(collection)
          .find(query)
          .execute()
      )
      .then(data => {
        return next({
          ...action,
          type: types.getReceivedAction(action.type),
          data
        });
      })
      .catch(error => {
        return next({
          ...action,
          type: types.getErrorAction(action.type),
          error
        });
      });
  });

const stitchService = () => next => action => {
  next(action);
  const getStitch = getStitchGenerator(next);
  switch (action.type) {
    case types.GET_SECTIONS:
      return getStitch('sections', {}, action);
    default:
  }
};

export default stitchService;
