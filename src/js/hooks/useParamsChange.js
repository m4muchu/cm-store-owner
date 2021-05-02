import { useState } from 'react';
import { debounce } from 'lodash';

export function useParamChange(callBack) {
    const [params, setParam] = useState({});

    const onParamsChange = debounce((key, value) => {
        if( key === 'sort' && params.sort && params.sort === value ){
            value = `-${value}`;
        }
        let current_params = { ...params, [key]: value };
        value === '' && delete current_params[key];
        key !== 'page' &&  delete current_params['page'];
        setParam({ ...current_params });
        callBack && callBack(current_params);
    },300);

    return [ params, onParamsChange ];
}
