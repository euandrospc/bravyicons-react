import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name SheetIcon
 * @description Renders Bravyicons SheetIcon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const SheetIcon = createBravyIconsComponent("SheetIcon", [
    ["path", { d: "M15.4001 7.0001V12.4001C15.4001 14.057 14.057 15.4001 12.4001 15.4001H3.6001C1.94325 15.4001 0.600098 14.057 0.600098 12.4001V3.6001C0.600098 1.94325 1.94324 0.600098 3.6001 0.600098H9.0001M15.4001 7.0001L9.0001 0.600098M15.4001 7.0001H12.0001C10.3432 7.0001 9.0001 5.65695 9.0001 4.0001V0.600098", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M3 8.5H8.5", stroke: "currentColor", key: "k1" }],
    ["path", { d: "M3 11.5H6.5", stroke: "currentColor", key: "k2" }]
]);

export default SheetIcon;
