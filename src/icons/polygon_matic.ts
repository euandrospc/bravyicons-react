import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name PolygonMatic
 * @description Renders Bravyicons PolygonMatic svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const PolygonMatic = createBravyIconsComponent("PolygonMatic", [
    ["path", { d: "M12 12.1L7.5 14.7L3 12.1V6.90005L7.5 4.30005L12 6.90005V8.50005", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M12 12.1L16.5 9.5L21 12.1V17.3L16.5 19.9L12 17.3V15.6", stroke: "currentColor", key: "k1" }]
]);

export default PolygonMatic;
