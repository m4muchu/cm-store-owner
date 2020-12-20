import { useState } from 'react';
import { isEmpty, forEach, isObject } from 'lodash';

export const useErrorsValidator = () => {
  const [errors, setErrors] = useState({});

  const getData = (requiredFields, currentDataObject) => {
    let formErrors = {};

    // const requiredFieldsKeyBy = keyBy(requiredFields, 'name')
    // const requiredFieldsKey = Object.keys(requiredFieldsKeyBy);
    // const currentDataKeys = Object.keys(currentDataObject);
    // const errorFields = currentDataKeys.filter(
    //   key => requiredFieldsKey.includes(key) && isEmpty(currentDataObject[key])
    // );

    // const errorsObject = {};

    // errorFields.map(key => {
    //   errorsObject[key] = requiredFieldsKeyBy[key].message;
    //   return key;
    // });

    // setErrors(errorsObject);

    forEach(requiredFields, (item) => {
      if (
        currentDataObject[item.name] === undefined ||
        (isObject(currentDataObject[item.name]) ||
          isEmpty(currentDataObject[item.name]))
      ) {
        formErrors[item.name] = `The ${item.name} field is required!`;
      } else {
        let isInvalid = false;
        if (currentDataObject[item.name]) {
          if (item.name) {
            switch (item.name) {
              case 'number':
                if (
                  isNaN(Number(currentDataObject[item.name])) ||
                  Math.sign(currentDataObject[item.name]) === -1
                )
                  isInvalid = true;
                break;
              case 'email':
                if (
                  !currentDataObject[item.name].match(
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  )
                )
                  isInvalid = true;
                break;
              // eslint-disable-next-line no-useless-escape
              case 'phone':
                if (
                  !currentDataObject[item.name].match(
                    /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
                  )
                )
                  isInvalid = true;
                break;
              default:
                break;
            }
          }
        }
        if (isInvalid)
          formErrors[item.name] = [`The given ${item.name} is invalid`];
      }
    });
    setErrors(formErrors);
  };
  return [errors, getData];
};
