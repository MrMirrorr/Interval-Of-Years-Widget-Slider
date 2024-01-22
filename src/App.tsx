import { FC } from 'react';
import { IntervalOfYearsWidget } from './interval-of-years-widget/IntervalOfYearsWidget';
import { initialData } from './initialData';

export const App: FC = () => {
	return <IntervalOfYearsWidget initialData={initialData} />;
};
