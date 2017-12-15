export class Action {

  static createType(base, types = ['REQUEST', 'SUCCESS', 'FAILURE']) {
    return types.reduce((prev, type) => {
      prev[`${base}_${type}`] = `${base}_${type}`;
      return prev;
    }, { });
  }

  static createAction(type, payload = { }, meta = { } ) {
    return { type, payload, meta };
  } 

};

export const validate = (response) => {
  // TODO: 상태 체크 처리 해야함(htkim, 20171212)
  return response.data;
};