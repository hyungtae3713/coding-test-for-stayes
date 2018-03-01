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

export const validate = (response = { }) => {
  // TODO: 상태처리
  return response.data;
};