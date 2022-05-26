import {SetterOrUpdater} from "recoil";

export const updateState: <T>(newValue: Partial<T>) => (oldState: T) => T =
  (updateValue) => {
  return (oldState) => {
    return ({
      ...oldState,
      ...updateValue,
    });
  };
};
