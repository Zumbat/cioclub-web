import React from 'react';
import { useSelector } from 'react-redux';

import Spinner
from '../../Containers/Common/Spinner';
import { selectors } from './store';

export default () => {
	const loading = useSelector(selectors.getLoader());

	return loading ? <Spinner/> : null;
};
