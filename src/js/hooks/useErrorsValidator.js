import { useState } from 'react';
import { isEmpty, forEach, isObject } from 'lodash';

export const useErrorsValidator = () => {
  const [errors, setErrors] = useState({});

  const getData = (requiredFields, currentDataObject) => {
    let formErrors = {};

    return new Promise((resolve, reject) => {
      forEach(requiredFields, (item) => {
        if (
          currentDataObject[item.name] === undefined ||
          (isObject(currentDataObject[item.name]) ||
            isEmpty(currentDataObject[item.name]))
        ) {
          formErrors[item.name] = `The ${item.name} field is required!`;
        } else {
          if (currentDataObject[item.name]) {
            if (item.type) {
              switch (item.type) {
                case 'number':
                  if (
                    isNaN(Number(currentDataObject[item.name])) ||
                    Math.sign(currentDataObject[item.name]) === -1
                  )
                    formErrors[item.name] = [
                      `The given ${item.name} is invalid`,
                    ];
                  break;
                case 'email':
                  if (
                    !currentDataObject[item.name].match(
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    )
                  )
                    formErrors[item.name] = [
                      `The given ${item.name} is invalid`,
                    ];
                  break;
                case 'phone':
                  if (
                    !currentDataObject[item.name].match(
                      // eslint-disable-next-line
                      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
                    )
                  )
                    formErrors[item.name] = [
                      `The given ${item.name} is invalid`,
                    ];
                  break;
                default:
                  break;
              }
            }
          }
        }
      });
      if (!isEmpty(formErrors)) {
        reject();
      } else {
        resolve();
      }
      setErrors(formErrors);
    });
  };
  return [errors, getData];
};
