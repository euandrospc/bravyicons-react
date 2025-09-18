import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name PresentionChart
 * @description Renders Bravyicons PresentionChart svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const PresentionChart = createBravyIconsComponent("PresentionChart", [
    ["path", { d: "M5.89999 17H18.09C19.99 17 20.99 16 20.99 14.1V2H2.98999V14.1C2.99999 16 3.99999 17 5.89999 17Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M2 2H22", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M8 22L12 20V17", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M16 22L12 20", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M7.5 11L10.65 8.37C10.9 8.16 11.23 8.22 11.4 8.5L12.6 10.5C12.77 10.78 13.1 10.83 13.35 10.63L16.5 8", stroke: "currentColor", key: "k4" }]
]);

export default PresentionChart;
