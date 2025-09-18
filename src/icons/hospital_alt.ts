import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name HospitalAlt
 * @description Renders Bravyicons HospitalAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const HospitalAlt = createBravyIconsComponent("HospitalAlt", [
    ["path", { d: "M2 22H22", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2Z", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M14.06 15H9.92998C9.41998 15 8.98999 15.42 8.98999 15.94V22H14.99V15.94C15 15.42 14.58 15 14.06 15Z", stroke: "currentColor", key: "k2" }],
    ["path", { d: "M12 6V11", stroke: "currentColor", key: "k3" }],
    ["path", { d: "M9.5 8.5H14.5", stroke: "currentColor", key: "k4" }]
]);

export default HospitalAlt;
