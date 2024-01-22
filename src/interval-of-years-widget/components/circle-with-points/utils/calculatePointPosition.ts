export const calculatePointPosition = (index: number, total: number) => {
	const angle = ((index / total) * 360 - 60) * (Math.PI / 180); // Угол в радианах с начальной точкой на 1 часу
	const radius = 265;
	return {
		x: radius * Math.cos(angle) + radius,
		y: radius * Math.sin(angle) + radius,
	};
};
