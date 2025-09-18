import createBravyIconsComponent from '../create-bravyicon-component';

/**
 * @component @name Medal
 * @description Renders Bravyicons Medal svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
 const Medal = createBravyIconsComponent("Medal", [
    ["path", { d: "M12 15C15.7279 15 18.75 12.0899 18.75 8.5C18.75 4.91015 15.7279 2 12 2C8.27208 2 5.25 4.91015 5.25 8.5C5.25 12.0899 8.27208 15 12 15Z", stroke: "currentColor", key: "k0" }],
    ["path", { d: "M7.51999 13.52L7.51001 20.9C7.51001 21.8 8.14001 22.24 8.92001 21.87L11.6 20.6C11.82 20.49 12.19 20.49 12.41 20.6L15.1 21.87C15.87 22.23 16.51 21.8 16.51 20.9V13.34", stroke: "currentColor", key: "k1" }]
]);

export default Medal;
