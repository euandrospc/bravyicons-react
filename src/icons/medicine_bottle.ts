import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name MedicineBottle
 * @description Renders Bravyicons MedicineBottle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const MedicineBottle = createBravyIconsComponent("MedicineBottle", [
    ["rect", { x: "1", y: "1", width: "14", height: "3", rx: "1", stroke: "currentColor", key: "k0" }],
    ["rect", { x: "5", y: "7", width: "6", height: "5", rx: "0.5", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M3 4H13V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V4Z", stroke: "currentColor", key: "k2" }]
]);

export default MedicineBottle;
