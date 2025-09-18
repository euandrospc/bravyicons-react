import { ForwardRefExoticComponent, RefAttributes, SVGProps, ReactSVG } from 'react';

type IconSvgElement = [elementName: keyof ReactSVG, attrs: Record<string, string>][];
type IconSvgObject = IconSvgElement;
type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
interface BravyIconsProps extends ComponentAttributes {
    size?: string | number;
    className?: string;
    color?: string;
    strokeWidth?: string | number;
}
type BravyIconsIcon = ForwardRefExoticComponent<BravyIconsProps>;
declare const createBravyIconsComponent: (iconName: string, svgObject: IconSvgElement) => BravyIconsIcon;

/**
 * @component @name Aave
 * @description Renders Bravyicons Aave svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Aave: BravyIconsIcon;

/**
 * @component @name Activity
 * @description Renders Bravyicons Activity svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Activity: BravyIconsIcon;

/**
 * @component @name AddCircle
 * @description Renders Bravyicons AddCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AddCircle: BravyIconsIcon;

/**
 * @component @name AddSquare
 * @description Renders Bravyicons AddSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AddSquare: BravyIconsIcon;

/**
 * @component @name Add
 * @description Renders Bravyicons Add svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Add: BravyIconsIcon;

/**
 * @component @name Additem
 * @description Renders Bravyicons Additem svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Additem: BravyIconsIcon;

/**
 * @component @name Airdrop
 * @description Renders Bravyicons Airdrop svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Airdrop: BravyIconsIcon;

/**
 * @component @name AirplaneSquare
 * @description Renders Bravyicons AirplaneSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AirplaneSquare: BravyIconsIcon;

/**
 * @component @name Airplane
 * @description Renders Bravyicons Airplane svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Airplane: BravyIconsIcon;

/**
 * @component @name Airpod
 * @description Renders Bravyicons Airpod svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Airpod: BravyIconsIcon;

/**
 * @component @name Airpods
 * @description Renders Bravyicons Airpods svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Airpods: BravyIconsIcon;

/**
 * @component @name Alarm
 * @description Renders Bravyicons Alarm svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Alarm: BravyIconsIcon;

/**
 * @component @name AlignBottom
 * @description Renders Bravyicons AlignBottom svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AlignBottom: BravyIconsIcon;

/**
 * @component @name AlignHorizontally
 * @description Renders Bravyicons AlignHorizontally svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AlignHorizontally: BravyIconsIcon;

/**
 * @component @name AlignLeft
 * @description Renders Bravyicons AlignLeft svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AlignLeft: BravyIconsIcon;

/**
 * @component @name AlignRight
 * @description Renders Bravyicons AlignRight svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AlignRight: BravyIconsIcon;

/**
 * @component @name AlignVertically
 * @description Renders Bravyicons AlignVertically svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AlignVertically: BravyIconsIcon;

/**
 * @component @name Alternative
 * @description Renders Bravyicons Alternative svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Alternative: BravyIconsIcon;

/**
 * @component @name Amount
 * @description Renders Bravyicons Amount svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Amount: BravyIconsIcon;

/**
 * @component @name Android
 * @description Renders Bravyicons Android svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Android: BravyIconsIcon;

/**
 * @component @name AnkrAnkr
 * @description Renders Bravyicons AnkrAnkr svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AnkrAnkr: BravyIconsIcon;

/**
 * @component @name ApartmentHome
 * @description Renders Bravyicons ApartmentHome svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ApartmentHome: BravyIconsIcon;

/**
 * @component @name Apple
 * @description Renders Bravyicons Apple svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Apple: BravyIconsIcon;

/**
 * @component @name Aquarius
 * @description Renders Bravyicons Aquarius svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Aquarius: BravyIconsIcon;

/**
 * @component @name ArchiveAdd
 * @description Renders Bravyicons ArchiveAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArchiveAdd: BravyIconsIcon;

/**
 * @component @name ArchiveAlt
 * @description Renders Bravyicons ArchiveAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArchiveAlt: BravyIconsIcon;

/**
 * @component @name ArchiveBook
 * @description Renders Bravyicons ArchiveBook svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArchiveBook: BravyIconsIcon;

/**
 * @component @name ArchiveMinus
 * @description Renders Bravyicons ArchiveMinus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArchiveMinus: BravyIconsIcon;

/**
 * @component @name ArchiveSlash
 * @description Renders Bravyicons ArchiveSlash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArchiveSlash: BravyIconsIcon;

/**
 * @component @name ArchiveTick
 * @description Renders Bravyicons ArchiveTick svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArchiveTick: BravyIconsIcon;

/**
 * @component @name Archive
 * @description Renders Bravyicons Archive svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Archive: BravyIconsIcon;

/**
 * @component @name ArrangeCircle2
 * @description Renders Bravyicons ArrangeCircle2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrangeCircle2: BravyIconsIcon;

/**
 * @component @name ArrangeCircle
 * @description Renders Bravyicons ArrangeCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrangeCircle: BravyIconsIcon;

/**
 * @component @name ArrangeSquare2
 * @description Renders Bravyicons ArrangeSquare2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrangeSquare2: BravyIconsIcon;

/**
 * @component @name ArrangeSquare
 * @description Renders Bravyicons ArrangeSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrangeSquare: BravyIconsIcon;

/**
 * @component @name Arrow2
 * @description Renders Bravyicons Arrow2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Arrow2: BravyIconsIcon;

/**
 * @component @name Arrow3
 * @description Renders Bravyicons Arrow3 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Arrow3: BravyIconsIcon;

/**
 * @component @name ArrowBottom
 * @description Renders Bravyicons ArrowBottom svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowBottom: BravyIconsIcon;

/**
 * @component @name ArrowCircleDown
 * @description Renders Bravyicons ArrowCircleDown svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowCircleDown: BravyIconsIcon;

/**
 * @component @name ArrowCircleLeft
 * @description Renders Bravyicons ArrowCircleLeft svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowCircleLeft: BravyIconsIcon;

/**
 * @component @name ArrowCircleRight
 * @description Renders Bravyicons ArrowCircleRight svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowCircleRight: BravyIconsIcon;

/**
 * @component @name ArrowDown1
 * @description Renders Bravyicons ArrowDown1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowDown1: BravyIconsIcon;

/**
 * @component @name ArrowDown2
 * @description Renders Bravyicons ArrowDown2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowDown2: BravyIconsIcon;

/**
 * @component @name ArrowDown
 * @description Renders Bravyicons ArrowDown svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowDown: BravyIconsIcon;

/**
 * @component @name ArrowLeft1
 * @description Renders Bravyicons ArrowLeft1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowLeft1: BravyIconsIcon;

/**
 * @component @name ArrowLeft2
 * @description Renders Bravyicons ArrowLeft2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowLeft2: BravyIconsIcon;

/**
 * @component @name ArrowLeft3
 * @description Renders Bravyicons ArrowLeft3 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowLeft3: BravyIconsIcon;

/**
 * @component @name ArrowLeft
 * @description Renders Bravyicons ArrowLeft svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowLeft: BravyIconsIcon;

/**
 * @component @name ArrowRight1
 * @description Renders Bravyicons ArrowRight1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowRight1: BravyIconsIcon;

/**
 * @component @name ArrowRight2
 * @description Renders Bravyicons ArrowRight2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowRight2: BravyIconsIcon;

/**
 * @component @name ArrowRight3
 * @description Renders Bravyicons ArrowRight3 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowRight3: BravyIconsIcon;

/**
 * @component @name ArrowRight
 * @description Renders Bravyicons ArrowRight svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowRight: BravyIconsIcon;

/**
 * @component @name ArrowSquareDown
 * @description Renders Bravyicons ArrowSquareDown svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowSquareDown: BravyIconsIcon;

/**
 * @component @name ArrowSquareLeft
 * @description Renders Bravyicons ArrowSquareLeft svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowSquareLeft: BravyIconsIcon;

/**
 * @component @name ArrowSquareRight
 * @description Renders Bravyicons ArrowSquareRight svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowSquareRight: BravyIconsIcon;

/**
 * @component @name ArrowSquareUp
 * @description Renders Bravyicons ArrowSquareUp svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowSquareUp: BravyIconsIcon;

/**
 * @component @name ArrowSquare
 * @description Renders Bravyicons ArrowSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowSquare: BravyIconsIcon;

/**
 * @component @name ArrowSwapHorizontal
 * @description Renders Bravyicons ArrowSwapHorizontal svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowSwapHorizontal: BravyIconsIcon;

/**
 * @component @name ArrowUp1
 * @description Renders Bravyicons ArrowUp1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowUp1: BravyIconsIcon;

/**
 * @component @name ArrowUp2
 * @description Renders Bravyicons ArrowUp2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowUp2: BravyIconsIcon;

/**
 * @component @name ArrowUp3
 * @description Renders Bravyicons ArrowUp3 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowUp3: BravyIconsIcon;

/**
 * @component @name ArrowUpCircle
 * @description Renders Bravyicons ArrowUpCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowUpCircle: BravyIconsIcon;

/**
 * @component @name ArrowUp
 * @description Renders Bravyicons ArrowUp svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ArrowUp: BravyIconsIcon;

/**
 * @component @name Arrow
 * @description Renders Bravyicons Arrow svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Arrow: BravyIconsIcon;

/**
 * @component @name AttachCircle
 * @description Renders Bravyicons AttachCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AttachCircle: BravyIconsIcon;

/**
 * @component @name AttachSquare
 * @description Renders Bravyicons AttachSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AttachSquare: BravyIconsIcon;

/**
 * @component @name Attention
 * @description Renders Bravyicons Attention svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Attention: BravyIconsIcon;

/**
 * @component @name AudioSquare
 * @description Renders Bravyicons AudioSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AudioSquare: BravyIconsIcon;

/**
 * @component @name AugurRep
 * @description Renders Bravyicons AugurRep svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AugurRep: BravyIconsIcon;

/**
 * @component @name Autobrightness
 * @description Renders Bravyicons Autobrightness svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Autobrightness: BravyIconsIcon;

/**
 * @component @name AutonioNiox
 * @description Renders Bravyicons AutonioNiox svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AutonioNiox: BravyIconsIcon;

/**
 * @component @name AvalancheAvax
 * @description Renders Bravyicons AvalancheAvax svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const AvalancheAvax: BravyIconsIcon;

/**
 * @component @name Award
 * @description Renders Bravyicons Award svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Award: BravyIconsIcon;

/**
 * @component @name Baby
 * @description Renders Bravyicons Baby svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Baby: BravyIconsIcon;

/**
 * @component @name Baby2
 * @description Renders Bravyicons Baby2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Baby2: BravyIconsIcon;

/**
 * @component @name BackSquare
 * @description Renders Bravyicons BackSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BackSquare: BravyIconsIcon;

/**
 * @component @name Backarrow
 * @description Renders Bravyicons Backarrow svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Backarrow: BravyIconsIcon;

/**
 * @component @name Backward10Seconds
 * @description Renders Bravyicons Backward10Seconds svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Backward10Seconds: BravyIconsIcon;

/**
 * @component @name Backward15Seconds
 * @description Renders Bravyicons Backward15Seconds svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Backward15Seconds: BravyIconsIcon;

/**
 * @component @name Backward5Seconds
 * @description Renders Bravyicons Backward5Seconds svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Backward5Seconds: BravyIconsIcon;

/**
 * @component @name BackwardItem
 * @description Renders Bravyicons BackwardItem svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BackwardItem: BravyIconsIcon;

/**
 * @component @name Backward
 * @description Renders Bravyicons Backward svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Backward: BravyIconsIcon;

/**
 * @component @name BackIconsUia
 * @description Renders Bravyicons BackIconsUia svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BackIconsUia: BravyIconsIcon;

/**
 * @component @name Bag2
 * @description Renders Bravyicons Bag2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Bag2: BravyIconsIcon;

/**
 * @component @name BagAlt
 * @description Renders Bravyicons BagAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BagAlt: BravyIconsIcon;

/**
 * @component @name BagCross1
 * @description Renders Bravyicons BagCross1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BagCross1: BravyIconsIcon;

/**
 * @component @name BagCross
 * @description Renders Bravyicons BagCross svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BagCross: BravyIconsIcon;

/**
 * @component @name BagHappy
 * @description Renders Bravyicons BagHappy svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BagHappy: BravyIconsIcon;

/**
 * @component @name BagTick2
 * @description Renders Bravyicons BagTick2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BagTick2: BravyIconsIcon;

/**
 * @component @name BagTick
 * @description Renders Bravyicons BagTick svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BagTick: BravyIconsIcon;

/**
 * @component @name BagTimer
 * @description Renders Bravyicons BagTimer svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BagTimer: BravyIconsIcon;

/**
 * @component @name Bag
 * @description Renders Bravyicons Bag svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Bag: BravyIconsIcon;

/**
 * @component @name Balance
 * @description Renders Bravyicons Balance svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Balance: BravyIconsIcon;

/**
 * @component @name Bank
 * @description Renders Bravyicons Bank svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Bank: BravyIconsIcon;

/**
 * @component @name Barcode
 * @description Renders Bravyicons Barcode svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Barcode: BravyIconsIcon;

/**
 * @component @name BatteryCharging
 * @description Renders Bravyicons BatteryCharging svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BatteryCharging: BravyIconsIcon;

/**
 * @component @name BatteryDisable
 * @description Renders Bravyicons BatteryDisable svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BatteryDisable: BravyIconsIcon;

/**
 * @component @name BatteryEmpty1
 * @description Renders Bravyicons BatteryEmpty1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BatteryEmpty1: BravyIconsIcon;

/**
 * @component @name BatteryEmpty
 * @description Renders Bravyicons BatteryEmpty svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BatteryEmpty: BravyIconsIcon;

/**
 * @component @name BatteryFull
 * @description Renders Bravyicons BatteryFull svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BatteryFull: BravyIconsIcon;

/**
 * @component @name Be
 * @description Renders Bravyicons Be svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Be: BravyIconsIcon;

/**
 * @component @name Bell
 * @description Renders Bravyicons Bell svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Bell: BravyIconsIcon;

/**
 * @component @name Bezier
 * @description Renders Bravyicons Bezier svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Bezier: BravyIconsIcon;

/**
 * @component @name Bicycle
 * @description Renders Bravyicons Bicycle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Bicycle: BravyIconsIcon;

/**
 * @component @name Bicycle2
 * @description Renders Bravyicons Bicycle2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Bicycle2: BravyIconsIcon;

/**
 * @component @name Bill
 * @description Renders Bravyicons Bill svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Bill: BravyIconsIcon;

/**
 * @component @name BinanceCoinBnb
 * @description Renders Bravyicons BinanceCoinBnb svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BinanceCoinBnb: BravyIconsIcon;

/**
 * @component @name BinanceUsdBusd
 * @description Renders Bravyicons BinanceUsdBusd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BinanceUsdBusd: BravyIconsIcon;

/**
 * @component @name Birthday
 * @description Renders Bravyicons Birthday svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Birthday: BravyIconsIcon;

/**
 * @component @name BitcoinBtc
 * @description Renders Bravyicons BitcoinBtc svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BitcoinBtc: BravyIconsIcon;

/**
 * @component @name BitcoinCard
 * @description Renders Bravyicons BitcoinCard svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BitcoinCard: BravyIconsIcon;

/**
 * @component @name BitcoinConvert
 * @description Renders Bravyicons BitcoinConvert svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BitcoinConvert: BravyIconsIcon;

/**
 * @component @name BitcoinRefresh
 * @description Renders Bravyicons BitcoinRefresh svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BitcoinRefresh: BravyIconsIcon;

/**
 * @component @name Blend2
 * @description Renders Bravyicons Blend2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Blend2: BravyIconsIcon;

/**
 * @component @name Blend
 * @description Renders Bravyicons Blend svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Blend: BravyIconsIcon;

/**
 * @component @name Blogger
 * @description Renders Bravyicons Blogger svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Blogger: BravyIconsIcon;

/**
 * @component @name Bluetooth2
 * @description Renders Bravyicons Bluetooth2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Bluetooth2: BravyIconsIcon;

/**
 * @component @name BluetoothCircle
 * @description Renders Bravyicons BluetoothCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BluetoothCircle: BravyIconsIcon;

/**
 * @component @name BluetoothRectangle
 * @description Renders Bravyicons BluetoothRectangle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BluetoothRectangle: BravyIconsIcon;

/**
 * @component @name Bluetooth
 * @description Renders Bravyicons Bluetooth svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Bluetooth: BravyIconsIcon;

/**
 * @component @name Blur
 * @description Renders Bravyicons Blur svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Blur: BravyIconsIcon;

/**
 * @component @name Book1
 * @description Renders Bravyicons Book1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Book1: BravyIconsIcon;

/**
 * @component @name BookSaved
 * @description Renders Bravyicons BookSaved svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BookSaved: BravyIconsIcon;

/**
 * @component @name BookSquare
 * @description Renders Bravyicons BookSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BookSquare: BravyIconsIcon;

/**
 * @component @name Book
 * @description Renders Bravyicons Book svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Book: BravyIconsIcon;

/**
 * @component @name Bookmark2
 * @description Renders Bravyicons Bookmark2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Bookmark2: BravyIconsIcon;

/**
 * @component @name Bookmark
 * @description Renders Bravyicons Bookmark svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Bookmark: BravyIconsIcon;

/**
 * @component @name Bootsrap
 * @description Renders Bravyicons Bootsrap svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Bootsrap: BravyIconsIcon;

/**
 * @component @name Box1
 * @description Renders Bravyicons Box1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Box1: BravyIconsIcon;

/**
 * @component @name Box2
 * @description Renders Bravyicons Box2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Box2: BravyIconsIcon;

/**
 * @component @name BoxAdd
 * @description Renders Bravyicons BoxAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BoxAdd: BravyIconsIcon;

/**
 * @component @name BoxAlt
 * @description Renders Bravyicons BoxAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BoxAlt: BravyIconsIcon;

/**
 * @component @name BoxRemove
 * @description Renders Bravyicons BoxRemove svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BoxRemove: BravyIconsIcon;

/**
 * @component @name BoxSearch
 * @description Renders Bravyicons BoxSearch svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BoxSearch: BravyIconsIcon;

/**
 * @component @name BoxTick
 * @description Renders Bravyicons BoxTick svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BoxTick: BravyIconsIcon;

/**
 * @component @name BoxTime
 * @description Renders Bravyicons BoxTime svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BoxTime: BravyIconsIcon;

/**
 * @component @name Box
 * @description Renders Bravyicons Box svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Box: BravyIconsIcon;

/**
 * @component @name Briefcase
 * @description Renders Bravyicons Briefcase svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Briefcase: BravyIconsIcon;

/**
 * @component @name BrifecaseCross
 * @description Renders Bravyicons BrifecaseCross svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BrifecaseCross: BravyIconsIcon;

/**
 * @component @name BrifecaseTick
 * @description Renders Bravyicons BrifecaseTick svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BrifecaseTick: BravyIconsIcon;

/**
 * @component @name BrifecaseTimer
 * @description Renders Bravyicons BrifecaseTimer svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BrifecaseTimer: BravyIconsIcon;

/**
 * @component @name Broom
 * @description Renders Bravyicons Broom svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Broom: BravyIconsIcon;

/**
 * @component @name Brush1
 * @description Renders Bravyicons Brush1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Brush1: BravyIconsIcon;

/**
 * @component @name Brush2
 * @description Renders Bravyicons Brush2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Brush2: BravyIconsIcon;

/**
 * @component @name Brush3
 * @description Renders Bravyicons Brush3 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Brush3: BravyIconsIcon;

/**
 * @component @name BrushAlt
 * @description Renders Bravyicons BrushAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BrushAlt: BravyIconsIcon;

/**
 * @component @name Brush
 * @description Renders Bravyicons Brush svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Brush: BravyIconsIcon;

/**
 * @component @name Bubble
 * @description Renders Bravyicons Bubble svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Bubble: BravyIconsIcon;

/**
 * @component @name BucketCircle
 * @description Renders Bravyicons BucketCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BucketCircle: BravyIconsIcon;

/**
 * @component @name BucketSquare
 * @description Renders Bravyicons BucketSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BucketSquare: BravyIconsIcon;

/**
 * @component @name Building3
 * @description Renders Bravyicons Building3 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Building3: BravyIconsIcon;

/**
 * @component @name Building4
 * @description Renders Bravyicons Building4 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Building4: BravyIconsIcon;

/**
 * @component @name Building
 * @description Renders Bravyicons Building svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Building: BravyIconsIcon;

/**
 * @component @name Buildings2
 * @description Renders Bravyicons Buildings2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Buildings2: BravyIconsIcon;

/**
 * @component @name Buildings
 * @description Renders Bravyicons Buildings svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Buildings: BravyIconsIcon;

/**
 * @component @name Buliding
 * @description Renders Bravyicons Buliding svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Buliding: BravyIconsIcon;

/**
 * @component @name Bus
 * @description Renders Bravyicons Bus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Bus: BravyIconsIcon;

/**
 * @component @name BusinessCompanyBuilding
 * @description Renders Bravyicons BusinessCompanyBuilding svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BusinessCompanyBuilding: BravyIconsIcon;

/**
 * @component @name BuyCrypto
 * @description Renders Bravyicons BuyCrypto svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const BuyCrypto: BravyIconsIcon;

/**
 * @component @name Cake
 * @description Renders Bravyicons Cake svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Cake: BravyIconsIcon;

/**
 * @component @name Calculator
 * @description Renders Bravyicons Calculator svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Calculator: BravyIconsIcon;

/**
 * @component @name Calendar1
 * @description Renders Bravyicons Calendar1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Calendar1: BravyIconsIcon;

/**
 * @component @name Calendar2
 * @description Renders Bravyicons Calendar2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Calendar2: BravyIconsIcon;

/**
 * @component @name CalendarAdd
 * @description Renders Bravyicons CalendarAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CalendarAdd: BravyIconsIcon;

/**
 * @component @name CalendarCircle
 * @description Renders Bravyicons CalendarCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CalendarCircle: BravyIconsIcon;

/**
 * @component @name CalendarEdit
 * @description Renders Bravyicons CalendarEdit svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CalendarEdit: BravyIconsIcon;

/**
 * @component @name CalendarRemove
 * @description Renders Bravyicons CalendarRemove svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CalendarRemove: BravyIconsIcon;

/**
 * @component @name CalendarSearch
 * @description Renders Bravyicons CalendarSearch svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CalendarSearch: BravyIconsIcon;

/**
 * @component @name CalendarTick
 * @description Renders Bravyicons CalendarTick svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CalendarTick: BravyIconsIcon;

/**
 * @component @name Calendar
 * @description Renders Bravyicons Calendar svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Calendar: BravyIconsIcon;

/**
 * @component @name CalenderTimeAppointment
 * @description Renders Bravyicons CalenderTimeAppointment svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CalenderTimeAppointment: BravyIconsIcon;

/**
 * @component @name CallAdd
 * @description Renders Bravyicons CallAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CallAdd: BravyIconsIcon;

/**
 * @component @name CallCalling
 * @description Renders Bravyicons CallCalling svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CallCalling: BravyIconsIcon;

/**
 * @component @name CallIncoming
 * @description Renders Bravyicons CallIncoming svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CallIncoming: BravyIconsIcon;

/**
 * @component @name CallOutgoing
 * @description Renders Bravyicons CallOutgoing svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CallOutgoing: BravyIconsIcon;

/**
 * @component @name CallReceived
 * @description Renders Bravyicons CallReceived svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CallReceived: BravyIconsIcon;

/**
 * @component @name CallSlash
 * @description Renders Bravyicons CallSlash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CallSlash: BravyIconsIcon;

/**
 * @component @name Call
 * @description Renders Bravyicons Call svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Call: BravyIconsIcon;

/**
 * @component @name CallcentarHelp
 * @description Renders Bravyicons CallcentarHelp svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CallcentarHelp: BravyIconsIcon;

/**
 * @component @name CameraAlt
 * @description Renders Bravyicons CameraAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CameraAlt: BravyIconsIcon;

/**
 * @component @name CameraSlash
 * @description Renders Bravyicons CameraSlash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CameraSlash: BravyIconsIcon;

/**
 * @component @name Camera
 * @description Renders Bravyicons Camera svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Camera: BravyIconsIcon;

/**
 * @component @name Candle2
 * @description Renders Bravyicons Candle2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Candle2: BravyIconsIcon;

/**
 * @component @name Candle
 * @description Renders Bravyicons Candle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Candle: BravyIconsIcon;

/**
 * @component @name Car
 * @description Renders Bravyicons Car svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Car: BravyIconsIcon;

/**
 * @component @name CardAdd
 * @description Renders Bravyicons CardAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CardAdd: BravyIconsIcon;

/**
 * @component @name CardCoin
 * @description Renders Bravyicons CardCoin svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CardCoin: BravyIconsIcon;

/**
 * @component @name CardEdit
 * @description Renders Bravyicons CardEdit svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CardEdit: BravyIconsIcon;

/**
 * @component @name CardPos
 * @description Renders Bravyicons CardPos svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CardPos: BravyIconsIcon;

/**
 * @component @name CardReceive
 * @description Renders Bravyicons CardReceive svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CardReceive: BravyIconsIcon;

/**
 * @component @name CardRemove1
 * @description Renders Bravyicons CardRemove1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CardRemove1: BravyIconsIcon;

/**
 * @component @name CardRemove
 * @description Renders Bravyicons CardRemove svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CardRemove: BravyIconsIcon;

/**
 * @component @name CardSend
 * @description Renders Bravyicons CardSend svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CardSend: BravyIconsIcon;

/**
 * @component @name CardSlash
 * @description Renders Bravyicons CardSlash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CardSlash: BravyIconsIcon;

/**
 * @component @name CardTick1
 * @description Renders Bravyicons CardTick1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CardTick1: BravyIconsIcon;

/**
 * @component @name CardTick
 * @description Renders Bravyicons CardTick svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CardTick: BravyIconsIcon;

/**
 * @component @name Card
 * @description Renders Bravyicons Card svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Card: BravyIconsIcon;

/**
 * @component @name CardanoAda
 * @description Renders Bravyicons CardanoAda svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CardanoAda: BravyIconsIcon;

/**
 * @component @name Cards
 * @description Renders Bravyicons Cards svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Cards: BravyIconsIcon;

/**
 * @component @name Cart
 * @description Renders Bravyicons Cart svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Cart: BravyIconsIcon;

/**
 * @component @name Cash
 * @description Renders Bravyicons Cash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Cash: BravyIconsIcon;

/**
 * @component @name Category2
 * @description Renders Bravyicons Category2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Category2: BravyIconsIcon;

/**
 * @component @name CategoryDashboard
 * @description Renders Bravyicons CategoryDashboard svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CategoryDashboard: BravyIconsIcon;

/**
 * @component @name Category
 * @description Renders Bravyicons Category svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Category: BravyIconsIcon;

/**
 * @component @name Cd
 * @description Renders Bravyicons Cd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Cd: BravyIconsIcon;

/**
 * @component @name CeloCelo
 * @description Renders Bravyicons CeloCelo svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CeloCelo: BravyIconsIcon;

/**
 * @component @name CelsiusCel
 * @description Renders Bravyicons CelsiusCel svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CelsiusCel: BravyIconsIcon;

/**
 * @component @name ChainlinkLink
 * @description Renders Bravyicons ChainlinkLink svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ChainlinkLink: BravyIconsIcon;

/**
 * @component @name Chart1
 * @description Renders Bravyicons Chart1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Chart1: BravyIconsIcon;

/**
 * @component @name Chart2
 * @description Renders Bravyicons Chart2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Chart2: BravyIconsIcon;

/**
 * @component @name Chart21
 * @description Renders Bravyicons Chart21 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Chart21: BravyIconsIcon;

/**
 * @component @name ChartAlt2
 * @description Renders Bravyicons ChartAlt2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ChartAlt2: BravyIconsIcon;

/**
 * @component @name ChartAlt
 * @description Renders Bravyicons ChartAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ChartAlt: BravyIconsIcon;

/**
 * @component @name ChartSquare
 * @description Renders Bravyicons ChartSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ChartSquare: BravyIconsIcon;

/**
 * @component @name ChartSuccess
 * @description Renders Bravyicons ChartSuccess svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ChartSuccess: BravyIconsIcon;

/**
 * @component @name Chart
 * @description Renders Bravyicons Chart svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Chart: BravyIconsIcon;

/**
 * @component @name Chat
 * @description Renders Bravyicons Chat svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Chat: BravyIconsIcon;

/**
 * @component @name Check
 * @description Renders Bravyicons Check svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Check: BravyIconsIcon;

/**
 * @component @name Checkbox
 * @description Renders Bravyicons Checkbox svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Checkbox: BravyIconsIcon;

/**
 * @component @name Checked
 * @description Renders Bravyicons Checked svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Checked: BravyIconsIcon;

/**
 * @component @name Chrome
 * @description Renders Bravyicons Chrome svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Chrome: BravyIconsIcon;

/**
 * @component @name CivicCvc
 * @description Renders Bravyicons CivicCvc svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CivicCvc: BravyIconsIcon;

/**
 * @component @name ClipboardClose
 * @description Renders Bravyicons ClipboardClose svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ClipboardClose: BravyIconsIcon;

/**
 * @component @name ClipboardExport
 * @description Renders Bravyicons ClipboardExport svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ClipboardExport: BravyIconsIcon;

/**
 * @component @name ClipboardImport
 * @description Renders Bravyicons ClipboardImport svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ClipboardImport: BravyIconsIcon;

/**
 * @component @name ClipboardText
 * @description Renders Bravyicons ClipboardText svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ClipboardText: BravyIconsIcon;

/**
 * @component @name ClipboardTick
 * @description Renders Bravyicons ClipboardTick svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ClipboardTick: BravyIconsIcon;

/**
 * @component @name Clipboard
 * @description Renders Bravyicons Clipboard svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Clipboard: BravyIconsIcon;

/**
 * @component @name Clock
 * @description Renders Bravyicons Clock svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Clock: BravyIconsIcon;

/**
 * @component @name CloseCircle
 * @description Renders Bravyicons CloseCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloseCircle: BravyIconsIcon;

/**
 * @component @name CloseNa
 * @description Renders Bravyicons CloseNa svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloseNa: BravyIconsIcon;

/**
 * @component @name CloseSquare
 * @description Renders Bravyicons CloseSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloseSquare: BravyIconsIcon;

/**
 * @component @name Close
 * @description Renders Bravyicons Close svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Close: BravyIconsIcon;

/**
 * @component @name CloudAdd
 * @description Renders Bravyicons CloudAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudAdd: BravyIconsIcon;

/**
 * @component @name CloudChange
 * @description Renders Bravyicons CloudChange svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudChange: BravyIconsIcon;

/**
 * @component @name CloudConnection
 * @description Renders Bravyicons CloudConnection svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudConnection: BravyIconsIcon;

/**
 * @component @name CloudCross
 * @description Renders Bravyicons CloudCross svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudCross: BravyIconsIcon;

/**
 * @component @name CloudDrizzle
 * @description Renders Bravyicons CloudDrizzle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudDrizzle: BravyIconsIcon;

/**
 * @component @name CloudFog
 * @description Renders Bravyicons CloudFog svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudFog: BravyIconsIcon;

/**
 * @component @name CloudLightning
 * @description Renders Bravyicons CloudLightning svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudLightning: BravyIconsIcon;

/**
 * @component @name CloudMinus
 * @description Renders Bravyicons CloudMinus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudMinus: BravyIconsIcon;

/**
 * @component @name CloudNotif
 * @description Renders Bravyicons CloudNotif svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudNotif: BravyIconsIcon;

/**
 * @component @name CloudPlus
 * @description Renders Bravyicons CloudPlus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudPlus: BravyIconsIcon;

/**
 * @component @name CloudRemove
 * @description Renders Bravyicons CloudRemove svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudRemove: BravyIconsIcon;

/**
 * @component @name CloudSnow
 * @description Renders Bravyicons CloudSnow svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudSnow: BravyIconsIcon;

/**
 * @component @name CloudSunny
 * @description Renders Bravyicons CloudSunny svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudSunny: BravyIconsIcon;

/**
 * @component @name CloudUploadDownload
 * @description Renders Bravyicons CloudUploadDownload svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CloudUploadDownload: BravyIconsIcon;

/**
 * @component @name Cloud
 * @description Renders Bravyicons Cloud svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Cloud: BravyIconsIcon;

/**
 * @component @name Code1
 * @description Renders Bravyicons Code1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Code1: BravyIconsIcon;

/**
 * @component @name CodeCircle
 * @description Renders Bravyicons CodeCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CodeCircle: BravyIconsIcon;

/**
 * @component @name Code
 * @description Renders Bravyicons Code svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Code: BravyIconsIcon;

/**
 * @component @name Coffee
 * @description Renders Bravyicons Coffee svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Coffee: BravyIconsIcon;

/**
 * @component @name Coin1
 * @description Renders Bravyicons Coin1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Coin1: BravyIconsIcon;

/**
 * @component @name Coin
 * @description Renders Bravyicons Coin svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Coin: BravyIconsIcon;

/**
 * @component @name ColorSwatch
 * @description Renders Bravyicons ColorSwatch svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ColorSwatch: BravyIconsIcon;

/**
 * @component @name Colorfilter
 * @description Renders Bravyicons Colorfilter svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Colorfilter: BravyIconsIcon;

/**
 * @component @name ColorsSquare
 * @description Renders Bravyicons ColorsSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ColorsSquare: BravyIconsIcon;

/**
 * @component @name CommandSquare
 * @description Renders Bravyicons CommandSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CommandSquare: BravyIconsIcon;

/**
 * @component @name Command
 * @description Renders Bravyicons Command svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Command: BravyIconsIcon;

/**
 * @component @name Component
 * @description Renders Bravyicons Component svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Component: BravyIconsIcon;

/**
 * @component @name Compound
 * @description Renders Bravyicons Compound svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Compound: BravyIconsIcon;

/**
 * @component @name Computing
 * @description Renders Bravyicons Computing svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Computing: BravyIconsIcon;

/**
 * @component @name ConvertThreeDCube
 * @description Renders Bravyicons ConvertThreeDCube svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ConvertThreeDCube: BravyIconsIcon;

/**
 * @component @name Convert
 * @description Renders Bravyicons Convert svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Convert: BravyIconsIcon;

/**
 * @component @name Convertshape2
 * @description Renders Bravyicons Convertshape2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Convertshape2: BravyIconsIcon;

/**
 * @component @name Convertshape
 * @description Renders Bravyicons Convertshape svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Convertshape: BravyIconsIcon;

/**
 * @component @name CopyAlt
 * @description Renders Bravyicons CopyAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CopyAlt: BravyIconsIcon;

/**
 * @component @name CopySuccess
 * @description Renders Bravyicons CopySuccess svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CopySuccess: BravyIconsIcon;

/**
 * @component @name Copy
 * @description Renders Bravyicons Copy svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Copy: BravyIconsIcon;

/**
 * @component @name Copyright
 * @description Renders Bravyicons Copyright svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Copyright: BravyIconsIcon;

/**
 * @component @name Courthouse
 * @description Renders Bravyicons Courthouse svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Courthouse: BravyIconsIcon;

/**
 * @component @name CpuCharge
 * @description Renders Bravyicons CpuCharge svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CpuCharge: BravyIconsIcon;

/**
 * @component @name CpuSetting
 * @description Renders Bravyicons CpuSetting svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CpuSetting: BravyIconsIcon;

/**
 * @component @name Cpu
 * @description Renders Bravyicons Cpu svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Cpu: BravyIconsIcon;

/**
 * @component @name CreativeCommons
 * @description Renders Bravyicons CreativeCommons svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CreativeCommons: BravyIconsIcon;

/**
 * @component @name CreditCardPlus
 * @description Renders Bravyicons CreditCardPlus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CreditCardPlus: BravyIconsIcon;

/**
 * @component @name CreditCard
 * @description Renders Bravyicons CreditCard svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CreditCard: BravyIconsIcon;

/**
 * @component @name Crop
 * @description Renders Bravyicons Crop svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Crop: BravyIconsIcon;

/**
 * @component @name Crown1
 * @description Renders Bravyicons Crown1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Crown1: BravyIconsIcon;

/**
 * @component @name Crown
 * @description Renders Bravyicons Crown svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Crown: BravyIconsIcon;

/**
 * @component @name CupAlt
 * @description Renders Bravyicons CupAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const CupAlt: BravyIconsIcon;

/**
 * @component @name Cup
 * @description Renders Bravyicons Cup svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Cup: BravyIconsIcon;

/**
 * @component @name Cursor
 * @description Renders Bravyicons Cursor svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Cursor: BravyIconsIcon;

/**
 * @component @name DaiDai
 * @description Renders Bravyicons DaiDai svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DaiDai: BravyIconsIcon;

/**
 * @component @name Danger
 * @description Renders Bravyicons Danger svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Danger: BravyIconsIcon;

/**
 * @component @name DashDash
 * @description Renders Bravyicons DashDash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DashDash: BravyIconsIcon;

/**
 * @component @name Data2
 * @description Renders Bravyicons Data2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Data2: BravyIconsIcon;

/**
 * @component @name Data
 * @description Renders Bravyicons Data svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Data: BravyIconsIcon;

/**
 * @component @name DecredDcr
 * @description Renders Bravyicons DecredDcr svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DecredDcr: BravyIconsIcon;

/**
 * @component @name Deliverybox
 * @description Renders Bravyicons Deliverybox svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Deliverybox: BravyIconsIcon;

/**
 * @component @name DentDent
 * @description Renders Bravyicons DentDent svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DentDent: BravyIconsIcon;

/**
 * @component @name Designtools
 * @description Renders Bravyicons Designtools svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Designtools: BravyIconsIcon;

/**
 * @component @name DevicesAlt
 * @description Renders Bravyicons DevicesAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DevicesAlt: BravyIconsIcon;

/**
 * @component @name Devices
 * @description Renders Bravyicons Devices svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Devices: BravyIconsIcon;

/**
 * @component @name Diagram
 * @description Renders Bravyicons Diagram svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Diagram: BravyIconsIcon;

/**
 * @component @name Diamonds
 * @description Renders Bravyicons Diamonds svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Diamonds: BravyIconsIcon;

/**
 * @component @name DirectDown
 * @description Renders Bravyicons DirectDown svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DirectDown: BravyIconsIcon;

/**
 * @component @name DirectLeft
 * @description Renders Bravyicons DirectLeft svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DirectLeft: BravyIconsIcon;

/**
 * @component @name DirectRight
 * @description Renders Bravyicons DirectRight svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DirectRight: BravyIconsIcon;

/**
 * @component @name DirectUp
 * @description Renders Bravyicons DirectUp svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DirectUp: BravyIconsIcon;

/**
 * @component @name DiscountCircle
 * @description Renders Bravyicons DiscountCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DiscountCircle: BravyIconsIcon;

/**
 * @component @name DiscountShape
 * @description Renders Bravyicons DiscountShape svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DiscountShape: BravyIconsIcon;

/**
 * @component @name DiscoverAlt
 * @description Renders Bravyicons DiscoverAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DiscoverAlt: BravyIconsIcon;

/**
 * @component @name Discover
 * @description Renders Bravyicons Discover svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Discover: BravyIconsIcon;

/**
 * @component @name Dislike
 * @description Renders Bravyicons Dislike svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Dislike: BravyIconsIcon;

/**
 * @component @name DoctorEarphone
 * @description Renders Bravyicons DoctorEarphone svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DoctorEarphone: BravyIconsIcon;

/**
 * @component @name DocumentAlt
 * @description Renders Bravyicons DocumentAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DocumentAlt: BravyIconsIcon;

/**
 * @component @name DocumentCloud
 * @description Renders Bravyicons DocumentCloud svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DocumentCloud: BravyIconsIcon;

/**
 * @component @name DocumentCode2
 * @description Renders Bravyicons DocumentCode2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DocumentCode2: BravyIconsIcon;

/**
 * @component @name DocumentCode
 * @description Renders Bravyicons DocumentCode svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DocumentCode: BravyIconsIcon;

/**
 * @component @name DocumentCopy
 * @description Renders Bravyicons DocumentCopy svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DocumentCopy: BravyIconsIcon;

/**
 * @component @name DocumentDownload
 * @description Renders Bravyicons DocumentDownload svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DocumentDownload: BravyIconsIcon;

/**
 * @component @name DocumentFavorite
 * @description Renders Bravyicons DocumentFavorite svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DocumentFavorite: BravyIconsIcon;

/**
 * @component @name DocumentFilter
 * @description Renders Bravyicons DocumentFilter svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DocumentFilter: BravyIconsIcon;

/**
 * @component @name DocumentForward
 * @description Renders Bravyicons DocumentForward svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DocumentForward: BravyIconsIcon;

/**
 * @component @name DocumentLike
 * @description Renders Bravyicons DocumentLike svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DocumentLike: BravyIconsIcon;

/**
 * @component @name DocumentPrevious
 * @description Renders Bravyicons DocumentPrevious svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DocumentPrevious: BravyIconsIcon;

/**
 * @component @name DocumentSketch
 * @description Renders Bravyicons DocumentSketch svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DocumentSketch: BravyIconsIcon;

/**
 * @component @name DocumentText1
 * @description Renders Bravyicons DocumentText1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DocumentText1: BravyIconsIcon;

/**
 * @component @name DocumentText
 * @description Renders Bravyicons DocumentText svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DocumentText: BravyIconsIcon;

/**
 * @component @name DocumentUpload
 * @description Renders Bravyicons DocumentUpload svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DocumentUpload: BravyIconsIcon;

/**
 * @component @name Document
 * @description Renders Bravyicons Document svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Document: BravyIconsIcon;

/**
 * @component @name DollarCircle
 * @description Renders Bravyicons DollarCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DollarCircle: BravyIconsIcon;

/**
 * @component @name DollarSquare
 * @description Renders Bravyicons DollarSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DollarSquare: BravyIconsIcon;

/**
 * @component @name DotsMenu
 * @description Renders Bravyicons DotsMenu svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DotsMenu: BravyIconsIcon;

/**
 * @component @name Dribbble
 * @description Renders Bravyicons Dribbble svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Dribbble: BravyIconsIcon;

/**
 * @component @name Driver2
 * @description Renders Bravyicons Driver2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Driver2: BravyIconsIcon;

/**
 * @component @name DriverRefresh
 * @description Renders Bravyicons DriverRefresh svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const DriverRefresh: BravyIconsIcon;

/**
 * @component @name Driver
 * @description Renders Bravyicons Driver svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Driver: BravyIconsIcon;

/**
 * @component @name Driving
 * @description Renders Bravyicons Driving svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Driving: BravyIconsIcon;

/**
 * @component @name Drop
 * @description Renders Bravyicons Drop svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Drop: BravyIconsIcon;

/**
 * @component @name Dropbox
 * @description Renders Bravyicons Dropbox svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Dropbox: BravyIconsIcon;

/**
 * @component @name EPrescriptions
 * @description Renders Bravyicons EPrescriptions svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EPrescriptions: BravyIconsIcon;

/**
 * @component @name EPrescriptions2
 * @description Renders Bravyicons EPrescriptions2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EPrescriptions2: BravyIconsIcon;

/**
 * @component @name Edit2
 * @description Renders Bravyicons Edit2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Edit2: BravyIconsIcon;

/**
 * @component @name EditAlt
 * @description Renders Bravyicons EditAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EditAlt: BravyIconsIcon;

/**
 * @component @name EditPen
 * @description Renders Bravyicons EditPen svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EditPen: BravyIconsIcon;

/**
 * @component @name Edit
 * @description Renders Bravyicons Edit svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Edit: BravyIconsIcon;

/**
 * @component @name EducareEkt
 * @description Renders Bravyicons EducareEkt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EducareEkt: BravyIconsIcon;

/**
 * @component @name Electricity
 * @description Renders Bravyicons Electricity svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Electricity: BravyIconsIcon;

/**
 * @component @name Element1
 * @description Renders Bravyicons Element1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Element1: BravyIconsIcon;

/**
 * @component @name Element2
 * @description Renders Bravyicons Element2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Element2: BravyIconsIcon;

/**
 * @component @name Element3
 * @description Renders Bravyicons Element3 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Element3: BravyIconsIcon;

/**
 * @component @name Element4
 * @description Renders Bravyicons Element4 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Element4: BravyIconsIcon;

/**
 * @component @name ElementEqual
 * @description Renders Bravyicons ElementEqual svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ElementEqual: BravyIconsIcon;

/**
 * @component @name ElementPlus
 * @description Renders Bravyicons ElementPlus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ElementPlus: BravyIconsIcon;

/**
 * @component @name Email
 * @description Renders Bravyicons Email svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Email: BravyIconsIcon;

/**
 * @component @name EmercoinEmc
 * @description Renders Bravyicons EmercoinEmc svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EmercoinEmc: BravyIconsIcon;

/**
 * @component @name EmojiHappy
 * @description Renders Bravyicons EmojiHappy svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EmojiHappy: BravyIconsIcon;

/**
 * @component @name EmojiNormal
 * @description Renders Bravyicons EmojiNormal svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EmojiNormal: BravyIconsIcon;

/**
 * @component @name EmojiSad
 * @description Renders Bravyicons EmojiSad svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EmojiSad: BravyIconsIcon;

/**
 * @component @name EmptyWalletAdd
 * @description Renders Bravyicons EmptyWalletAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EmptyWalletAdd: BravyIconsIcon;

/**
 * @component @name EmptyWalletChange
 * @description Renders Bravyicons EmptyWalletChange svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EmptyWalletChange: BravyIconsIcon;

/**
 * @component @name EmptyWalletRemove
 * @description Renders Bravyicons EmptyWalletRemove svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EmptyWalletRemove: BravyIconsIcon;

/**
 * @component @name EmptyWalletTick
 * @description Renders Bravyicons EmptyWalletTick svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EmptyWalletTick: BravyIconsIcon;

/**
 * @component @name EmptyWalletTime
 * @description Renders Bravyicons EmptyWalletTime svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EmptyWalletTime: BravyIconsIcon;

/**
 * @component @name EmptyWallet
 * @description Renders Bravyicons EmptyWallet svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EmptyWallet: BravyIconsIcon;

/**
 * @component @name EnjinCoinEnj
 * @description Renders Bravyicons EnjinCoinEnj svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EnjinCoinEnj: BravyIconsIcon;

/**
 * @component @name Enter
 * @description Renders Bravyicons Enter svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Enter: BravyIconsIcon;

/**
 * @component @name EosEos
 * @description Renders Bravyicons EosEos svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EosEos: BravyIconsIcon;

/**
 * @component @name Equal
 * @description Renders Bravyicons Equal svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Equal: BravyIconsIcon;

/**
 * @component @name EraserAlt
 * @description Renders Bravyicons EraserAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EraserAlt: BravyIconsIcon;

/**
 * @component @name Eraser
 * @description Renders Bravyicons Eraser svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Eraser: BravyIconsIcon;

/**
 * @component @name Erlenmeyer
 * @description Renders Bravyicons Erlenmeyer svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Erlenmeyer: BravyIconsIcon;

/**
 * @component @name EthereumEth
 * @description Renders Bravyicons EthereumEth svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EthereumEth: BravyIconsIcon;

/**
 * @component @name EthereumClassicEtc
 * @description Renders Bravyicons EthereumClassicEtc svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EthereumClassicEtc: BravyIconsIcon;

/**
 * @component @name Exchange
 * @description Renders Bravyicons Exchange svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Exchange: BravyIconsIcon;

/**
 * @component @name Exclamation
 * @description Renders Bravyicons Exclamation svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Exclamation: BravyIconsIcon;

/**
 * @component @name Export1
 * @description Renders Bravyicons Export1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Export1: BravyIconsIcon;

/**
 * @component @name Export2
 * @description Renders Bravyicons Export2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Export2: BravyIconsIcon;

/**
 * @component @name Export3
 * @description Renders Bravyicons Export3 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Export3: BravyIconsIcon;

/**
 * @component @name Export
 * @description Renders Bravyicons Export svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Export: BravyIconsIcon;

/**
 * @component @name ExternalDrive
 * @description Renders Bravyicons ExternalDrive svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ExternalDrive: BravyIconsIcon;

/**
 * @component @name EyeSlash
 * @description Renders Bravyicons EyeSlash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const EyeSlash: BravyIconsIcon;

/**
 * @component @name Eye
 * @description Renders Bravyicons Eye svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Eye: BravyIconsIcon;

/**
 * @component @name Facebook
 * @description Renders Bravyicons Facebook svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Facebook: BravyIconsIcon;

/**
 * @component @name Faq
 * @description Renders Bravyicons Faq svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Faq: BravyIconsIcon;

/**
 * @component @name Fatrows
 * @description Renders Bravyicons Fatrows svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Fatrows: BravyIconsIcon;

/**
 * @component @name FavoriteChart
 * @description Renders Bravyicons FavoriteChart svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FavoriteChart: BravyIconsIcon;

/**
 * @component @name FemaleWomenGender
 * @description Renders Bravyicons FemaleWomenGender svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FemaleWomenGender: BravyIconsIcon;

/**
 * @component @name Figma1
 * @description Renders Bravyicons Figma1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Figma1: BravyIconsIcon;

/**
 * @component @name Figma
 * @description Renders Bravyicons Figma svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Figma: BravyIconsIcon;

/**
 * @component @name FilterAdd
 * @description Renders Bravyicons FilterAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FilterAdd: BravyIconsIcon;

/**
 * @component @name FilterAlt
 * @description Renders Bravyicons FilterAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FilterAlt: BravyIconsIcon;

/**
 * @component @name FilterEdit
 * @description Renders Bravyicons FilterEdit svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FilterEdit: BravyIconsIcon;

/**
 * @component @name FilterRemove
 * @description Renders Bravyicons FilterRemove svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FilterRemove: BravyIconsIcon;

/**
 * @component @name FilterSearch
 * @description Renders Bravyicons FilterSearch svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FilterSearch: BravyIconsIcon;

/**
 * @component @name FilterSquare
 * @description Renders Bravyicons FilterSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FilterSquare: BravyIconsIcon;

/**
 * @component @name FilterTick
 * @description Renders Bravyicons FilterTick svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FilterTick: BravyIconsIcon;

/**
 * @component @name Filter
 * @description Renders Bravyicons Filter svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Filter: BravyIconsIcon;

/**
 * @component @name Filter2
 * @description Renders Bravyicons Filter2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Filter2: BravyIconsIcon;

/**
 * @component @name FingerCricle
 * @description Renders Bravyicons FingerCricle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FingerCricle: BravyIconsIcon;

/**
 * @component @name FingerScan
 * @description Renders Bravyicons FingerScan svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FingerScan: BravyIconsIcon;

/**
 * @component @name Firstline
 * @description Renders Bravyicons Firstline svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Firstline: BravyIconsIcon;

/**
 * @component @name Flag2
 * @description Renders Bravyicons Flag2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Flag2: BravyIconsIcon;

/**
 * @component @name Flag
 * @description Renders Bravyicons Flag svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Flag: BravyIconsIcon;

/**
 * @component @name FlashAlt
 * @description Renders Bravyicons FlashAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FlashAlt: BravyIconsIcon;

/**
 * @component @name FlashCircleAlt
 * @description Renders Bravyicons FlashCircleAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FlashCircleAlt: BravyIconsIcon;

/**
 * @component @name FlashCircle
 * @description Renders Bravyicons FlashCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FlashCircle: BravyIconsIcon;

/**
 * @component @name FlashSlash
 * @description Renders Bravyicons FlashSlash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FlashSlash: BravyIconsIcon;

/**
 * @component @name Flash
 * @description Renders Bravyicons Flash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Flash: BravyIconsIcon;

/**
 * @component @name Folder2
 * @description Renders Bravyicons Folder2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Folder2: BravyIconsIcon;

/**
 * @component @name FolderAdd
 * @description Renders Bravyicons FolderAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FolderAdd: BravyIconsIcon;

/**
 * @component @name FolderCloud
 * @description Renders Bravyicons FolderCloud svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FolderCloud: BravyIconsIcon;

/**
 * @component @name FolderConnection
 * @description Renders Bravyicons FolderConnection svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FolderConnection: BravyIconsIcon;

/**
 * @component @name FolderCross
 * @description Renders Bravyicons FolderCross svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FolderCross: BravyIconsIcon;

/**
 * @component @name FolderFavorite
 * @description Renders Bravyicons FolderFavorite svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FolderFavorite: BravyIconsIcon;

/**
 * @component @name FolderMinus
 * @description Renders Bravyicons FolderMinus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FolderMinus: BravyIconsIcon;

/**
 * @component @name FolderOpen
 * @description Renders Bravyicons FolderOpen svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FolderOpen: BravyIconsIcon;

/**
 * @component @name Folder
 * @description Renders Bravyicons Folder svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Folder: BravyIconsIcon;

/**
 * @component @name FormatCircle
 * @description Renders Bravyicons FormatCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FormatCircle: BravyIconsIcon;

/**
 * @component @name FormatSquare
 * @description Renders Bravyicons FormatSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FormatSquare: BravyIconsIcon;

/**
 * @component @name Forward10Seconds
 * @description Renders Bravyicons Forward10Seconds svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Forward10Seconds: BravyIconsIcon;

/**
 * @component @name Forward15Seconds
 * @description Renders Bravyicons Forward15Seconds svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Forward15Seconds: BravyIconsIcon;

/**
 * @component @name Forward5Seconds
 * @description Renders Bravyicons Forward5Seconds svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Forward5Seconds: BravyIconsIcon;

/**
 * @component @name ForwardItem
 * @description Renders Bravyicons ForwardItem svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ForwardItem: BravyIconsIcon;

/**
 * @component @name ForwardSquare
 * @description Renders Bravyicons ForwardSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ForwardSquare: BravyIconsIcon;

/**
 * @component @name Forward
 * @description Renders Bravyicons Forward svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Forward: BravyIconsIcon;

/**
 * @component @name Frame1
 * @description Renders Bravyicons Frame1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Frame1: BravyIconsIcon;

/**
 * @component @name Frame2
 * @description Renders Bravyicons Frame2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Frame2: BravyIconsIcon;

/**
 * @component @name FrameAlt
 * @description Renders Bravyicons FrameAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FrameAlt: BravyIconsIcon;

/**
 * @component @name Frame
 * @description Renders Bravyicons Frame svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Frame: BravyIconsIcon;

/**
 * @component @name Framer
 * @description Renders Bravyicons Framer svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Framer: BravyIconsIcon;

/**
 * @component @name FtxTokenFtt
 * @description Renders Bravyicons FtxTokenFtt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FtxTokenFtt: BravyIconsIcon;

/**
 * @component @name FullRedo
 * @description Renders Bravyicons FullRedo svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const FullRedo: BravyIconsIcon;

/**
 * @component @name GalleryAdd
 * @description Renders Bravyicons GalleryAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GalleryAdd: BravyIconsIcon;

/**
 * @component @name GalleryEdit
 * @description Renders Bravyicons GalleryEdit svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GalleryEdit: BravyIconsIcon;

/**
 * @component @name GalleryExport
 * @description Renders Bravyicons GalleryExport svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GalleryExport: BravyIconsIcon;

/**
 * @component @name GalleryFavorite
 * @description Renders Bravyicons GalleryFavorite svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GalleryFavorite: BravyIconsIcon;

/**
 * @component @name GalleryImport
 * @description Renders Bravyicons GalleryImport svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GalleryImport: BravyIconsIcon;

/**
 * @component @name GalleryRemove
 * @description Renders Bravyicons GalleryRemove svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GalleryRemove: BravyIconsIcon;

/**
 * @component @name GallerySlash
 * @description Renders Bravyicons GallerySlash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GallerySlash: BravyIconsIcon;

/**
 * @component @name GalleryTick
 * @description Renders Bravyicons GalleryTick svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GalleryTick: BravyIconsIcon;

/**
 * @component @name Gallery
 * @description Renders Bravyicons Gallery svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Gallery: BravyIconsIcon;

/**
 * @component @name Game
 * @description Renders Bravyicons Game svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Game: BravyIconsIcon;

/**
 * @component @name Gameboy
 * @description Renders Bravyicons Gameboy svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Gameboy: BravyIconsIcon;

/**
 * @component @name GasStation
 * @description Renders Bravyicons GasStation svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GasStation: BravyIconsIcon;

/**
 * @component @name Gemini2
 * @description Renders Bravyicons Gemini2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Gemini2: BravyIconsIcon;

/**
 * @component @name Gemini
 * @description Renders Bravyicons Gemini svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Gemini: BravyIconsIcon;

/**
 * @component @name Gender2Comp
 * @description Renders Bravyicons Gender2Comp svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Gender2Comp: BravyIconsIcon;

/**
 * @component @name Gender2Man
 * @description Renders Bravyicons Gender2Man svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Gender2Man: BravyIconsIcon;

/**
 * @component @name GenderChange
 * @description Renders Bravyicons GenderChange svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GenderChange: BravyIconsIcon;

/**
 * @component @name GenderComp
 * @description Renders Bravyicons GenderComp svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GenderComp: BravyIconsIcon;

/**
 * @component @name GenderFaceMan
 * @description Renders Bravyicons GenderFaceMan svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GenderFaceMan: BravyIconsIcon;

/**
 * @component @name GenderFaceWoman
 * @description Renders Bravyicons GenderFaceWoman svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GenderFaceWoman: BravyIconsIcon;

/**
 * @component @name Gender
 * @description Renders Bravyicons Gender svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Gender: BravyIconsIcon;

/**
 * @component @name Gender2Female
 * @description Renders Bravyicons Gender2Female svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Gender2Female: BravyIconsIcon;

/**
 * @component @name Ghost
 * @description Renders Bravyicons Ghost svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Ghost: BravyIconsIcon;

/**
 * @component @name Gift
 * @description Renders Bravyicons Gift svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Gift: BravyIconsIcon;

/**
 * @component @name Glass
 * @description Renders Bravyicons Glass svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Glass: BravyIconsIcon;

/**
 * @component @name GlobalCountries
 * @description Renders Bravyicons GlobalCountries svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GlobalCountries: BravyIconsIcon;

/**
 * @component @name GlobalEdit
 * @description Renders Bravyicons GlobalEdit svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GlobalEdit: BravyIconsIcon;

/**
 * @component @name GlobalRefresh
 * @description Renders Bravyicons GlobalRefresh svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GlobalRefresh: BravyIconsIcon;

/**
 * @component @name GlobalSearch
 * @description Renders Bravyicons GlobalSearch svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GlobalSearch: BravyIconsIcon;

/**
 * @component @name Global
 * @description Renders Bravyicons Global svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Global: BravyIconsIcon;

/**
 * @component @name Google1
 * @description Renders Bravyicons Google1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Google1: BravyIconsIcon;

/**
 * @component @name GooglePlay
 * @description Renders Bravyicons GooglePlay svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GooglePlay: BravyIconsIcon;

/**
 * @component @name Google
 * @description Renders Bravyicons Google svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Google: BravyIconsIcon;

/**
 * @component @name GpsSlash
 * @description Renders Bravyicons GpsSlash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GpsSlash: BravyIconsIcon;

/**
 * @component @name Gps
 * @description Renders Bravyicons Gps svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Gps: BravyIconsIcon;

/**
 * @component @name Grammerly
 * @description Renders Bravyicons Grammerly svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Grammerly: BravyIconsIcon;

/**
 * @component @name Graph
 * @description Renders Bravyicons Graph svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Graph: BravyIconsIcon;

/**
 * @component @name Grid1
 * @description Renders Bravyicons Grid1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Grid1: BravyIconsIcon;

/**
 * @component @name Grid2
 * @description Renders Bravyicons Grid2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Grid2: BravyIconsIcon;

/**
 * @component @name Grid3
 * @description Renders Bravyicons Grid3 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Grid3: BravyIconsIcon;

/**
 * @component @name Grid4
 * @description Renders Bravyicons Grid4 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Grid4: BravyIconsIcon;

/**
 * @component @name Grid5
 * @description Renders Bravyicons Grid5 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Grid5: BravyIconsIcon;

/**
 * @component @name Grid6
 * @description Renders Bravyicons Grid6 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Grid6: BravyIconsIcon;

/**
 * @component @name Grid7
 * @description Renders Bravyicons Grid7 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Grid7: BravyIconsIcon;

/**
 * @component @name Grid8
 * @description Renders Bravyicons Grid8 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Grid8: BravyIconsIcon;

/**
 * @component @name Grid9
 * @description Renders Bravyicons Grid9 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Grid9: BravyIconsIcon;

/**
 * @component @name GridEdit
 * @description Renders Bravyicons GridEdit svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GridEdit: BravyIconsIcon;

/**
 * @component @name GridEraser
 * @description Renders Bravyicons GridEraser svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GridEraser: BravyIconsIcon;

/**
 * @component @name GridLock
 * @description Renders Bravyicons GridLock svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const GridLock: BravyIconsIcon;

/**
 * @component @name Happyemoji
 * @description Renders Bravyicons Happyemoji svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Happyemoji: BravyIconsIcon;

/**
 * @component @name HarmonyOne
 * @description Renders Bravyicons HarmonyOne svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HarmonyOne: BravyIconsIcon;

/**
 * @component @name HashtagDown
 * @description Renders Bravyicons HashtagDown svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HashtagDown: BravyIconsIcon;

/**
 * @component @name HashtagUp
 * @description Renders Bravyicons HashtagUp svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HashtagUp: BravyIconsIcon;

/**
 * @component @name Hashtag
 * @description Renders Bravyicons Hashtag svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Hashtag: BravyIconsIcon;

/**
 * @component @name Headphone
 * @description Renders Bravyicons Headphone svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Headphone: BravyIconsIcon;

/**
 * @component @name Headphones
 * @description Renders Bravyicons Headphones svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Headphones: BravyIconsIcon;

/**
 * @component @name Health
 * @description Renders Bravyicons Health svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Health: BravyIconsIcon;

/**
 * @component @name HeartAdd
 * @description Renders Bravyicons HeartAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HeartAdd: BravyIconsIcon;

/**
 * @component @name HeartAlt
 * @description Renders Bravyicons HeartAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HeartAlt: BravyIconsIcon;

/**
 * @component @name HeartCircle
 * @description Renders Bravyicons HeartCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HeartCircle: BravyIconsIcon;

/**
 * @component @name HeartEdit
 * @description Renders Bravyicons HeartEdit svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HeartEdit: BravyIconsIcon;

/**
 * @component @name HeartRemove
 * @description Renders Bravyicons HeartRemove svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HeartRemove: BravyIconsIcon;

/**
 * @component @name HeartSearch
 * @description Renders Bravyicons HeartSearch svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HeartSearch: BravyIconsIcon;

/**
 * @component @name HeartSlash
 * @description Renders Bravyicons HeartSlash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HeartSlash: BravyIconsIcon;

/**
 * @component @name HeartTick
 * @description Renders Bravyicons HeartTick svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HeartTick: BravyIconsIcon;

/**
 * @component @name Heart
 * @description Renders Bravyicons Heart svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Heart: BravyIconsIcon;

/**
 * @component @name HederaHashgraphHbar
 * @description Renders Bravyicons HederaHashgraphHbar svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HederaHashgraphHbar: BravyIconsIcon;

/**
 * @component @name Help
 * @description Renders Bravyicons Help svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Help: BravyIconsIcon;

/**
 * @component @name HexHex
 * @description Renders Bravyicons HexHex svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HexHex: BravyIconsIcon;

/**
 * @component @name Hierarchy2
 * @description Renders Bravyicons Hierarchy2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Hierarchy2: BravyIconsIcon;

/**
 * @component @name Hierarchy3
 * @description Renders Bravyicons Hierarchy3 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Hierarchy3: BravyIconsIcon;

/**
 * @component @name HierarchySquare2
 * @description Renders Bravyicons HierarchySquare2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HierarchySquare2: BravyIconsIcon;

/**
 * @component @name HierarchySquare3
 * @description Renders Bravyicons HierarchySquare3 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HierarchySquare3: BravyIconsIcon;

/**
 * @component @name HierarchySquare
 * @description Renders Bravyicons HierarchySquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HierarchySquare: BravyIconsIcon;

/**
 * @component @name Hierarchy
 * @description Renders Bravyicons Hierarchy svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Hierarchy: BravyIconsIcon;

/**
 * @component @name Home2
 * @description Renders Bravyicons Home2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Home2: BravyIconsIcon;

/**
 * @component @name HomeAlt
 * @description Renders Bravyicons HomeAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HomeAlt: BravyIconsIcon;

/**
 * @component @name HomeHashtag
 * @description Renders Bravyicons HomeHashtag svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HomeHashtag: BravyIconsIcon;

/**
 * @component @name HomeTrendDown
 * @description Renders Bravyicons HomeTrendDown svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HomeTrendDown: BravyIconsIcon;

/**
 * @component @name HomeTrendUp
 * @description Renders Bravyicons HomeTrendUp svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HomeTrendUp: BravyIconsIcon;

/**
 * @component @name HomeWifi
 * @description Renders Bravyicons HomeWifi svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HomeWifi: BravyIconsIcon;

/**
 * @component @name Home
 * @description Renders Bravyicons Home svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Home: BravyIconsIcon;

/**
 * @component @name HospitalAlt
 * @description Renders Bravyicons HospitalAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HospitalAlt: BravyIconsIcon;

/**
 * @component @name Hospital
 * @description Renders Bravyicons Hospital svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Hospital: BravyIconsIcon;

/**
 * @component @name House2
 * @description Renders Bravyicons House2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const House2: BravyIconsIcon;

/**
 * @component @name House
 * @description Renders Bravyicons House svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const House: BravyIconsIcon;

/**
 * @component @name Html3
 * @description Renders Bravyicons Html3 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Html3: BravyIconsIcon;

/**
 * @component @name Html5
 * @description Renders Bravyicons Html5 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Html5: BravyIconsIcon;

/**
 * @component @name HuobiTokenHt
 * @description Renders Bravyicons HuobiTokenHt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const HuobiTokenHt: BravyIconsIcon;

/**
 * @component @name IconIcx
 * @description Renders Bravyicons IconIcx svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const IconIcx: BravyIconsIcon;

/**
 * @component @name Id
 * @description Renders Bravyicons Id svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Id: BravyIconsIcon;

/**
 * @component @name Illustrator
 * @description Renders Bravyicons Illustrator svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Illustrator: BravyIconsIcon;

/**
 * @component @name Image
 * @description Renders Bravyicons Image svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Image: BravyIconsIcon;

/**
 * @component @name Import1
 * @description Renders Bravyicons Import1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Import1: BravyIconsIcon;

/**
 * @component @name Import2
 * @description Renders Bravyicons Import2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Import2: BravyIconsIcon;

/**
 * @component @name Import
 * @description Renders Bravyicons Import svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Import: BravyIconsIcon;

/**
 * @component @name InfoCircle
 * @description Renders Bravyicons InfoCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const InfoCircle: BravyIconsIcon;

/**
 * @component @name Information
 * @description Renders Bravyicons Information svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Information: BravyIconsIcon;

/**
 * @component @name Instagram
 * @description Renders Bravyicons Instagram svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Instagram: BravyIconsIcon;

/**
 * @component @name IostIost
 * @description Renders Bravyicons IostIost svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const IostIost: BravyIconsIcon;

/**
 * @component @name JavaScript
 * @description Renders Bravyicons JavaScript svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const JavaScript: BravyIconsIcon;

/**
 * @component @name Js
 * @description Renders Bravyicons Js svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Js: BravyIconsIcon;

/**
 * @component @name Judge
 * @description Renders Bravyicons Judge svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Judge: BravyIconsIcon;

/**
 * @component @name Kanban
 * @description Renders Bravyicons Kanban svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Kanban: BravyIconsIcon;

/**
 * @component @name KeySquare
 * @description Renders Bravyicons KeySquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const KeySquare: BravyIconsIcon;

/**
 * @component @name Key
 * @description Renders Bravyicons Key svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Key: BravyIconsIcon;

/**
 * @component @name KeyboardOpen
 * @description Renders Bravyicons KeyboardOpen svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const KeyboardOpen: BravyIconsIcon;

/**
 * @component @name Keyboard
 * @description Renders Bravyicons Keyboard svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Keyboard: BravyIconsIcon;

/**
 * @component @name KyberNetworkKnc
 * @description Renders Bravyicons KyberNetworkKnc svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const KyberNetworkKnc: BravyIconsIcon;

/**
 * @component @name LampCharge
 * @description Renders Bravyicons LampCharge svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LampCharge: BravyIconsIcon;

/**
 * @component @name LampOn
 * @description Renders Bravyicons LampOn svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LampOn: BravyIconsIcon;

/**
 * @component @name LampSlash
 * @description Renders Bravyicons LampSlash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LampSlash: BravyIconsIcon;

/**
 * @component @name Lamp
 * @description Renders Bravyicons Lamp svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Lamp: BravyIconsIcon;

/**
 * @component @name LanguageCircle
 * @description Renders Bravyicons LanguageCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LanguageCircle: BravyIconsIcon;

/**
 * @component @name LanguageSquare
 * @description Renders Bravyicons LanguageSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LanguageSquare: BravyIconsIcon;

/**
 * @component @name Languages
 * @description Renders Bravyicons Languages svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Languages: BravyIconsIcon;

/**
 * @component @name Layer
 * @description Renders Bravyicons Layer svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Layer: BravyIconsIcon;

/**
 * @component @name Level
 * @description Renders Bravyicons Level svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Level: BravyIconsIcon;

/**
 * @component @name Lifebuoy
 * @description Renders Bravyicons Lifebuoy svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Lifebuoy: BravyIconsIcon;

/**
 * @component @name Like1
 * @description Renders Bravyicons Like1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Like1: BravyIconsIcon;

/**
 * @component @name LikeDislike
 * @description Renders Bravyicons LikeDislike svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LikeDislike: BravyIconsIcon;

/**
 * @component @name LikeShapes
 * @description Renders Bravyicons LikeShapes svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LikeShapes: BravyIconsIcon;

/**
 * @component @name LikeTag
 * @description Renders Bravyicons LikeTag svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LikeTag: BravyIconsIcon;

/**
 * @component @name Like
 * @description Renders Bravyicons Like svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Like: BravyIconsIcon;

/**
 * @component @name Link1
 * @description Renders Bravyicons Link1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Link1: BravyIconsIcon;

/**
 * @component @name Link2
 * @description Renders Bravyicons Link2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Link2: BravyIconsIcon;

/**
 * @component @name Link21
 * @description Renders Bravyicons Link21 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Link21: BravyIconsIcon;

/**
 * @component @name LinkAlt
 * @description Renders Bravyicons LinkAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LinkAlt: BravyIconsIcon;

/**
 * @component @name LinkCircle
 * @description Renders Bravyicons LinkCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LinkCircle: BravyIconsIcon;

/**
 * @component @name LinkSquare
 * @description Renders Bravyicons LinkSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LinkSquare: BravyIconsIcon;

/**
 * @component @name Link
 * @description Renders Bravyicons Link svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Link: BravyIconsIcon;

/**
 * @component @name LitecoinLtc
 * @description Renders Bravyicons LitecoinLtc svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LitecoinLtc: BravyIconsIcon;

/**
 * @component @name LocationAdd
 * @description Renders Bravyicons LocationAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LocationAdd: BravyIconsIcon;

/**
 * @component @name LocationAlt
 * @description Renders Bravyicons LocationAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LocationAlt: BravyIconsIcon;

/**
 * @component @name LocationCross
 * @description Renders Bravyicons LocationCross svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LocationCross: BravyIconsIcon;

/**
 * @component @name LocationMinus
 * @description Renders Bravyicons LocationMinus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LocationMinus: BravyIconsIcon;

/**
 * @component @name LocationSlash
 * @description Renders Bravyicons LocationSlash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LocationSlash: BravyIconsIcon;

/**
 * @component @name LocationTarget
 * @description Renders Bravyicons LocationTarget svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LocationTarget: BravyIconsIcon;

/**
 * @component @name LocationTick
 * @description Renders Bravyicons LocationTick svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LocationTick: BravyIconsIcon;

/**
 * @component @name Location
 * @description Renders Bravyicons Location svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Location: BravyIconsIcon;

/**
 * @component @name Lock1
 * @description Renders Bravyicons Lock1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Lock1: BravyIconsIcon;

/**
 * @component @name LockCircle
 * @description Renders Bravyicons LockCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LockCircle: BravyIconsIcon;

/**
 * @component @name LockPassword
 * @description Renders Bravyicons LockPassword svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LockPassword: BravyIconsIcon;

/**
 * @component @name LockSlash
 * @description Renders Bravyicons LockSlash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LockSlash: BravyIconsIcon;

/**
 * @component @name Lock
 * @description Renders Bravyicons Lock svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Lock: BravyIconsIcon;

/**
 * @component @name Login1
 * @description Renders Bravyicons Login1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Login1: BravyIconsIcon;

/**
 * @component @name Login
 * @description Renders Bravyicons Login svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Login: BravyIconsIcon;

/**
 * @component @name Logout1
 * @description Renders Bravyicons Logout1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Logout1: BravyIconsIcon;

/**
 * @component @name LogoutAlt
 * @description Renders Bravyicons LogoutAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LogoutAlt: BravyIconsIcon;

/**
 * @component @name Logout
 * @description Renders Bravyicons Logout svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Logout: BravyIconsIcon;

/**
 * @component @name Lovely
 * @description Renders Bravyicons Lovely svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Lovely: BravyIconsIcon;

/**
 * @component @name LowWifi
 * @description Renders Bravyicons LowWifi svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const LowWifi: BravyIconsIcon;

/**
 * @component @name Machine
 * @description Renders Bravyicons Machine svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Machine: BravyIconsIcon;

/**
 * @component @name MagicStar
 * @description Renders Bravyicons MagicStar svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MagicStar: BravyIconsIcon;

/**
 * @component @name Magicpen
 * @description Renders Bravyicons Magicpen svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Magicpen: BravyIconsIcon;

/**
 * @component @name MainComponent
 * @description Renders Bravyicons MainComponent svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MainComponent: BravyIconsIcon;

/**
 * @component @name MakerMkr
 * @description Renders Bravyicons MakerMkr svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MakerMkr: BravyIconsIcon;

/**
 * @component @name Makeup
 * @description Renders Bravyicons Makeup svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Makeup: BravyIconsIcon;

/**
 * @component @name MaleManGender
 * @description Renders Bravyicons MaleManGender svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MaleManGender: BravyIconsIcon;

/**
 * @component @name Man
 * @description Renders Bravyicons Man svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Man: BravyIconsIcon;

/**
 * @component @name Map1
 * @description Renders Bravyicons Map1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Map1: BravyIconsIcon;

/**
 * @component @name MapNavigation
 * @description Renders Bravyicons MapNavigation svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MapNavigation: BravyIconsIcon;

/**
 * @component @name Map
 * @description Renders Bravyicons Map svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Map: BravyIconsIcon;

/**
 * @component @name Mask2
 * @description Renders Bravyicons Mask2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Mask2: BravyIconsIcon;

/**
 * @component @name Mask3
 * @description Renders Bravyicons Mask3 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Mask3: BravyIconsIcon;

/**
 * @component @name MaskAlt
 * @description Renders Bravyicons MaskAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MaskAlt: BravyIconsIcon;

/**
 * @component @name Mask
 * @description Renders Bravyicons Mask svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Mask: BravyIconsIcon;

/**
 * @component @name Math
 * @description Renders Bravyicons Math svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Math: BravyIconsIcon;

/**
 * @component @name Maximize1
 * @description Renders Bravyicons Maximize1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Maximize1: BravyIconsIcon;

/**
 * @component @name Maximize2
 * @description Renders Bravyicons Maximize2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Maximize2: BravyIconsIcon;

/**
 * @component @name Maximize3
 * @description Renders Bravyicons Maximize3 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Maximize3: BravyIconsIcon;

/**
 * @component @name Maximize4
 * @description Renders Bravyicons Maximize4 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Maximize4: BravyIconsIcon;

/**
 * @component @name MaximizeAlt
 * @description Renders Bravyicons MaximizeAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MaximizeAlt: BravyIconsIcon;

/**
 * @component @name MaximizeCircle
 * @description Renders Bravyicons MaximizeCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MaximizeCircle: BravyIconsIcon;

/**
 * @component @name Maximize
 * @description Renders Bravyicons Maximize svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Maximize: BravyIconsIcon;

/**
 * @component @name MedalStar
 * @description Renders Bravyicons MedalStar svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MedalStar: BravyIconsIcon;

/**
 * @component @name Medal
 * @description Renders Bravyicons Medal svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Medal: BravyIconsIcon;

/**
 * @component @name MedicineBottle
 * @description Renders Bravyicons MedicineBottle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MedicineBottle: BravyIconsIcon;

/**
 * @component @name MenuAlt
 * @description Renders Bravyicons MenuAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MenuAlt: BravyIconsIcon;

/**
 * @component @name MenuBoard
 * @description Renders Bravyicons MenuBoard svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MenuBoard: BravyIconsIcon;

/**
 * @component @name MenuCircles
 * @description Renders Bravyicons MenuCircles svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MenuCircles: BravyIconsIcon;

/**
 * @component @name Menu
 * @description Renders Bravyicons Menu svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Menu: BravyIconsIcon;

/**
 * @component @name MessageProgramming
 * @description Renders Bravyicons MessageProgramming svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MessageProgramming: BravyIconsIcon;

/**
 * @component @name MessageQuestion
 * @description Renders Bravyicons MessageQuestion svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MessageQuestion: BravyIconsIcon;

/**
 * @component @name Message
 * @description Renders Bravyicons Message svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Message: BravyIconsIcon;

/**
 * @component @name Messenger
 * @description Renders Bravyicons Messenger svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Messenger: BravyIconsIcon;

/**
 * @component @name Microphone2
 * @description Renders Bravyicons Microphone2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Microphone2: BravyIconsIcon;

/**
 * @component @name MicrophoneSlash1
 * @description Renders Bravyicons MicrophoneSlash1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MicrophoneSlash1: BravyIconsIcon;

/**
 * @component @name MicrophoneSlash
 * @description Renders Bravyicons MicrophoneSlash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MicrophoneSlash: BravyIconsIcon;

/**
 * @component @name Microphone
 * @description Renders Bravyicons Microphone svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Microphone: BravyIconsIcon;

/**
 * @component @name Microscope
 * @description Renders Bravyicons Microscope svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Microscope: BravyIconsIcon;

/**
 * @component @name Milk
 * @description Renders Bravyicons Milk svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Milk: BravyIconsIcon;

/**
 * @component @name MiniMusicSqaure
 * @description Renders Bravyicons MiniMusicSqaure svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MiniMusicSqaure: BravyIconsIcon;

/**
 * @component @name MinusAlt
 * @description Renders Bravyicons MinusAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MinusAlt: BravyIconsIcon;

/**
 * @component @name MinusCirlce
 * @description Renders Bravyicons MinusCirlce svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MinusCirlce: BravyIconsIcon;

/**
 * @component @name MinusSquare
 * @description Renders Bravyicons MinusSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MinusSquare: BravyIconsIcon;

/**
 * @component @name Minus
 * @description Renders Bravyicons Minus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Minus: BravyIconsIcon;

/**
 * @component @name Mirror
 * @description Renders Bravyicons Mirror svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Mirror: BravyIconsIcon;

/**
 * @component @name MirroringScreen
 * @description Renders Bravyicons MirroringScreen svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MirroringScreen: BravyIconsIcon;

/**
 * @component @name MobileProgramming
 * @description Renders Bravyicons MobileProgramming svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MobileProgramming: BravyIconsIcon;

/**
 * @component @name Mobile
 * @description Renders Bravyicons Mobile svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Mobile: BravyIconsIcon;

/**
 * @component @name MoneroXmr
 * @description Renders Bravyicons MoneroXmr svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MoneroXmr: BravyIconsIcon;

/**
 * @component @name Money2
 * @description Renders Bravyicons Money2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Money2: BravyIconsIcon;

/**
 * @component @name Money3
 * @description Renders Bravyicons Money3 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Money3: BravyIconsIcon;

/**
 * @component @name Money4
 * @description Renders Bravyicons Money4 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Money4: BravyIconsIcon;

/**
 * @component @name MoneyAdd
 * @description Renders Bravyicons MoneyAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MoneyAdd: BravyIconsIcon;

/**
 * @component @name MoneyChange
 * @description Renders Bravyicons MoneyChange svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MoneyChange: BravyIconsIcon;

/**
 * @component @name MoneyForbidden
 * @description Renders Bravyicons MoneyForbidden svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MoneyForbidden: BravyIconsIcon;

/**
 * @component @name MoneyRecive
 * @description Renders Bravyicons MoneyRecive svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MoneyRecive: BravyIconsIcon;

/**
 * @component @name MoneyRemove
 * @description Renders Bravyicons MoneyRemove svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MoneyRemove: BravyIconsIcon;

/**
 * @component @name MoneySend
 * @description Renders Bravyicons MoneySend svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MoneySend: BravyIconsIcon;

/**
 * @component @name MoneyTick
 * @description Renders Bravyicons MoneyTick svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MoneyTick: BravyIconsIcon;

/**
 * @component @name MoneyTime
 * @description Renders Bravyicons MoneyTime svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MoneyTime: BravyIconsIcon;

/**
 * @component @name Money
 * @description Renders Bravyicons Money svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Money: BravyIconsIcon;

/**
 * @component @name Moneys
 * @description Renders Bravyicons Moneys svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Moneys: BravyIconsIcon;

/**
 * @component @name MonitorMobbile
 * @description Renders Bravyicons MonitorMobbile svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MonitorMobbile: BravyIconsIcon;

/**
 * @component @name MonitorRecorder
 * @description Renders Bravyicons MonitorRecorder svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MonitorRecorder: BravyIconsIcon;

/**
 * @component @name Monitor
 * @description Renders Bravyicons Monitor svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Monitor: BravyIconsIcon;

/**
 * @component @name Moon
 * @description Renders Bravyicons Moon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Moon: BravyIconsIcon;

/**
 * @component @name More2
 * @description Renders Bravyicons More2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const More2: BravyIconsIcon;

/**
 * @component @name MoreCircle
 * @description Renders Bravyicons MoreCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MoreCircle: BravyIconsIcon;

/**
 * @component @name MoreSquare
 * @description Renders Bravyicons MoreSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MoreSquare: BravyIconsIcon;

/**
 * @component @name More
 * @description Renders Bravyicons More svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const More: BravyIconsIcon;

/**
 * @component @name MouseCircle
 * @description Renders Bravyicons MouseCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MouseCircle: BravyIconsIcon;

/**
 * @component @name MouseSquare
 * @description Renders Bravyicons MouseSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MouseSquare: BravyIconsIcon;

/**
 * @component @name Mouse
 * @description Renders Bravyicons Mouse svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Mouse: BravyIconsIcon;

/**
 * @component @name MusicCircle
 * @description Renders Bravyicons MusicCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicCircle: BravyIconsIcon;

/**
 * @component @name MusicDashboard
 * @description Renders Bravyicons MusicDashboard svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicDashboard: BravyIconsIcon;

/**
 * @component @name MusicFilter
 * @description Renders Bravyicons MusicFilter svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicFilter: BravyIconsIcon;

/**
 * @component @name MusicLibrary2
 * @description Renders Bravyicons MusicLibrary2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicLibrary2: BravyIconsIcon;

/**
 * @component @name MusicPlay
 * @description Renders Bravyicons MusicPlay svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicPlay: BravyIconsIcon;

/**
 * @component @name MusicPlaylist
 * @description Renders Bravyicons MusicPlaylist svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicPlaylist: BravyIconsIcon;

/**
 * @component @name MusicSquareAdd
 * @description Renders Bravyicons MusicSquareAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicSquareAdd: BravyIconsIcon;

/**
 * @component @name MusicSquareRemove
 * @description Renders Bravyicons MusicSquareRemove svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicSquareRemove: BravyIconsIcon;

/**
 * @component @name MusicSquareSearch
 * @description Renders Bravyicons MusicSquareSearch svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicSquareSearch: BravyIconsIcon;

/**
 * @component @name MusicSquare
 * @description Renders Bravyicons MusicSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const MusicSquare: BravyIconsIcon;

/**
 * @component @name Music
 * @description Renders Bravyicons Music svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Music: BravyIconsIcon;

/**
 * @component @name Musicnote
 * @description Renders Bravyicons Musicnote svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Musicnote: BravyIconsIcon;

/**
 * @component @name NebulasNas
 * @description Renders Bravyicons NebulasNas svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NebulasNas: BravyIconsIcon;

/**
 * @component @name NemXem
 * @description Renders Bravyicons NemXem svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NemXem: BravyIconsIcon;

/**
 * @component @name NexoNexo
 * @description Renders Bravyicons NexoNexo svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NexoNexo: BravyIconsIcon;

/**
 * @component @name Next
 * @description Renders Bravyicons Next svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Next: BravyIconsIcon;

/**
 * @component @name NoLocation
 * @description Renders Bravyicons NoLocation svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NoLocation: BravyIconsIcon;

/**
 * @component @name NotAlt
 * @description Renders Bravyicons NotAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NotAlt: BravyIconsIcon;

/**
 * @component @name NotCoveredLocation
 * @description Renders Bravyicons NotCoveredLocation svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NotCoveredLocation: BravyIconsIcon;

/**
 * @component @name Not
 * @description Renders Bravyicons Not svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Not: BravyIconsIcon;

/**
 * @component @name Note1
 * @description Renders Bravyicons Note1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Note1: BravyIconsIcon;

/**
 * @component @name Note2
 * @description Renders Bravyicons Note2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Note2: BravyIconsIcon;

/**
 * @component @name NoteAdd
 * @description Renders Bravyicons NoteAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NoteAdd: BravyIconsIcon;

/**
 * @component @name NoteAlt
 * @description Renders Bravyicons NoteAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NoteAlt: BravyIconsIcon;

/**
 * @component @name NoteFavorite
 * @description Renders Bravyicons NoteFavorite svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NoteFavorite: BravyIconsIcon;

/**
 * @component @name NoteRemove
 * @description Renders Bravyicons NoteRemove svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NoteRemove: BravyIconsIcon;

/**
 * @component @name NoteSquare
 * @description Renders Bravyicons NoteSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NoteSquare: BravyIconsIcon;

/**
 * @component @name NoteText
 * @description Renders Bravyicons NoteText svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NoteText: BravyIconsIcon;

/**
 * @component @name Note
 * @description Renders Bravyicons Note svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Note: BravyIconsIcon;

/**
 * @component @name Notification1
 * @description Renders Bravyicons Notification1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Notification1: BravyIconsIcon;

/**
 * @component @name NotificationBing
 * @description Renders Bravyicons NotificationBing svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NotificationBing: BravyIconsIcon;

/**
 * @component @name NotificationCircle
 * @description Renders Bravyicons NotificationCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NotificationCircle: BravyIconsIcon;

/**
 * @component @name NotificationFavorite
 * @description Renders Bravyicons NotificationFavorite svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NotificationFavorite: BravyIconsIcon;

/**
 * @component @name NotificationStatus
 * @description Renders Bravyicons NotificationStatus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const NotificationStatus: BravyIconsIcon;

/**
 * @component @name Notification
 * @description Renders Bravyicons Notification svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Notification: BravyIconsIcon;

/**
 * @component @name OceanProtocolOcean
 * @description Renders Bravyicons OceanProtocolOcean svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const OceanProtocolOcean: BravyIconsIcon;

/**
 * @component @name Offer
 * @description Renders Bravyicons Offer svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Offer: BravyIconsIcon;

/**
 * @component @name OfficeBagHome
 * @description Renders Bravyicons OfficeBagHome svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const OfficeBagHome: BravyIconsIcon;

/**
 * @component @name OkbOkb
 * @description Renders Bravyicons OkbOkb svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const OkbOkb: BravyIconsIcon;

/**
 * @component @name OmegaCircle
 * @description Renders Bravyicons OmegaCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const OmegaCircle: BravyIconsIcon;

/**
 * @component @name OmegaSquare
 * @description Renders Bravyicons OmegaSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const OmegaSquare: BravyIconsIcon;

/**
 * @component @name OntologyOnt
 * @description Renders Bravyicons OntologyOnt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const OntologyOnt: BravyIconsIcon;

/**
 * @component @name Paint
 * @description Renders Bravyicons Paint svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Paint: BravyIconsIcon;

/**
 * @component @name Paintbucket
 * @description Renders Bravyicons Paintbucket svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Paintbucket: BravyIconsIcon;

/**
 * @component @name Paperclip2
 * @description Renders Bravyicons Paperclip2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Paperclip2: BravyIconsIcon;

/**
 * @component @name PaperclipAttach
 * @description Renders Bravyicons PaperclipAttach svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PaperclipAttach: BravyIconsIcon;

/**
 * @component @name Paperclip
 * @description Renders Bravyicons Paperclip svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Paperclip: BravyIconsIcon;

/**
 * @component @name PasswordCheck
 * @description Renders Bravyicons PasswordCheck svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PasswordCheck: BravyIconsIcon;

/**
 * @component @name Path2
 * @description Renders Bravyicons Path2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Path2: BravyIconsIcon;

/**
 * @component @name PathSquare
 * @description Renders Bravyicons PathSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PathSquare: BravyIconsIcon;

/**
 * @component @name Path
 * @description Renders Bravyicons Path svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Path: BravyIconsIcon;

/**
 * @component @name PauseCircle
 * @description Renders Bravyicons PauseCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PauseCircle: BravyIconsIcon;

/**
 * @component @name Pause
 * @description Renders Bravyicons Pause svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Pause: BravyIconsIcon;

/**
 * @component @name Paypal
 * @description Renders Bravyicons Paypal svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Paypal: BravyIconsIcon;

/**
 * @component @name PenAdd
 * @description Renders Bravyicons PenAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PenAdd: BravyIconsIcon;

/**
 * @component @name PenClose
 * @description Renders Bravyicons PenClose svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PenClose: BravyIconsIcon;

/**
 * @component @name PenRemove
 * @description Renders Bravyicons PenRemove svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PenRemove: BravyIconsIcon;

/**
 * @component @name PenTool2
 * @description Renders Bravyicons PenTool2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PenTool2: BravyIconsIcon;

/**
 * @component @name PenTool
 * @description Renders Bravyicons PenTool svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PenTool: BravyIconsIcon;

/**
 * @component @name People
 * @description Renders Bravyicons People svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const People: BravyIconsIcon;

/**
 * @component @name PercentCircle
 * @description Renders Bravyicons PercentCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PercentCircle: BravyIconsIcon;

/**
 * @component @name PercentageSquare
 * @description Renders Bravyicons PercentageSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PercentageSquare: BravyIconsIcon;

/**
 * @component @name Personalcard
 * @description Renders Bravyicons Personalcard svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Personalcard: BravyIconsIcon;

/**
 * @component @name Pet
 * @description Renders Bravyicons Pet svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Pet: BravyIconsIcon;

/**
 * @component @name Pharagraphspacing
 * @description Renders Bravyicons Pharagraphspacing svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Pharagraphspacing: BravyIconsIcon;

/**
 * @component @name Phone
 * @description Renders Bravyicons Phone svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Phone: BravyIconsIcon;

/**
 * @component @name Photoshop
 * @description Renders Bravyicons Photoshop svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Photoshop: BravyIconsIcon;

/**
 * @component @name PictureFrame
 * @description Renders Bravyicons PictureFrame svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PictureFrame: BravyIconsIcon;

/**
 * @component @name PlayAdd
 * @description Renders Bravyicons PlayAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PlayAdd: BravyIconsIcon;

/**
 * @component @name PlayCircle
 * @description Renders Bravyicons PlayCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PlayCircle: BravyIconsIcon;

/**
 * @component @name PlayCricle
 * @description Renders Bravyicons PlayCricle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PlayCricle: BravyIconsIcon;

/**
 * @component @name PlayRemove
 * @description Renders Bravyicons PlayRemove svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PlayRemove: BravyIconsIcon;

/**
 * @component @name Play
 * @description Renders Bravyicons Play svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Play: BravyIconsIcon;

/**
 * @component @name PlusSquare
 * @description Renders Bravyicons PlusSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PlusSquare: BravyIconsIcon;

/**
 * @component @name Plus
 * @description Renders Bravyicons Plus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Plus: BravyIconsIcon;

/**
 * @component @name PolkadotDot
 * @description Renders Bravyicons PolkadotDot svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PolkadotDot: BravyIconsIcon;

/**
 * @component @name PolygonMatic
 * @description Renders Bravyicons PolygonMatic svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PolygonMatic: BravyIconsIcon;

/**
 * @component @name PolyswarmNct
 * @description Renders Bravyicons PolyswarmNct svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PolyswarmNct: BravyIconsIcon;

/**
 * @component @name PresentionChart
 * @description Renders Bravyicons PresentionChart svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PresentionChart: BravyIconsIcon;

/**
 * @component @name Previous
 * @description Renders Bravyicons Previous svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Previous: BravyIconsIcon;

/**
 * @component @name PrinterSlash
 * @description Renders Bravyicons PrinterSlash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const PrinterSlash: BravyIconsIcon;

/**
 * @component @name Printer
 * @description Renders Bravyicons Printer svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Printer: BravyIconsIcon;

/**
 * @component @name Profile2User
 * @description Renders Bravyicons Profile2User svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Profile2User: BravyIconsIcon;

/**
 * @component @name ProfileAdd
 * @description Renders Bravyicons ProfileAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ProfileAdd: BravyIconsIcon;

/**
 * @component @name ProfileAlt
 * @description Renders Bravyicons ProfileAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ProfileAlt: BravyIconsIcon;

/**
 * @component @name ProfileCircle
 * @description Renders Bravyicons ProfileCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ProfileCircle: BravyIconsIcon;

/**
 * @component @name ProfileDelete
 * @description Renders Bravyicons ProfileDelete svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ProfileDelete: BravyIconsIcon;

/**
 * @component @name ProfileRemove
 * @description Renders Bravyicons ProfileRemove svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ProfileRemove: BravyIconsIcon;

/**
 * @component @name ProfileTick
 * @description Renders Bravyicons ProfileTick svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ProfileTick: BravyIconsIcon;

/**
 * @component @name Profile
 * @description Renders Bravyicons Profile svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Profile: BravyIconsIcon;

/**
 * @component @name ProgrammingArrow
 * @description Renders Bravyicons ProgrammingArrow svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ProgrammingArrow: BravyIconsIcon;

/**
 * @component @name ProgrammingArrows
 * @description Renders Bravyicons ProgrammingArrows svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ProgrammingArrows: BravyIconsIcon;

/**
 * @component @name Python
 * @description Renders Bravyicons Python svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Python: BravyIconsIcon;

/**
 * @component @name QrCode
 * @description Renders Bravyicons QrCode svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const QrCode: BravyIconsIcon;

/**
 * @component @name QuantQnt
 * @description Renders Bravyicons QuantQnt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const QuantQnt: BravyIconsIcon;

/**
 * @component @name QuestionMark
 * @description Renders Bravyicons QuestionMark svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const QuestionMark: BravyIconsIcon;

/**
 * @component @name QuoteDownCircle
 * @description Renders Bravyicons QuoteDownCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const QuoteDownCircle: BravyIconsIcon;

/**
 * @component @name QuoteDownSquare
 * @description Renders Bravyicons QuoteDownSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const QuoteDownSquare: BravyIconsIcon;

/**
 * @component @name QuoteDown
 * @description Renders Bravyicons QuoteDown svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const QuoteDown: BravyIconsIcon;

/**
 * @component @name QuoteUpCircle
 * @description Renders Bravyicons QuoteUpCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const QuoteUpCircle: BravyIconsIcon;

/**
 * @component @name QuoteUpSquare
 * @description Renders Bravyicons QuoteUpSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const QuoteUpSquare: BravyIconsIcon;

/**
 * @component @name QuoteUp
 * @description Renders Bravyicons QuoteUp svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const QuoteUp: BravyIconsIcon;

/**
 * @component @name Radar2
 * @description Renders Bravyicons Radar2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Radar2: BravyIconsIcon;

/**
 * @component @name RadarAlt
 * @description Renders Bravyicons RadarAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RadarAlt: BravyIconsIcon;

/**
 * @component @name Radar
 * @description Renders Bravyicons Radar svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Radar: BravyIconsIcon;

/**
 * @component @name RadioCircles
 * @description Renders Bravyicons RadioCircles svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RadioCircles: BravyIconsIcon;

/**
 * @component @name Radio
 * @description Renders Bravyicons Radio svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Radio: BravyIconsIcon;

/**
 * @component @name Ram2
 * @description Renders Bravyicons Ram2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Ram2: BravyIconsIcon;

/**
 * @component @name Ram
 * @description Renders Bravyicons Ram svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Ram: BravyIconsIcon;

/**
 * @component @name RankingAlt
 * @description Renders Bravyicons RankingAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RankingAlt: BravyIconsIcon;

/**
 * @component @name Ranking
 * @description Renders Bravyicons Ranking svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Ranking: BravyIconsIcon;

/**
 * @component @name Receipt1
 * @description Renders Bravyicons Receipt1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Receipt1: BravyIconsIcon;

/**
 * @component @name Receipt21
 * @description Renders Bravyicons Receipt21 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Receipt21: BravyIconsIcon;

/**
 * @component @name Receipt2
 * @description Renders Bravyicons Receipt2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Receipt2: BravyIconsIcon;

/**
 * @component @name ReceiptAdd
 * @description Renders Bravyicons ReceiptAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiptAdd: BravyIconsIcon;

/**
 * @component @name ReceiptDiscount
 * @description Renders Bravyicons ReceiptDiscount svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiptDiscount: BravyIconsIcon;

/**
 * @component @name ReceiptDisscount
 * @description Renders Bravyicons ReceiptDisscount svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiptDisscount: BravyIconsIcon;

/**
 * @component @name ReceiptEdit
 * @description Renders Bravyicons ReceiptEdit svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiptEdit: BravyIconsIcon;

/**
 * @component @name ReceiptItem
 * @description Renders Bravyicons ReceiptItem svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiptItem: BravyIconsIcon;

/**
 * @component @name ReceiptMinus
 * @description Renders Bravyicons ReceiptMinus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiptMinus: BravyIconsIcon;

/**
 * @component @name ReceiptSearch
 * @description Renders Bravyicons ReceiptSearch svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiptSearch: BravyIconsIcon;

/**
 * @component @name ReceiptSquare
 * @description Renders Bravyicons ReceiptSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiptSquare: BravyIconsIcon;

/**
 * @component @name ReceiptText
 * @description Renders Bravyicons ReceiptText svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiptText: BravyIconsIcon;

/**
 * @component @name Receipt
 * @description Renders Bravyicons Receipt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Receipt: BravyIconsIcon;

/**
 * @component @name ReceiveSquare2
 * @description Renders Bravyicons ReceiveSquare2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiveSquare2: BravyIconsIcon;

/**
 * @component @name ReceiveSquare
 * @description Renders Bravyicons ReceiveSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ReceiveSquare: BravyIconsIcon;

/**
 * @component @name Received
 * @description Renders Bravyicons Received svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Received: BravyIconsIcon;

/**
 * @component @name Reciept
 * @description Renders Bravyicons Reciept svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Reciept: BravyIconsIcon;

/**
 * @component @name RecordCircle
 * @description Renders Bravyicons RecordCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RecordCircle: BravyIconsIcon;

/**
 * @component @name Record
 * @description Renders Bravyicons Record svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Record$1: BravyIconsIcon;

/**
 * @component @name RecoveryConvert
 * @description Renders Bravyicons RecoveryConvert svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RecoveryConvert: BravyIconsIcon;

/**
 * @component @name Recycle
 * @description Renders Bravyicons Recycle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Recycle: BravyIconsIcon;

/**
 * @component @name RedoAlt
 * @description Renders Bravyicons RedoAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RedoAlt: BravyIconsIcon;

/**
 * @component @name Redo
 * @description Renders Bravyicons Redo svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Redo: BravyIconsIcon;

/**
 * @component @name Refresh2
 * @description Renders Bravyicons Refresh2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Refresh2: BravyIconsIcon;

/**
 * @component @name RefreshCircle
 * @description Renders Bravyicons RefreshCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RefreshCircle: BravyIconsIcon;

/**
 * @component @name RefreshLeftSquare
 * @description Renders Bravyicons RefreshLeftSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RefreshLeftSquare: BravyIconsIcon;

/**
 * @component @name RefreshRightSquare
 * @description Renders Bravyicons RefreshRightSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RefreshRightSquare: BravyIconsIcon;

/**
 * @component @name RefreshSquare2
 * @description Renders Bravyicons RefreshSquare2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RefreshSquare2: BravyIconsIcon;

/**
 * @component @name Refresh
 * @description Renders Bravyicons Refresh svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Refresh: BravyIconsIcon;

/**
 * @component @name RepeatCircle
 * @description Renders Bravyicons RepeatCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RepeatCircle: BravyIconsIcon;

/**
 * @component @name Repeat
 * @description Renders Bravyicons Repeat svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Repeat: BravyIconsIcon;

/**
 * @component @name RepeateMusic
 * @description Renders Bravyicons RepeateMusic svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RepeateMusic: BravyIconsIcon;

/**
 * @component @name RepeateOne
 * @description Renders Bravyicons RepeateOne svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RepeateOne: BravyIconsIcon;

/**
 * @component @name Replace
 * @description Renders Bravyicons Replace svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Replace: BravyIconsIcon;

/**
 * @component @name Reserve
 * @description Renders Bravyicons Reserve svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Reserve: BravyIconsIcon;

/**
 * @component @name RotateLeftAlt
 * @description Renders Bravyicons RotateLeftAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RotateLeftAlt: BravyIconsIcon;

/**
 * @component @name RotateLeft
 * @description Renders Bravyicons RotateLeft svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RotateLeft: BravyIconsIcon;

/**
 * @component @name RotateRightAlt
 * @description Renders Bravyicons RotateRightAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RotateRightAlt: BravyIconsIcon;

/**
 * @component @name RotateRight
 * @description Renders Bravyicons RotateRight svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RotateRight: BravyIconsIcon;

/**
 * @component @name RouteSquare
 * @description Renders Bravyicons RouteSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RouteSquare: BravyIconsIcon;

/**
 * @component @name Routing2
 * @description Renders Bravyicons Routing2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Routing2: BravyIconsIcon;

/**
 * @component @name Routing
 * @description Renders Bravyicons Routing svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Routing: BravyIconsIcon;

/**
 * @component @name RowHorizontal
 * @description Renders Bravyicons RowHorizontal svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RowHorizontal: BravyIconsIcon;

/**
 * @component @name RowVertical
 * @description Renders Bravyicons RowVertical svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RowVertical: BravyIconsIcon;

/**
 * @component @name RulerPen
 * @description Renders Bravyicons RulerPen svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const RulerPen: BravyIconsIcon;

/**
 * @component @name Ruler
 * @description Renders Bravyicons Ruler svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Ruler: BravyIconsIcon;

/**
 * @component @name SafeHome
 * @description Renders Bravyicons SafeHome svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SafeHome: BravyIconsIcon;

/**
 * @component @name Sagittarius
 * @description Renders Bravyicons Sagittarius svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Sagittarius: BravyIconsIcon;

/**
 * @component @name Save2
 * @description Renders Bravyicons Save2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Save2: BravyIconsIcon;

/**
 * @component @name SaveAdd
 * @description Renders Bravyicons SaveAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SaveAdd: BravyIconsIcon;

/**
 * @component @name SaveMinus
 * @description Renders Bravyicons SaveMinus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SaveMinus: BravyIconsIcon;

/**
 * @component @name SaveRemove
 * @description Renders Bravyicons SaveRemove svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SaveRemove: BravyIconsIcon;

/**
 * @component @name Save
 * @description Renders Bravyicons Save svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Save: BravyIconsIcon;

/**
 * @component @name ScanBarcode
 * @description Renders Bravyicons ScanBarcode svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ScanBarcode: BravyIconsIcon;

/**
 * @component @name Scan
 * @description Renders Bravyicons Scan svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Scan: BravyIconsIcon;

/**
 * @component @name Scanner
 * @description Renders Bravyicons Scanner svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Scanner: BravyIconsIcon;

/**
 * @component @name Scanning
 * @description Renders Bravyicons Scanning svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Scanning: BravyIconsIcon;

/**
 * @component @name ScissorAlt
 * @description Renders Bravyicons ScissorAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ScissorAlt: BravyIconsIcon;

/**
 * @component @name Scissor
 * @description Renders Bravyicons Scissor svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Scissor: BravyIconsIcon;

/**
 * @component @name Screenmirroring
 * @description Renders Bravyicons Screenmirroring svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Screenmirroring: BravyIconsIcon;

/**
 * @component @name Scroll
 * @description Renders Bravyicons Scroll svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Scroll: BravyIconsIcon;

/**
 * @component @name SearchFavorite1
 * @description Renders Bravyicons SearchFavorite1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SearchFavorite1: BravyIconsIcon;

/**
 * @component @name SearchFavorite
 * @description Renders Bravyicons SearchFavorite svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SearchFavorite: BravyIconsIcon;

/**
 * @component @name SearchNormal1
 * @description Renders Bravyicons SearchNormal1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SearchNormal1: BravyIconsIcon;

/**
 * @component @name SearchNormal
 * @description Renders Bravyicons SearchNormal svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SearchNormal: BravyIconsIcon;

/**
 * @component @name SearchStatus1
 * @description Renders Bravyicons SearchStatus1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SearchStatus1: BravyIconsIcon;

/**
 * @component @name SearchStatus
 * @description Renders Bravyicons SearchStatus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SearchStatus: BravyIconsIcon;

/**
 * @component @name SearchZoomIn1
 * @description Renders Bravyicons SearchZoomIn1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SearchZoomIn1: BravyIconsIcon;

/**
 * @component @name SearchZoomIn
 * @description Renders Bravyicons SearchZoomIn svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SearchZoomIn: BravyIconsIcon;

/**
 * @component @name SearchZoomOut1
 * @description Renders Bravyicons SearchZoomOut1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SearchZoomOut1: BravyIconsIcon;

/**
 * @component @name SearchZoomOut
 * @description Renders Bravyicons SearchZoomOut svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SearchZoomOut: BravyIconsIcon;

/**
 * @component @name Search
 * @description Renders Bravyicons Search svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Search: BravyIconsIcon;

/**
 * @component @name SecurityCard
 * @description Renders Bravyicons SecurityCard svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SecurityCard: BravyIconsIcon;

/**
 * @component @name SecuritySafe
 * @description Renders Bravyicons SecuritySafe svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SecuritySafe: BravyIconsIcon;

/**
 * @component @name SecurityTime
 * @description Renders Bravyicons SecurityTime svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SecurityTime: BravyIconsIcon;

/**
 * @component @name SecurityUser
 * @description Renders Bravyicons SecurityUser svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SecurityUser: BravyIconsIcon;

/**
 * @component @name Security
 * @description Renders Bravyicons Security svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Security: BravyIconsIcon;

/**
 * @component @name Send2
 * @description Renders Bravyicons Send2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Send2: BravyIconsIcon;

/**
 * @component @name SendAlt
 * @description Renders Bravyicons SendAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SendAlt: BravyIconsIcon;

/**
 * @component @name SendSqaure2
 * @description Renders Bravyicons SendSqaure2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SendSqaure2: BravyIconsIcon;

/**
 * @component @name SendSquare
 * @description Renders Bravyicons SendSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SendSquare: BravyIconsIcon;

/**
 * @component @name SendSubmitSuccess
 * @description Renders Bravyicons SendSubmitSuccess svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SendSubmitSuccess: BravyIconsIcon;

/**
 * @component @name Send
 * @description Renders Bravyicons Send svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Send: BravyIconsIcon;

/**
 * @component @name Setting2
 * @description Renders Bravyicons Setting2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Setting2: BravyIconsIcon;

/**
 * @component @name Setting3
 * @description Renders Bravyicons Setting3 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Setting3: BravyIconsIcon;

/**
 * @component @name Setting4
 * @description Renders Bravyicons Setting4 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Setting4: BravyIconsIcon;

/**
 * @component @name Setting5
 * @description Renders Bravyicons Setting5 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Setting5: BravyIconsIcon;

/**
 * @component @name Setting
 * @description Renders Bravyicons Setting svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Setting: BravyIconsIcon;

/**
 * @component @name SettingsAlt
 * @description Renders Bravyicons SettingsAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SettingsAlt: BravyIconsIcon;

/**
 * @component @name Settings
 * @description Renders Bravyicons Settings svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Settings: BravyIconsIcon;

/**
 * @component @name Shapes2
 * @description Renders Bravyicons Shapes2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Shapes2: BravyIconsIcon;

/**
 * @component @name Shapes
 * @description Renders Bravyicons Shapes svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Shapes: BravyIconsIcon;

/**
 * @component @name ShareAlt
 * @description Renders Bravyicons ShareAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ShareAlt: BravyIconsIcon;

/**
 * @component @name Share
 * @description Renders Bravyicons Share svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Share: BravyIconsIcon;

/**
 * @component @name Sheet
 * @description Renders Bravyicons Sheet svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Sheet: BravyIconsIcon;

/**
 * @component @name ShieldCross
 * @description Renders Bravyicons ShieldCross svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ShieldCross: BravyIconsIcon;

/**
 * @component @name ShieldSearch
 * @description Renders Bravyicons ShieldSearch svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ShieldSearch: BravyIconsIcon;

/**
 * @component @name ShieldSecurity
 * @description Renders Bravyicons ShieldSecurity svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ShieldSecurity: BravyIconsIcon;

/**
 * @component @name ShieldSlash
 * @description Renders Bravyicons ShieldSlash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ShieldSlash: BravyIconsIcon;

/**
 * @component @name ShieldTick
 * @description Renders Bravyicons ShieldTick svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ShieldTick: BravyIconsIcon;

/**
 * @component @name Shield
 * @description Renders Bravyicons Shield svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Shield: BravyIconsIcon;

/**
 * @component @name Ship
 * @description Renders Bravyicons Ship svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Ship: BravyIconsIcon;

/**
 * @component @name ShopAdd
 * @description Renders Bravyicons ShopAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ShopAdd: BravyIconsIcon;

/**
 * @component @name ShopRemove
 * @description Renders Bravyicons ShopRemove svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ShopRemove: BravyIconsIcon;

/**
 * @component @name Shop
 * @description Renders Bravyicons Shop svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Shop: BravyIconsIcon;

/**
 * @component @name ShoppingBag
 * @description Renders Bravyicons ShoppingBag svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ShoppingBag: BravyIconsIcon;

/**
 * @component @name ShoppingCart
 * @description Renders Bravyicons ShoppingCart svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ShoppingCart: BravyIconsIcon;

/**
 * @component @name SiacoinSc
 * @description Renders Bravyicons SiacoinSc svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SiacoinSc: BravyIconsIcon;

/**
 * @component @name SidebarBottom
 * @description Renders Bravyicons SidebarBottom svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SidebarBottom: BravyIconsIcon;

/**
 * @component @name SidebarLeft
 * @description Renders Bravyicons SidebarLeft svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SidebarLeft: BravyIconsIcon;

/**
 * @component @name SidebarRight
 * @description Renders Bravyicons SidebarRight svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SidebarRight: BravyIconsIcon;

/**
 * @component @name SidebarTop
 * @description Renders Bravyicons SidebarTop svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SidebarTop: BravyIconsIcon;

/**
 * @component @name Signpost
 * @description Renders Bravyicons Signpost svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Signpost: BravyIconsIcon;

/**
 * @component @name Simcard1
 * @description Renders Bravyicons Simcard1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Simcard1: BravyIconsIcon;

/**
 * @component @name Simcard2
 * @description Renders Bravyicons Simcard2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Simcard2: BravyIconsIcon;

/**
 * @component @name Simcard
 * @description Renders Bravyicons Simcard svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Simcard: BravyIconsIcon;

/**
 * @component @name Size
 * @description Renders Bravyicons Size svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Size: BravyIconsIcon;

/**
 * @component @name Slack
 * @description Renders Bravyicons Slack svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Slack: BravyIconsIcon;

/**
 * @component @name Slash
 * @description Renders Bravyicons Slash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Slash: BravyIconsIcon;

/**
 * @component @name SliderHorizontal1
 * @description Renders Bravyicons SliderHorizontal1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SliderHorizontal1: BravyIconsIcon;

/**
 * @component @name SliderHorizontal
 * @description Renders Bravyicons SliderHorizontal svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SliderHorizontal: BravyIconsIcon;

/**
 * @component @name SliderVertical1
 * @description Renders Bravyicons SliderVertical1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SliderVertical1: BravyIconsIcon;

/**
 * @component @name SliderVertical
 * @description Renders Bravyicons SliderVertical svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SliderVertical: BravyIconsIcon;

/**
 * @component @name Slider
 * @description Renders Bravyicons Slider svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Slider: BravyIconsIcon;

/**
 * @component @name Smallcaps
 * @description Renders Bravyicons Smallcaps svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Smallcaps: BravyIconsIcon;

/**
 * @component @name SmartCar
 * @description Renders Bravyicons SmartCar svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SmartCar: BravyIconsIcon;

/**
 * @component @name SmartHome
 * @description Renders Bravyicons SmartHome svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SmartHome: BravyIconsIcon;

/**
 * @component @name Smileys
 * @description Renders Bravyicons Smileys svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Smileys: BravyIconsIcon;

/**
 * @component @name Snapchat
 * @description Renders Bravyicons Snapchat svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Snapchat: BravyIconsIcon;

/**
 * @component @name SoapShampoo
 * @description Renders Bravyicons SoapShampoo svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SoapShampoo: BravyIconsIcon;

/**
 * @component @name SolanaSol
 * @description Renders Bravyicons SolanaSol svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SolanaSol: BravyIconsIcon;

/**
 * @component @name Sort
 * @description Renders Bravyicons Sort svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Sort: BravyIconsIcon;

/**
 * @component @name Sound
 * @description Renders Bravyicons Sound svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Sound: BravyIconsIcon;

/**
 * @component @name Speaker
 * @description Renders Bravyicons Speaker svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Speaker: BravyIconsIcon;

/**
 * @component @name Speedometer
 * @description Renders Bravyicons Speedometer svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Speedometer: BravyIconsIcon;

/**
 * @component @name Spotify
 * @description Renders Bravyicons Spotify svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Spotify: BravyIconsIcon;

/**
 * @component @name StacksStx
 * @description Renders Bravyicons StacksStx svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const StacksStx: BravyIconsIcon;

/**
 * @component @name Star1
 * @description Renders Bravyicons Star1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Star1: BravyIconsIcon;

/**
 * @component @name StarAlt
 * @description Renders Bravyicons StarAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const StarAlt: BravyIconsIcon;

/**
 * @component @name StarSlash
 * @description Renders Bravyicons StarSlash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const StarSlash: BravyIconsIcon;

/**
 * @component @name Star
 * @description Renders Bravyicons Star svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Star: BravyIconsIcon;

/**
 * @component @name StatusUp
 * @description Renders Bravyicons StatusUp svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const StatusUp: BravyIconsIcon;

/**
 * @component @name Status
 * @description Renders Bravyicons Status svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Status: BravyIconsIcon;

/**
 * @component @name StellarXlm
 * @description Renders Bravyicons StellarXlm svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const StellarXlm: BravyIconsIcon;

/**
 * @component @name Sticker
 * @description Renders Bravyicons Sticker svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Sticker: BravyIconsIcon;

/**
 * @component @name Stickynote
 * @description Renders Bravyicons Stickynote svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Stickynote: BravyIconsIcon;

/**
 * @component @name StopCircle
 * @description Renders Bravyicons StopCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const StopCircle: BravyIconsIcon;

/**
 * @component @name Stop
 * @description Renders Bravyicons Stop svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Stop: BravyIconsIcon;

/**
 * @component @name Store
 * @description Renders Bravyicons Store svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Store: BravyIconsIcon;

/**
 * @component @name Story
 * @description Renders Bravyicons Story svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Story: BravyIconsIcon;

/**
 * @component @name Strongbox2
 * @description Renders Bravyicons Strongbox2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Strongbox2: BravyIconsIcon;

/**
 * @component @name Strongbox
 * @description Renders Bravyicons Strongbox svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Strongbox: BravyIconsIcon;

/**
 * @component @name Subtitle
 * @description Renders Bravyicons Subtitle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Subtitle: BravyIconsIcon;

/**
 * @component @name Sun1
 * @description Renders Bravyicons Sun1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Sun1: BravyIconsIcon;

/**
 * @component @name SunFog
 * @description Renders Bravyicons SunFog svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const SunFog: BravyIconsIcon;

/**
 * @component @name Sun
 * @description Renders Bravyicons Sun svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Sun: BravyIconsIcon;

/**
 * @component @name Tag2
 * @description Renders Bravyicons Tag2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Tag2: BravyIconsIcon;

/**
 * @component @name TagCross
 * @description Renders Bravyicons TagCross svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TagCross: BravyIconsIcon;

/**
 * @component @name TagRight
 * @description Renders Bravyicons TagRight svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TagRight: BravyIconsIcon;

/**
 * @component @name TagUser
 * @description Renders Bravyicons TagUser svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TagUser: BravyIconsIcon;

/**
 * @component @name Tag
 * @description Renders Bravyicons Tag svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Tag: BravyIconsIcon;

/**
 * @component @name TaskSquare
 * @description Renders Bravyicons TaskSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TaskSquare: BravyIconsIcon;

/**
 * @component @name Task
 * @description Renders Bravyicons Task svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Task: BravyIconsIcon;

/**
 * @component @name Teacher
 * @description Renders Bravyicons Teacher svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Teacher: BravyIconsIcon;

/**
 * @component @name TenxPay
 * @description Renders Bravyicons TenxPay svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TenxPay: BravyIconsIcon;

/**
 * @component @name TetherUsdt
 * @description Renders Bravyicons TetherUsdt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TetherUsdt: BravyIconsIcon;

/**
 * @component @name TextBlock
 * @description Renders Bravyicons TextBlock svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextBlock: BravyIconsIcon;

/**
 * @component @name TextBold
 * @description Renders Bravyicons TextBold svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextBold: BravyIconsIcon;

/**
 * @component @name TextItalic
 * @description Renders Bravyicons TextItalic svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextItalic: BravyIconsIcon;

/**
 * @component @name TextUnderline
 * @description Renders Bravyicons TextUnderline svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextUnderline: BravyIconsIcon;

/**
 * @component @name Text
 * @description Renders Bravyicons Text svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Text: BravyIconsIcon;

/**
 * @component @name TextalignCenter
 * @description Renders Bravyicons TextalignCenter svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextalignCenter: BravyIconsIcon;

/**
 * @component @name TextalignJustifycenter
 * @description Renders Bravyicons TextalignJustifycenter svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextalignJustifycenter: BravyIconsIcon;

/**
 * @component @name TextalignJustifyleft
 * @description Renders Bravyicons TextalignJustifyleft svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextalignJustifyleft: BravyIconsIcon;

/**
 * @component @name TextalignJustifyright
 * @description Renders Bravyicons TextalignJustifyright svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextalignJustifyright: BravyIconsIcon;

/**
 * @component @name TextalignLeft
 * @description Renders Bravyicons TextalignLeft svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextalignLeft: BravyIconsIcon;

/**
 * @component @name TextalignRight
 * @description Renders Bravyicons TextalignRight svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TextalignRight: BravyIconsIcon;

/**
 * @component @name TheGraphGrt
 * @description Renders Bravyicons TheGraphGrt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TheGraphGrt: BravyIconsIcon;

/**
 * @component @name ThetaTheta
 * @description Renders Bravyicons ThetaTheta svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ThetaTheta: BravyIconsIcon;

/**
 * @component @name ThorchainRune
 * @description Renders Bravyicons ThorchainRune svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ThorchainRune: BravyIconsIcon;

/**
 * @component @name ThreeFull
 * @description Renders Bravyicons ThreeFull svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ThreeFull: BravyIconsIcon;

/**
 * @component @name ThreeSquare
 * @description Renders Bravyicons ThreeSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ThreeSquare: BravyIconsIcon;

/**
 * @component @name ThreedCubeScan
 * @description Renders Bravyicons ThreedCubeScan svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ThreedCubeScan: BravyIconsIcon;

/**
 * @component @name ThreedRotate
 * @description Renders Bravyicons ThreedRotate svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ThreedRotate: BravyIconsIcon;

/**
 * @component @name ThreedSquare
 * @description Renders Bravyicons ThreedSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ThreedSquare: BravyIconsIcon;

/**
 * @component @name Threedcube
 * @description Renders Bravyicons Threedcube svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Threedcube: BravyIconsIcon;

/**
 * @component @name ThumpDown
 * @description Renders Bravyicons ThumpDown svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ThumpDown: BravyIconsIcon;

/**
 * @component @name ThumpUp
 * @description Renders Bravyicons ThumpUp svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ThumpUp: BravyIconsIcon;

/**
 * @component @name TickCircle
 * @description Renders Bravyicons TickCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TickCircle: BravyIconsIcon;

/**
 * @component @name TickSquare
 * @description Renders Bravyicons TickSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TickSquare: BravyIconsIcon;

/**
 * @component @name Ticket2
 * @description Renders Bravyicons Ticket2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Ticket2: BravyIconsIcon;

/**
 * @component @name TicketDiscount
 * @description Renders Bravyicons TicketDiscount svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TicketDiscount: BravyIconsIcon;

/**
 * @component @name TicketExpired
 * @description Renders Bravyicons TicketExpired svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TicketExpired: BravyIconsIcon;

/**
 * @component @name TicketStar
 * @description Renders Bravyicons TicketStar svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TicketStar: BravyIconsIcon;

/**
 * @component @name Ticket
 * @description Renders Bravyicons Ticket svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Ticket: BravyIconsIcon;

/**
 * @component @name Time
 * @description Renders Bravyicons Time svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Time: BravyIconsIcon;

/**
 * @component @name Timer1
 * @description Renders Bravyicons Timer1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Timer1: BravyIconsIcon;

/**
 * @component @name TimerPause
 * @description Renders Bravyicons TimerPause svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TimerPause: BravyIconsIcon;

/**
 * @component @name TimerStart
 * @description Renders Bravyicons TimerStart svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TimerStart: BravyIconsIcon;

/**
 * @component @name Timer
 * @description Renders Bravyicons Timer svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Timer: BravyIconsIcon;

/**
 * @component @name ToggleOffCircle
 * @description Renders Bravyicons ToggleOffCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ToggleOffCircle: BravyIconsIcon;

/**
 * @component @name ToggleOff
 * @description Renders Bravyicons ToggleOff svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ToggleOff: BravyIconsIcon;

/**
 * @component @name ToggleOnCircle
 * @description Renders Bravyicons ToggleOnCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ToggleOnCircle: BravyIconsIcon;

/**
 * @component @name ToggleOn
 * @description Renders Bravyicons ToggleOn svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ToggleOn: BravyIconsIcon;

/**
 * @component @name ToothbrushToothpaste
 * @description Renders Bravyicons ToothbrushToothpaste svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ToothbrushToothpaste: BravyIconsIcon;

/**
 * @component @name Trade
 * @description Renders Bravyicons Trade svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Trade: BravyIconsIcon;

/**
 * @component @name TransactionMinus
 * @description Renders Bravyicons TransactionMinus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TransactionMinus: BravyIconsIcon;

/**
 * @component @name Translate
 * @description Renders Bravyicons Translate svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Translate: BravyIconsIcon;

/**
 * @component @name Trash
 * @description Renders Bravyicons Trash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Trash: BravyIconsIcon;

/**
 * @component @name Tree
 * @description Renders Bravyicons Tree svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Tree: BravyIconsIcon;

/**
 * @component @name Trello
 * @description Renders Bravyicons Trello svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Trello: BravyIconsIcon;

/**
 * @component @name TrendDown
 * @description Renders Bravyicons TrendDown svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TrendDown: BravyIconsIcon;

/**
 * @component @name TrendUp
 * @description Renders Bravyicons TrendUp svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TrendUp: BravyIconsIcon;

/**
 * @component @name TriangleAlt
 * @description Renders Bravyicons TriangleAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TriangleAlt: BravyIconsIcon;

/**
 * @component @name Triangle
 * @description Renders Bravyicons Triangle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Triangle: BravyIconsIcon;

/**
 * @component @name TrontronTrx
 * @description Renders Bravyicons TrontronTrx svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TrontronTrx: BravyIconsIcon;

/**
 * @component @name TruckFast
 * @description Renders Bravyicons TruckFast svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TruckFast: BravyIconsIcon;

/**
 * @component @name TruckRemove
 * @description Renders Bravyicons TruckRemove svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TruckRemove: BravyIconsIcon;

/**
 * @component @name TruckTick
 * @description Renders Bravyicons TruckTick svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TruckTick: BravyIconsIcon;

/**
 * @component @name TruckTime
 * @description Renders Bravyicons TruckTime svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TruckTime: BravyIconsIcon;

/**
 * @component @name Truck
 * @description Renders Bravyicons Truck svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Truck: BravyIconsIcon;

/**
 * @component @name TrushSquare
 * @description Renders Bravyicons TrushSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TrushSquare: BravyIconsIcon;

/**
 * @component @name Trush
 * @description Renders Bravyicons Trush svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Trush: BravyIconsIcon;

/**
 * @component @name TwentyFourSupport
 * @description Renders Bravyicons TwentyFourSupport svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const TwentyFourSupport: BravyIconsIcon;

/**
 * @component @name Twitch
 * @description Renders Bravyicons Twitch svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Twitch: BravyIconsIcon;

/**
 * @component @name Ui8
 * @description Renders Bravyicons Ui8 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Ui8: BravyIconsIcon;

/**
 * @component @name Undo
 * @description Renders Bravyicons Undo svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Undo: BravyIconsIcon;

/**
 * @component @name Unlimited
 * @description Renders Bravyicons Unlimited svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Unlimited: BravyIconsIcon;

/**
 * @component @name Unlock
 * @description Renders Bravyicons Unlock svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Unlock: BravyIconsIcon;

/**
 * @component @name UsdCoinUsdc
 * @description Renders Bravyicons UsdCoinUsdc svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UsdCoinUsdc: BravyIconsIcon;

/**
 * @component @name UserAdd
 * @description Renders Bravyicons UserAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserAdd: BravyIconsIcon;

/**
 * @component @name UserCirlceAdd
 * @description Renders Bravyicons UserCirlceAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserCirlceAdd: BravyIconsIcon;

/**
 * @component @name UserEdit
 * @description Renders Bravyicons UserEdit svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserEdit: BravyIconsIcon;

/**
 * @component @name UserMinus
 * @description Renders Bravyicons UserMinus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserMinus: BravyIconsIcon;

/**
 * @component @name UserOctagon
 * @description Renders Bravyicons UserOctagon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserOctagon: BravyIconsIcon;

/**
 * @component @name UserRemove
 * @description Renders Bravyicons UserRemove svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserRemove: BravyIconsIcon;

/**
 * @component @name UserSearch
 * @description Renders Bravyicons UserSearch svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserSearch: BravyIconsIcon;

/**
 * @component @name UserSquare
 * @description Renders Bravyicons UserSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserSquare: BravyIconsIcon;

/**
 * @component @name UserTag
 * @description Renders Bravyicons UserTag svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserTag: BravyIconsIcon;

/**
 * @component @name UserTick
 * @description Renders Bravyicons UserTick svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const UserTick: BravyIconsIcon;

/**
 * @component @name User
 * @description Renders Bravyicons User svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const User: BravyIconsIcon;

/**
 * @component @name VelasVlx
 * @description Renders Bravyicons VelasVlx svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VelasVlx: BravyIconsIcon;

/**
 * @component @name Verify
 * @description Renders Bravyicons Verify svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Verify: BravyIconsIcon;

/**
 * @component @name Vespa
 * @description Renders Bravyicons Vespa svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Vespa: BravyIconsIcon;

/**
 * @component @name VibeVibe
 * @description Renders Bravyicons VibeVibe svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VibeVibe: BravyIconsIcon;

/**
 * @component @name VideoAdd
 * @description Renders Bravyicons VideoAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoAdd: BravyIconsIcon;

/**
 * @component @name VideoCallCamera
 * @description Renders Bravyicons VideoCallCamera svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoCallCamera: BravyIconsIcon;

/**
 * @component @name VideoCircle
 * @description Renders Bravyicons VideoCircle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoCircle: BravyIconsIcon;

/**
 * @component @name VideoHorizontal
 * @description Renders Bravyicons VideoHorizontal svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoHorizontal: BravyIconsIcon;

/**
 * @component @name VideoOctagon
 * @description Renders Bravyicons VideoOctagon svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoOctagon: BravyIconsIcon;

/**
 * @component @name VideoPlay
 * @description Renders Bravyicons VideoPlay svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoPlay: BravyIconsIcon;

/**
 * @component @name VideoRemove
 * @description Renders Bravyicons VideoRemove svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoRemove: BravyIconsIcon;

/**
 * @component @name VideoSlash
 * @description Renders Bravyicons VideoSlash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoSlash: BravyIconsIcon;

/**
 * @component @name VideoSquare
 * @description Renders Bravyicons VideoSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoSquare: BravyIconsIcon;

/**
 * @component @name VideoTick
 * @description Renders Bravyicons VideoTick svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoTick: BravyIconsIcon;

/**
 * @component @name VideoTime
 * @description Renders Bravyicons VideoTime svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoTime: BravyIconsIcon;

/**
 * @component @name VideoVertical
 * @description Renders Bravyicons VideoVertical svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VideoVertical: BravyIconsIcon;

/**
 * @component @name Video
 * @description Renders Bravyicons Video svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Video: BravyIconsIcon;

/**
 * @component @name VillaHome
 * @description Renders Bravyicons VillaHome svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VillaHome: BravyIconsIcon;

/**
 * @component @name VoiceCricle
 * @description Renders Bravyicons VoiceCricle svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VoiceCricle: BravyIconsIcon;

/**
 * @component @name VoiceSquare
 * @description Renders Bravyicons VoiceSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VoiceSquare: BravyIconsIcon;

/**
 * @component @name VolumeCross
 * @description Renders Bravyicons VolumeCross svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VolumeCross: BravyIconsIcon;

/**
 * @component @name VolumeHigh
 * @description Renders Bravyicons VolumeHigh svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VolumeHigh: BravyIconsIcon;

/**
 * @component @name VolumeLow1
 * @description Renders Bravyicons VolumeLow1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VolumeLow1: BravyIconsIcon;

/**
 * @component @name VolumeLow
 * @description Renders Bravyicons VolumeLow svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VolumeLow: BravyIconsIcon;

/**
 * @component @name VolumeMute
 * @description Renders Bravyicons VolumeMute svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VolumeMute: BravyIconsIcon;

/**
 * @component @name VolumeSlash
 * @description Renders Bravyicons VolumeSlash svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VolumeSlash: BravyIconsIcon;

/**
 * @component @name VolumeUp
 * @description Renders Bravyicons VolumeUp svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const VolumeUp: BravyIconsIcon;

/**
 * @component @name Vouchers
 * @description Renders Bravyicons Vouchers svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Vouchers: BravyIconsIcon;

/**
 * @component @name Vuesax
 * @description Renders Bravyicons Vuesax svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Vuesax: BravyIconsIcon;

/**
 * @component @name Wallet1
 * @description Renders Bravyicons Wallet1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Wallet1: BravyIconsIcon;

/**
 * @component @name Wallet2
 * @description Renders Bravyicons Wallet2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Wallet2: BravyIconsIcon;

/**
 * @component @name Wallet3
 * @description Renders Bravyicons Wallet3 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Wallet3: BravyIconsIcon;

/**
 * @component @name WalletAdd1
 * @description Renders Bravyicons WalletAdd1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WalletAdd1: BravyIconsIcon;

/**
 * @component @name WalletAdd
 * @description Renders Bravyicons WalletAdd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WalletAdd: BravyIconsIcon;

/**
 * @component @name WalletCheck
 * @description Renders Bravyicons WalletCheck svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WalletCheck: BravyIconsIcon;

/**
 * @component @name WalletMinus
 * @description Renders Bravyicons WalletMinus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WalletMinus: BravyIconsIcon;

/**
 * @component @name WalletMoney
 * @description Renders Bravyicons WalletMoney svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WalletMoney: BravyIconsIcon;

/**
 * @component @name WalletRemove
 * @description Renders Bravyicons WalletRemove svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WalletRemove: BravyIconsIcon;

/**
 * @component @name WalletSearch
 * @description Renders Bravyicons WalletSearch svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WalletSearch: BravyIconsIcon;

/**
 * @component @name Wallet
 * @description Renders Bravyicons Wallet svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Wallet: BravyIconsIcon;

/**
 * @component @name WanchainWan1
 * @description Renders Bravyicons WanchainWan1 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WanchainWan1: BravyIconsIcon;

/**
 * @component @name WanchainWan
 * @description Renders Bravyicons WanchainWan svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WanchainWan: BravyIconsIcon;

/**
 * @component @name Warning2
 * @description Renders Bravyicons Warning2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Warning2: BravyIconsIcon;

/**
 * @component @name WatchStatus
 * @description Renders Bravyicons WatchStatus svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WatchStatus: BravyIconsIcon;

/**
 * @component @name Watch
 * @description Renders Bravyicons Watch svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Watch: BravyIconsIcon;

/**
 * @component @name Weight
 * @description Renders Bravyicons Weight svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Weight: BravyIconsIcon;

/**
 * @component @name Whatsapp
 * @description Renders Bravyicons Whatsapp svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Whatsapp: BravyIconsIcon;

/**
 * @component @name WifiAlt
 * @description Renders Bravyicons WifiAlt svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WifiAlt: BravyIconsIcon;

/**
 * @component @name WifiSquare
 * @description Renders Bravyicons WifiSquare svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WifiSquare: BravyIconsIcon;

/**
 * @component @name Wifi
 * @description Renders Bravyicons Wifi svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Wifi: BravyIconsIcon;

/**
 * @component @name Wind2
 * @description Renders Bravyicons Wind2 svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Wind2: BravyIconsIcon;

/**
 * @component @name Wind
 * @description Renders Bravyicons Wind svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Wind: BravyIconsIcon;

/**
 * @component @name Windows
 * @description Renders Bravyicons Windows svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Windows: BravyIconsIcon;

/**
 * @component @name WingWing
 * @description Renders Bravyicons WingWing svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const WingWing: BravyIconsIcon;

/**
 * @component @name Woman
 * @description Renders Bravyicons Woman svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Woman: BravyIconsIcon;

/**
 * @component @name Wristwatch
 * @description Renders Bravyicons Wristwatch svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Wristwatch: BravyIconsIcon;

/**
 * @component @name Xd
 * @description Renders Bravyicons Xd svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Xd: BravyIconsIcon;

/**
 * @component @name Xiaomi
 * @description Renders Bravyicons Xiaomi svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Xiaomi: BravyIconsIcon;

/**
 * @component @name XrpXrp
 * @description Renders Bravyicons XrpXrp svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const XrpXrp: BravyIconsIcon;

/**
 * @component @name Youtube
 * @description Renders Bravyicons Youtube svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Youtube: BravyIconsIcon;

/**
 * @component @name ZelZel
 * @description Renders Bravyicons ZelZel svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const ZelZel: BravyIconsIcon;

/**
 * @component @name Zoom
 * @description Renders Bravyicons Zoom svg element
 *
 * @param {Object} props - Bravyicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
declare const Zoom: BravyIconsIcon;

declare const index_Aave: typeof Aave;
declare const index_Activity: typeof Activity;
declare const index_Add: typeof Add;
declare const index_AddCircle: typeof AddCircle;
declare const index_AddSquare: typeof AddSquare;
declare const index_Additem: typeof Additem;
declare const index_Airdrop: typeof Airdrop;
declare const index_Airplane: typeof Airplane;
declare const index_AirplaneSquare: typeof AirplaneSquare;
declare const index_Airpod: typeof Airpod;
declare const index_Airpods: typeof Airpods;
declare const index_Alarm: typeof Alarm;
declare const index_AlignBottom: typeof AlignBottom;
declare const index_AlignHorizontally: typeof AlignHorizontally;
declare const index_AlignLeft: typeof AlignLeft;
declare const index_AlignRight: typeof AlignRight;
declare const index_AlignVertically: typeof AlignVertically;
declare const index_Alternative: typeof Alternative;
declare const index_Amount: typeof Amount;
declare const index_Android: typeof Android;
declare const index_AnkrAnkr: typeof AnkrAnkr;
declare const index_ApartmentHome: typeof ApartmentHome;
declare const index_Apple: typeof Apple;
declare const index_Aquarius: typeof Aquarius;
declare const index_Archive: typeof Archive;
declare const index_ArchiveAdd: typeof ArchiveAdd;
declare const index_ArchiveAlt: typeof ArchiveAlt;
declare const index_ArchiveBook: typeof ArchiveBook;
declare const index_ArchiveMinus: typeof ArchiveMinus;
declare const index_ArchiveSlash: typeof ArchiveSlash;
declare const index_ArchiveTick: typeof ArchiveTick;
declare const index_ArrangeCircle: typeof ArrangeCircle;
declare const index_ArrangeCircle2: typeof ArrangeCircle2;
declare const index_ArrangeSquare: typeof ArrangeSquare;
declare const index_ArrangeSquare2: typeof ArrangeSquare2;
declare const index_Arrow: typeof Arrow;
declare const index_Arrow2: typeof Arrow2;
declare const index_Arrow3: typeof Arrow3;
declare const index_ArrowBottom: typeof ArrowBottom;
declare const index_ArrowCircleDown: typeof ArrowCircleDown;
declare const index_ArrowCircleLeft: typeof ArrowCircleLeft;
declare const index_ArrowCircleRight: typeof ArrowCircleRight;
declare const index_ArrowDown: typeof ArrowDown;
declare const index_ArrowDown1: typeof ArrowDown1;
declare const index_ArrowDown2: typeof ArrowDown2;
declare const index_ArrowLeft: typeof ArrowLeft;
declare const index_ArrowLeft1: typeof ArrowLeft1;
declare const index_ArrowLeft2: typeof ArrowLeft2;
declare const index_ArrowLeft3: typeof ArrowLeft3;
declare const index_ArrowRight: typeof ArrowRight;
declare const index_ArrowRight1: typeof ArrowRight1;
declare const index_ArrowRight2: typeof ArrowRight2;
declare const index_ArrowRight3: typeof ArrowRight3;
declare const index_ArrowSquare: typeof ArrowSquare;
declare const index_ArrowSquareDown: typeof ArrowSquareDown;
declare const index_ArrowSquareLeft: typeof ArrowSquareLeft;
declare const index_ArrowSquareRight: typeof ArrowSquareRight;
declare const index_ArrowSquareUp: typeof ArrowSquareUp;
declare const index_ArrowSwapHorizontal: typeof ArrowSwapHorizontal;
declare const index_ArrowUp: typeof ArrowUp;
declare const index_ArrowUp1: typeof ArrowUp1;
declare const index_ArrowUp2: typeof ArrowUp2;
declare const index_ArrowUp3: typeof ArrowUp3;
declare const index_ArrowUpCircle: typeof ArrowUpCircle;
declare const index_AttachCircle: typeof AttachCircle;
declare const index_AttachSquare: typeof AttachSquare;
declare const index_Attention: typeof Attention;
declare const index_AudioSquare: typeof AudioSquare;
declare const index_AugurRep: typeof AugurRep;
declare const index_Autobrightness: typeof Autobrightness;
declare const index_AutonioNiox: typeof AutonioNiox;
declare const index_AvalancheAvax: typeof AvalancheAvax;
declare const index_Award: typeof Award;
declare const index_Baby: typeof Baby;
declare const index_Baby2: typeof Baby2;
declare const index_BackIconsUia: typeof BackIconsUia;
declare const index_BackSquare: typeof BackSquare;
declare const index_Backarrow: typeof Backarrow;
declare const index_Backward: typeof Backward;
declare const index_Backward10Seconds: typeof Backward10Seconds;
declare const index_Backward15Seconds: typeof Backward15Seconds;
declare const index_Backward5Seconds: typeof Backward5Seconds;
declare const index_BackwardItem: typeof BackwardItem;
declare const index_Bag: typeof Bag;
declare const index_Bag2: typeof Bag2;
declare const index_BagAlt: typeof BagAlt;
declare const index_BagCross: typeof BagCross;
declare const index_BagCross1: typeof BagCross1;
declare const index_BagHappy: typeof BagHappy;
declare const index_BagTick: typeof BagTick;
declare const index_BagTick2: typeof BagTick2;
declare const index_BagTimer: typeof BagTimer;
declare const index_Balance: typeof Balance;
declare const index_Bank: typeof Bank;
declare const index_Barcode: typeof Barcode;
declare const index_BatteryCharging: typeof BatteryCharging;
declare const index_BatteryDisable: typeof BatteryDisable;
declare const index_BatteryEmpty: typeof BatteryEmpty;
declare const index_BatteryEmpty1: typeof BatteryEmpty1;
declare const index_BatteryFull: typeof BatteryFull;
declare const index_Be: typeof Be;
declare const index_Bell: typeof Bell;
declare const index_Bezier: typeof Bezier;
declare const index_Bicycle: typeof Bicycle;
declare const index_Bicycle2: typeof Bicycle2;
declare const index_Bill: typeof Bill;
declare const index_BinanceCoinBnb: typeof BinanceCoinBnb;
declare const index_BinanceUsdBusd: typeof BinanceUsdBusd;
declare const index_Birthday: typeof Birthday;
declare const index_BitcoinBtc: typeof BitcoinBtc;
declare const index_BitcoinCard: typeof BitcoinCard;
declare const index_BitcoinConvert: typeof BitcoinConvert;
declare const index_BitcoinRefresh: typeof BitcoinRefresh;
declare const index_Blend: typeof Blend;
declare const index_Blend2: typeof Blend2;
declare const index_Blogger: typeof Blogger;
declare const index_Bluetooth: typeof Bluetooth;
declare const index_Bluetooth2: typeof Bluetooth2;
declare const index_BluetoothCircle: typeof BluetoothCircle;
declare const index_BluetoothRectangle: typeof BluetoothRectangle;
declare const index_Blur: typeof Blur;
declare const index_Book: typeof Book;
declare const index_Book1: typeof Book1;
declare const index_BookSaved: typeof BookSaved;
declare const index_BookSquare: typeof BookSquare;
declare const index_Bookmark: typeof Bookmark;
declare const index_Bookmark2: typeof Bookmark2;
declare const index_Bootsrap: typeof Bootsrap;
declare const index_Box: typeof Box;
declare const index_Box1: typeof Box1;
declare const index_Box2: typeof Box2;
declare const index_BoxAdd: typeof BoxAdd;
declare const index_BoxAlt: typeof BoxAlt;
declare const index_BoxRemove: typeof BoxRemove;
declare const index_BoxSearch: typeof BoxSearch;
declare const index_BoxTick: typeof BoxTick;
declare const index_BoxTime: typeof BoxTime;
declare const index_Briefcase: typeof Briefcase;
declare const index_BrifecaseCross: typeof BrifecaseCross;
declare const index_BrifecaseTick: typeof BrifecaseTick;
declare const index_BrifecaseTimer: typeof BrifecaseTimer;
declare const index_Broom: typeof Broom;
declare const index_Brush: typeof Brush;
declare const index_Brush1: typeof Brush1;
declare const index_Brush2: typeof Brush2;
declare const index_Brush3: typeof Brush3;
declare const index_BrushAlt: typeof BrushAlt;
declare const index_Bubble: typeof Bubble;
declare const index_BucketCircle: typeof BucketCircle;
declare const index_BucketSquare: typeof BucketSquare;
declare const index_Building: typeof Building;
declare const index_Building3: typeof Building3;
declare const index_Building4: typeof Building4;
declare const index_Buildings: typeof Buildings;
declare const index_Buildings2: typeof Buildings2;
declare const index_Buliding: typeof Buliding;
declare const index_Bus: typeof Bus;
declare const index_BusinessCompanyBuilding: typeof BusinessCompanyBuilding;
declare const index_BuyCrypto: typeof BuyCrypto;
declare const index_Cake: typeof Cake;
declare const index_Calculator: typeof Calculator;
declare const index_Calendar: typeof Calendar;
declare const index_Calendar1: typeof Calendar1;
declare const index_Calendar2: typeof Calendar2;
declare const index_CalendarAdd: typeof CalendarAdd;
declare const index_CalendarCircle: typeof CalendarCircle;
declare const index_CalendarEdit: typeof CalendarEdit;
declare const index_CalendarRemove: typeof CalendarRemove;
declare const index_CalendarSearch: typeof CalendarSearch;
declare const index_CalendarTick: typeof CalendarTick;
declare const index_CalenderTimeAppointment: typeof CalenderTimeAppointment;
declare const index_Call: typeof Call;
declare const index_CallAdd: typeof CallAdd;
declare const index_CallCalling: typeof CallCalling;
declare const index_CallIncoming: typeof CallIncoming;
declare const index_CallOutgoing: typeof CallOutgoing;
declare const index_CallReceived: typeof CallReceived;
declare const index_CallSlash: typeof CallSlash;
declare const index_CallcentarHelp: typeof CallcentarHelp;
declare const index_Camera: typeof Camera;
declare const index_CameraAlt: typeof CameraAlt;
declare const index_CameraSlash: typeof CameraSlash;
declare const index_Candle: typeof Candle;
declare const index_Candle2: typeof Candle2;
declare const index_Car: typeof Car;
declare const index_Card: typeof Card;
declare const index_CardAdd: typeof CardAdd;
declare const index_CardCoin: typeof CardCoin;
declare const index_CardEdit: typeof CardEdit;
declare const index_CardPos: typeof CardPos;
declare const index_CardReceive: typeof CardReceive;
declare const index_CardRemove: typeof CardRemove;
declare const index_CardRemove1: typeof CardRemove1;
declare const index_CardSend: typeof CardSend;
declare const index_CardSlash: typeof CardSlash;
declare const index_CardTick: typeof CardTick;
declare const index_CardTick1: typeof CardTick1;
declare const index_CardanoAda: typeof CardanoAda;
declare const index_Cards: typeof Cards;
declare const index_Cart: typeof Cart;
declare const index_Cash: typeof Cash;
declare const index_Category: typeof Category;
declare const index_Category2: typeof Category2;
declare const index_CategoryDashboard: typeof CategoryDashboard;
declare const index_Cd: typeof Cd;
declare const index_CeloCelo: typeof CeloCelo;
declare const index_CelsiusCel: typeof CelsiusCel;
declare const index_ChainlinkLink: typeof ChainlinkLink;
declare const index_Chart: typeof Chart;
declare const index_Chart1: typeof Chart1;
declare const index_Chart2: typeof Chart2;
declare const index_Chart21: typeof Chart21;
declare const index_ChartAlt: typeof ChartAlt;
declare const index_ChartAlt2: typeof ChartAlt2;
declare const index_ChartSquare: typeof ChartSquare;
declare const index_ChartSuccess: typeof ChartSuccess;
declare const index_Chat: typeof Chat;
declare const index_Check: typeof Check;
declare const index_Checkbox: typeof Checkbox;
declare const index_Checked: typeof Checked;
declare const index_Chrome: typeof Chrome;
declare const index_CivicCvc: typeof CivicCvc;
declare const index_Clipboard: typeof Clipboard;
declare const index_ClipboardClose: typeof ClipboardClose;
declare const index_ClipboardExport: typeof ClipboardExport;
declare const index_ClipboardImport: typeof ClipboardImport;
declare const index_ClipboardText: typeof ClipboardText;
declare const index_ClipboardTick: typeof ClipboardTick;
declare const index_Clock: typeof Clock;
declare const index_Close: typeof Close;
declare const index_CloseCircle: typeof CloseCircle;
declare const index_CloseNa: typeof CloseNa;
declare const index_CloseSquare: typeof CloseSquare;
declare const index_Cloud: typeof Cloud;
declare const index_CloudAdd: typeof CloudAdd;
declare const index_CloudChange: typeof CloudChange;
declare const index_CloudConnection: typeof CloudConnection;
declare const index_CloudCross: typeof CloudCross;
declare const index_CloudDrizzle: typeof CloudDrizzle;
declare const index_CloudFog: typeof CloudFog;
declare const index_CloudLightning: typeof CloudLightning;
declare const index_CloudMinus: typeof CloudMinus;
declare const index_CloudNotif: typeof CloudNotif;
declare const index_CloudPlus: typeof CloudPlus;
declare const index_CloudRemove: typeof CloudRemove;
declare const index_CloudSnow: typeof CloudSnow;
declare const index_CloudSunny: typeof CloudSunny;
declare const index_CloudUploadDownload: typeof CloudUploadDownload;
declare const index_Code: typeof Code;
declare const index_Code1: typeof Code1;
declare const index_CodeCircle: typeof CodeCircle;
declare const index_Coffee: typeof Coffee;
declare const index_Coin: typeof Coin;
declare const index_Coin1: typeof Coin1;
declare const index_ColorSwatch: typeof ColorSwatch;
declare const index_Colorfilter: typeof Colorfilter;
declare const index_ColorsSquare: typeof ColorsSquare;
declare const index_Command: typeof Command;
declare const index_CommandSquare: typeof CommandSquare;
declare const index_Component: typeof Component;
declare const index_Compound: typeof Compound;
declare const index_Computing: typeof Computing;
declare const index_Convert: typeof Convert;
declare const index_ConvertThreeDCube: typeof ConvertThreeDCube;
declare const index_Convertshape: typeof Convertshape;
declare const index_Convertshape2: typeof Convertshape2;
declare const index_Copy: typeof Copy;
declare const index_CopyAlt: typeof CopyAlt;
declare const index_CopySuccess: typeof CopySuccess;
declare const index_Copyright: typeof Copyright;
declare const index_Courthouse: typeof Courthouse;
declare const index_Cpu: typeof Cpu;
declare const index_CpuCharge: typeof CpuCharge;
declare const index_CpuSetting: typeof CpuSetting;
declare const index_CreativeCommons: typeof CreativeCommons;
declare const index_CreditCard: typeof CreditCard;
declare const index_CreditCardPlus: typeof CreditCardPlus;
declare const index_Crop: typeof Crop;
declare const index_Crown: typeof Crown;
declare const index_Crown1: typeof Crown1;
declare const index_Cup: typeof Cup;
declare const index_CupAlt: typeof CupAlt;
declare const index_Cursor: typeof Cursor;
declare const index_DaiDai: typeof DaiDai;
declare const index_Danger: typeof Danger;
declare const index_DashDash: typeof DashDash;
declare const index_Data: typeof Data;
declare const index_Data2: typeof Data2;
declare const index_DecredDcr: typeof DecredDcr;
declare const index_Deliverybox: typeof Deliverybox;
declare const index_DentDent: typeof DentDent;
declare const index_Designtools: typeof Designtools;
declare const index_Devices: typeof Devices;
declare const index_DevicesAlt: typeof DevicesAlt;
declare const index_Diagram: typeof Diagram;
declare const index_Diamonds: typeof Diamonds;
declare const index_DirectDown: typeof DirectDown;
declare const index_DirectLeft: typeof DirectLeft;
declare const index_DirectRight: typeof DirectRight;
declare const index_DirectUp: typeof DirectUp;
declare const index_DiscountCircle: typeof DiscountCircle;
declare const index_DiscountShape: typeof DiscountShape;
declare const index_Discover: typeof Discover;
declare const index_DiscoverAlt: typeof DiscoverAlt;
declare const index_Dislike: typeof Dislike;
declare const index_DoctorEarphone: typeof DoctorEarphone;
declare const index_Document: typeof Document;
declare const index_DocumentAlt: typeof DocumentAlt;
declare const index_DocumentCloud: typeof DocumentCloud;
declare const index_DocumentCode: typeof DocumentCode;
declare const index_DocumentCode2: typeof DocumentCode2;
declare const index_DocumentCopy: typeof DocumentCopy;
declare const index_DocumentDownload: typeof DocumentDownload;
declare const index_DocumentFavorite: typeof DocumentFavorite;
declare const index_DocumentFilter: typeof DocumentFilter;
declare const index_DocumentForward: typeof DocumentForward;
declare const index_DocumentLike: typeof DocumentLike;
declare const index_DocumentPrevious: typeof DocumentPrevious;
declare const index_DocumentSketch: typeof DocumentSketch;
declare const index_DocumentText: typeof DocumentText;
declare const index_DocumentText1: typeof DocumentText1;
declare const index_DocumentUpload: typeof DocumentUpload;
declare const index_DollarCircle: typeof DollarCircle;
declare const index_DollarSquare: typeof DollarSquare;
declare const index_DotsMenu: typeof DotsMenu;
declare const index_Dribbble: typeof Dribbble;
declare const index_Driver: typeof Driver;
declare const index_Driver2: typeof Driver2;
declare const index_DriverRefresh: typeof DriverRefresh;
declare const index_Driving: typeof Driving;
declare const index_Drop: typeof Drop;
declare const index_Dropbox: typeof Dropbox;
declare const index_EPrescriptions: typeof EPrescriptions;
declare const index_EPrescriptions2: typeof EPrescriptions2;
declare const index_Edit: typeof Edit;
declare const index_Edit2: typeof Edit2;
declare const index_EditAlt: typeof EditAlt;
declare const index_EditPen: typeof EditPen;
declare const index_EducareEkt: typeof EducareEkt;
declare const index_Electricity: typeof Electricity;
declare const index_Element1: typeof Element1;
declare const index_Element2: typeof Element2;
declare const index_Element3: typeof Element3;
declare const index_Element4: typeof Element4;
declare const index_ElementEqual: typeof ElementEqual;
declare const index_ElementPlus: typeof ElementPlus;
declare const index_Email: typeof Email;
declare const index_EmercoinEmc: typeof EmercoinEmc;
declare const index_EmojiHappy: typeof EmojiHappy;
declare const index_EmojiNormal: typeof EmojiNormal;
declare const index_EmojiSad: typeof EmojiSad;
declare const index_EmptyWallet: typeof EmptyWallet;
declare const index_EmptyWalletAdd: typeof EmptyWalletAdd;
declare const index_EmptyWalletChange: typeof EmptyWalletChange;
declare const index_EmptyWalletRemove: typeof EmptyWalletRemove;
declare const index_EmptyWalletTick: typeof EmptyWalletTick;
declare const index_EmptyWalletTime: typeof EmptyWalletTime;
declare const index_EnjinCoinEnj: typeof EnjinCoinEnj;
declare const index_Enter: typeof Enter;
declare const index_EosEos: typeof EosEos;
declare const index_Equal: typeof Equal;
declare const index_Eraser: typeof Eraser;
declare const index_EraserAlt: typeof EraserAlt;
declare const index_Erlenmeyer: typeof Erlenmeyer;
declare const index_EthereumClassicEtc: typeof EthereumClassicEtc;
declare const index_EthereumEth: typeof EthereumEth;
declare const index_Exchange: typeof Exchange;
declare const index_Exclamation: typeof Exclamation;
declare const index_Export: typeof Export;
declare const index_Export1: typeof Export1;
declare const index_Export2: typeof Export2;
declare const index_Export3: typeof Export3;
declare const index_ExternalDrive: typeof ExternalDrive;
declare const index_Eye: typeof Eye;
declare const index_EyeSlash: typeof EyeSlash;
declare const index_Facebook: typeof Facebook;
declare const index_Faq: typeof Faq;
declare const index_Fatrows: typeof Fatrows;
declare const index_FavoriteChart: typeof FavoriteChart;
declare const index_FemaleWomenGender: typeof FemaleWomenGender;
declare const index_Figma: typeof Figma;
declare const index_Figma1: typeof Figma1;
declare const index_Filter: typeof Filter;
declare const index_Filter2: typeof Filter2;
declare const index_FilterAdd: typeof FilterAdd;
declare const index_FilterAlt: typeof FilterAlt;
declare const index_FilterEdit: typeof FilterEdit;
declare const index_FilterRemove: typeof FilterRemove;
declare const index_FilterSearch: typeof FilterSearch;
declare const index_FilterSquare: typeof FilterSquare;
declare const index_FilterTick: typeof FilterTick;
declare const index_FingerCricle: typeof FingerCricle;
declare const index_FingerScan: typeof FingerScan;
declare const index_Firstline: typeof Firstline;
declare const index_Flag: typeof Flag;
declare const index_Flag2: typeof Flag2;
declare const index_Flash: typeof Flash;
declare const index_FlashAlt: typeof FlashAlt;
declare const index_FlashCircle: typeof FlashCircle;
declare const index_FlashCircleAlt: typeof FlashCircleAlt;
declare const index_FlashSlash: typeof FlashSlash;
declare const index_Folder: typeof Folder;
declare const index_Folder2: typeof Folder2;
declare const index_FolderAdd: typeof FolderAdd;
declare const index_FolderCloud: typeof FolderCloud;
declare const index_FolderConnection: typeof FolderConnection;
declare const index_FolderCross: typeof FolderCross;
declare const index_FolderFavorite: typeof FolderFavorite;
declare const index_FolderMinus: typeof FolderMinus;
declare const index_FolderOpen: typeof FolderOpen;
declare const index_FormatCircle: typeof FormatCircle;
declare const index_FormatSquare: typeof FormatSquare;
declare const index_Forward: typeof Forward;
declare const index_Forward10Seconds: typeof Forward10Seconds;
declare const index_Forward15Seconds: typeof Forward15Seconds;
declare const index_Forward5Seconds: typeof Forward5Seconds;
declare const index_ForwardItem: typeof ForwardItem;
declare const index_ForwardSquare: typeof ForwardSquare;
declare const index_Frame: typeof Frame;
declare const index_Frame1: typeof Frame1;
declare const index_Frame2: typeof Frame2;
declare const index_FrameAlt: typeof FrameAlt;
declare const index_Framer: typeof Framer;
declare const index_FtxTokenFtt: typeof FtxTokenFtt;
declare const index_FullRedo: typeof FullRedo;
declare const index_Gallery: typeof Gallery;
declare const index_GalleryAdd: typeof GalleryAdd;
declare const index_GalleryEdit: typeof GalleryEdit;
declare const index_GalleryExport: typeof GalleryExport;
declare const index_GalleryFavorite: typeof GalleryFavorite;
declare const index_GalleryImport: typeof GalleryImport;
declare const index_GalleryRemove: typeof GalleryRemove;
declare const index_GallerySlash: typeof GallerySlash;
declare const index_GalleryTick: typeof GalleryTick;
declare const index_Game: typeof Game;
declare const index_Gameboy: typeof Gameboy;
declare const index_GasStation: typeof GasStation;
declare const index_Gemini: typeof Gemini;
declare const index_Gemini2: typeof Gemini2;
declare const index_Gender: typeof Gender;
declare const index_Gender2Comp: typeof Gender2Comp;
declare const index_Gender2Female: typeof Gender2Female;
declare const index_Gender2Man: typeof Gender2Man;
declare const index_GenderChange: typeof GenderChange;
declare const index_GenderComp: typeof GenderComp;
declare const index_GenderFaceMan: typeof GenderFaceMan;
declare const index_GenderFaceWoman: typeof GenderFaceWoman;
declare const index_Ghost: typeof Ghost;
declare const index_Gift: typeof Gift;
declare const index_Glass: typeof Glass;
declare const index_Global: typeof Global;
declare const index_GlobalCountries: typeof GlobalCountries;
declare const index_GlobalEdit: typeof GlobalEdit;
declare const index_GlobalRefresh: typeof GlobalRefresh;
declare const index_GlobalSearch: typeof GlobalSearch;
declare const index_Google: typeof Google;
declare const index_Google1: typeof Google1;
declare const index_GooglePlay: typeof GooglePlay;
declare const index_Gps: typeof Gps;
declare const index_GpsSlash: typeof GpsSlash;
declare const index_Grammerly: typeof Grammerly;
declare const index_Graph: typeof Graph;
declare const index_Grid1: typeof Grid1;
declare const index_Grid2: typeof Grid2;
declare const index_Grid3: typeof Grid3;
declare const index_Grid4: typeof Grid4;
declare const index_Grid5: typeof Grid5;
declare const index_Grid6: typeof Grid6;
declare const index_Grid7: typeof Grid7;
declare const index_Grid8: typeof Grid8;
declare const index_Grid9: typeof Grid9;
declare const index_GridEdit: typeof GridEdit;
declare const index_GridEraser: typeof GridEraser;
declare const index_GridLock: typeof GridLock;
declare const index_Happyemoji: typeof Happyemoji;
declare const index_HarmonyOne: typeof HarmonyOne;
declare const index_Hashtag: typeof Hashtag;
declare const index_HashtagDown: typeof HashtagDown;
declare const index_HashtagUp: typeof HashtagUp;
declare const index_Headphone: typeof Headphone;
declare const index_Headphones: typeof Headphones;
declare const index_Health: typeof Health;
declare const index_Heart: typeof Heart;
declare const index_HeartAdd: typeof HeartAdd;
declare const index_HeartAlt: typeof HeartAlt;
declare const index_HeartCircle: typeof HeartCircle;
declare const index_HeartEdit: typeof HeartEdit;
declare const index_HeartRemove: typeof HeartRemove;
declare const index_HeartSearch: typeof HeartSearch;
declare const index_HeartSlash: typeof HeartSlash;
declare const index_HeartTick: typeof HeartTick;
declare const index_HederaHashgraphHbar: typeof HederaHashgraphHbar;
declare const index_Help: typeof Help;
declare const index_HexHex: typeof HexHex;
declare const index_Hierarchy: typeof Hierarchy;
declare const index_Hierarchy2: typeof Hierarchy2;
declare const index_Hierarchy3: typeof Hierarchy3;
declare const index_HierarchySquare: typeof HierarchySquare;
declare const index_HierarchySquare2: typeof HierarchySquare2;
declare const index_HierarchySquare3: typeof HierarchySquare3;
declare const index_Home: typeof Home;
declare const index_Home2: typeof Home2;
declare const index_HomeAlt: typeof HomeAlt;
declare const index_HomeHashtag: typeof HomeHashtag;
declare const index_HomeTrendDown: typeof HomeTrendDown;
declare const index_HomeTrendUp: typeof HomeTrendUp;
declare const index_HomeWifi: typeof HomeWifi;
declare const index_Hospital: typeof Hospital;
declare const index_HospitalAlt: typeof HospitalAlt;
declare const index_House: typeof House;
declare const index_House2: typeof House2;
declare const index_Html3: typeof Html3;
declare const index_Html5: typeof Html5;
declare const index_HuobiTokenHt: typeof HuobiTokenHt;
declare const index_IconIcx: typeof IconIcx;
declare const index_Id: typeof Id;
declare const index_Illustrator: typeof Illustrator;
declare const index_Image: typeof Image;
declare const index_Import: typeof Import;
declare const index_Import1: typeof Import1;
declare const index_Import2: typeof Import2;
declare const index_InfoCircle: typeof InfoCircle;
declare const index_Information: typeof Information;
declare const index_Instagram: typeof Instagram;
declare const index_IostIost: typeof IostIost;
declare const index_JavaScript: typeof JavaScript;
declare const index_Js: typeof Js;
declare const index_Judge: typeof Judge;
declare const index_Kanban: typeof Kanban;
declare const index_Key: typeof Key;
declare const index_KeySquare: typeof KeySquare;
declare const index_Keyboard: typeof Keyboard;
declare const index_KeyboardOpen: typeof KeyboardOpen;
declare const index_KyberNetworkKnc: typeof KyberNetworkKnc;
declare const index_Lamp: typeof Lamp;
declare const index_LampCharge: typeof LampCharge;
declare const index_LampOn: typeof LampOn;
declare const index_LampSlash: typeof LampSlash;
declare const index_LanguageCircle: typeof LanguageCircle;
declare const index_LanguageSquare: typeof LanguageSquare;
declare const index_Languages: typeof Languages;
declare const index_Layer: typeof Layer;
declare const index_Level: typeof Level;
declare const index_Lifebuoy: typeof Lifebuoy;
declare const index_Like: typeof Like;
declare const index_Like1: typeof Like1;
declare const index_LikeDislike: typeof LikeDislike;
declare const index_LikeShapes: typeof LikeShapes;
declare const index_LikeTag: typeof LikeTag;
declare const index_Link: typeof Link;
declare const index_Link1: typeof Link1;
declare const index_Link2: typeof Link2;
declare const index_Link21: typeof Link21;
declare const index_LinkAlt: typeof LinkAlt;
declare const index_LinkCircle: typeof LinkCircle;
declare const index_LinkSquare: typeof LinkSquare;
declare const index_LitecoinLtc: typeof LitecoinLtc;
declare const index_Location: typeof Location;
declare const index_LocationAdd: typeof LocationAdd;
declare const index_LocationAlt: typeof LocationAlt;
declare const index_LocationCross: typeof LocationCross;
declare const index_LocationMinus: typeof LocationMinus;
declare const index_LocationSlash: typeof LocationSlash;
declare const index_LocationTarget: typeof LocationTarget;
declare const index_LocationTick: typeof LocationTick;
declare const index_Lock: typeof Lock;
declare const index_Lock1: typeof Lock1;
declare const index_LockCircle: typeof LockCircle;
declare const index_LockPassword: typeof LockPassword;
declare const index_LockSlash: typeof LockSlash;
declare const index_Login: typeof Login;
declare const index_Login1: typeof Login1;
declare const index_Logout: typeof Logout;
declare const index_Logout1: typeof Logout1;
declare const index_LogoutAlt: typeof LogoutAlt;
declare const index_Lovely: typeof Lovely;
declare const index_LowWifi: typeof LowWifi;
declare const index_Machine: typeof Machine;
declare const index_MagicStar: typeof MagicStar;
declare const index_Magicpen: typeof Magicpen;
declare const index_MainComponent: typeof MainComponent;
declare const index_MakerMkr: typeof MakerMkr;
declare const index_Makeup: typeof Makeup;
declare const index_MaleManGender: typeof MaleManGender;
declare const index_Man: typeof Man;
declare const index_Map: typeof Map;
declare const index_Map1: typeof Map1;
declare const index_MapNavigation: typeof MapNavigation;
declare const index_Mask: typeof Mask;
declare const index_Mask2: typeof Mask2;
declare const index_Mask3: typeof Mask3;
declare const index_MaskAlt: typeof MaskAlt;
declare const index_Math: typeof Math;
declare const index_Maximize: typeof Maximize;
declare const index_Maximize1: typeof Maximize1;
declare const index_Maximize2: typeof Maximize2;
declare const index_Maximize3: typeof Maximize3;
declare const index_Maximize4: typeof Maximize4;
declare const index_MaximizeAlt: typeof MaximizeAlt;
declare const index_MaximizeCircle: typeof MaximizeCircle;
declare const index_Medal: typeof Medal;
declare const index_MedalStar: typeof MedalStar;
declare const index_MedicineBottle: typeof MedicineBottle;
declare const index_Menu: typeof Menu;
declare const index_MenuAlt: typeof MenuAlt;
declare const index_MenuBoard: typeof MenuBoard;
declare const index_MenuCircles: typeof MenuCircles;
declare const index_Message: typeof Message;
declare const index_MessageProgramming: typeof MessageProgramming;
declare const index_MessageQuestion: typeof MessageQuestion;
declare const index_Messenger: typeof Messenger;
declare const index_Microphone: typeof Microphone;
declare const index_Microphone2: typeof Microphone2;
declare const index_MicrophoneSlash: typeof MicrophoneSlash;
declare const index_MicrophoneSlash1: typeof MicrophoneSlash1;
declare const index_Microscope: typeof Microscope;
declare const index_Milk: typeof Milk;
declare const index_MiniMusicSqaure: typeof MiniMusicSqaure;
declare const index_Minus: typeof Minus;
declare const index_MinusAlt: typeof MinusAlt;
declare const index_MinusCirlce: typeof MinusCirlce;
declare const index_MinusSquare: typeof MinusSquare;
declare const index_Mirror: typeof Mirror;
declare const index_MirroringScreen: typeof MirroringScreen;
declare const index_Mobile: typeof Mobile;
declare const index_MobileProgramming: typeof MobileProgramming;
declare const index_MoneroXmr: typeof MoneroXmr;
declare const index_Money: typeof Money;
declare const index_Money2: typeof Money2;
declare const index_Money3: typeof Money3;
declare const index_Money4: typeof Money4;
declare const index_MoneyAdd: typeof MoneyAdd;
declare const index_MoneyChange: typeof MoneyChange;
declare const index_MoneyForbidden: typeof MoneyForbidden;
declare const index_MoneyRecive: typeof MoneyRecive;
declare const index_MoneyRemove: typeof MoneyRemove;
declare const index_MoneySend: typeof MoneySend;
declare const index_MoneyTick: typeof MoneyTick;
declare const index_MoneyTime: typeof MoneyTime;
declare const index_Moneys: typeof Moneys;
declare const index_Monitor: typeof Monitor;
declare const index_MonitorMobbile: typeof MonitorMobbile;
declare const index_MonitorRecorder: typeof MonitorRecorder;
declare const index_Moon: typeof Moon;
declare const index_More: typeof More;
declare const index_More2: typeof More2;
declare const index_MoreCircle: typeof MoreCircle;
declare const index_MoreSquare: typeof MoreSquare;
declare const index_Mouse: typeof Mouse;
declare const index_MouseCircle: typeof MouseCircle;
declare const index_MouseSquare: typeof MouseSquare;
declare const index_Music: typeof Music;
declare const index_MusicCircle: typeof MusicCircle;
declare const index_MusicDashboard: typeof MusicDashboard;
declare const index_MusicFilter: typeof MusicFilter;
declare const index_MusicLibrary2: typeof MusicLibrary2;
declare const index_MusicPlay: typeof MusicPlay;
declare const index_MusicPlaylist: typeof MusicPlaylist;
declare const index_MusicSquare: typeof MusicSquare;
declare const index_MusicSquareAdd: typeof MusicSquareAdd;
declare const index_MusicSquareRemove: typeof MusicSquareRemove;
declare const index_MusicSquareSearch: typeof MusicSquareSearch;
declare const index_Musicnote: typeof Musicnote;
declare const index_NebulasNas: typeof NebulasNas;
declare const index_NemXem: typeof NemXem;
declare const index_NexoNexo: typeof NexoNexo;
declare const index_Next: typeof Next;
declare const index_NoLocation: typeof NoLocation;
declare const index_Not: typeof Not;
declare const index_NotAlt: typeof NotAlt;
declare const index_NotCoveredLocation: typeof NotCoveredLocation;
declare const index_Note: typeof Note;
declare const index_Note1: typeof Note1;
declare const index_Note2: typeof Note2;
declare const index_NoteAdd: typeof NoteAdd;
declare const index_NoteAlt: typeof NoteAlt;
declare const index_NoteFavorite: typeof NoteFavorite;
declare const index_NoteRemove: typeof NoteRemove;
declare const index_NoteSquare: typeof NoteSquare;
declare const index_NoteText: typeof NoteText;
declare const index_Notification: typeof Notification;
declare const index_Notification1: typeof Notification1;
declare const index_NotificationBing: typeof NotificationBing;
declare const index_NotificationCircle: typeof NotificationCircle;
declare const index_NotificationFavorite: typeof NotificationFavorite;
declare const index_NotificationStatus: typeof NotificationStatus;
declare const index_OceanProtocolOcean: typeof OceanProtocolOcean;
declare const index_Offer: typeof Offer;
declare const index_OfficeBagHome: typeof OfficeBagHome;
declare const index_OkbOkb: typeof OkbOkb;
declare const index_OmegaCircle: typeof OmegaCircle;
declare const index_OmegaSquare: typeof OmegaSquare;
declare const index_OntologyOnt: typeof OntologyOnt;
declare const index_Paint: typeof Paint;
declare const index_Paintbucket: typeof Paintbucket;
declare const index_Paperclip: typeof Paperclip;
declare const index_Paperclip2: typeof Paperclip2;
declare const index_PaperclipAttach: typeof PaperclipAttach;
declare const index_PasswordCheck: typeof PasswordCheck;
declare const index_Path: typeof Path;
declare const index_Path2: typeof Path2;
declare const index_PathSquare: typeof PathSquare;
declare const index_Pause: typeof Pause;
declare const index_PauseCircle: typeof PauseCircle;
declare const index_Paypal: typeof Paypal;
declare const index_PenAdd: typeof PenAdd;
declare const index_PenClose: typeof PenClose;
declare const index_PenRemove: typeof PenRemove;
declare const index_PenTool: typeof PenTool;
declare const index_PenTool2: typeof PenTool2;
declare const index_People: typeof People;
declare const index_PercentCircle: typeof PercentCircle;
declare const index_PercentageSquare: typeof PercentageSquare;
declare const index_Personalcard: typeof Personalcard;
declare const index_Pet: typeof Pet;
declare const index_Pharagraphspacing: typeof Pharagraphspacing;
declare const index_Phone: typeof Phone;
declare const index_Photoshop: typeof Photoshop;
declare const index_PictureFrame: typeof PictureFrame;
declare const index_Play: typeof Play;
declare const index_PlayAdd: typeof PlayAdd;
declare const index_PlayCircle: typeof PlayCircle;
declare const index_PlayCricle: typeof PlayCricle;
declare const index_PlayRemove: typeof PlayRemove;
declare const index_Plus: typeof Plus;
declare const index_PlusSquare: typeof PlusSquare;
declare const index_PolkadotDot: typeof PolkadotDot;
declare const index_PolygonMatic: typeof PolygonMatic;
declare const index_PolyswarmNct: typeof PolyswarmNct;
declare const index_PresentionChart: typeof PresentionChart;
declare const index_Previous: typeof Previous;
declare const index_Printer: typeof Printer;
declare const index_PrinterSlash: typeof PrinterSlash;
declare const index_Profile: typeof Profile;
declare const index_Profile2User: typeof Profile2User;
declare const index_ProfileAdd: typeof ProfileAdd;
declare const index_ProfileAlt: typeof ProfileAlt;
declare const index_ProfileCircle: typeof ProfileCircle;
declare const index_ProfileDelete: typeof ProfileDelete;
declare const index_ProfileRemove: typeof ProfileRemove;
declare const index_ProfileTick: typeof ProfileTick;
declare const index_ProgrammingArrow: typeof ProgrammingArrow;
declare const index_ProgrammingArrows: typeof ProgrammingArrows;
declare const index_Python: typeof Python;
declare const index_QrCode: typeof QrCode;
declare const index_QuantQnt: typeof QuantQnt;
declare const index_QuestionMark: typeof QuestionMark;
declare const index_QuoteDown: typeof QuoteDown;
declare const index_QuoteDownCircle: typeof QuoteDownCircle;
declare const index_QuoteDownSquare: typeof QuoteDownSquare;
declare const index_QuoteUp: typeof QuoteUp;
declare const index_QuoteUpCircle: typeof QuoteUpCircle;
declare const index_QuoteUpSquare: typeof QuoteUpSquare;
declare const index_Radar: typeof Radar;
declare const index_Radar2: typeof Radar2;
declare const index_RadarAlt: typeof RadarAlt;
declare const index_Radio: typeof Radio;
declare const index_RadioCircles: typeof RadioCircles;
declare const index_Ram: typeof Ram;
declare const index_Ram2: typeof Ram2;
declare const index_Ranking: typeof Ranking;
declare const index_RankingAlt: typeof RankingAlt;
declare const index_Receipt: typeof Receipt;
declare const index_Receipt1: typeof Receipt1;
declare const index_Receipt2: typeof Receipt2;
declare const index_Receipt21: typeof Receipt21;
declare const index_ReceiptAdd: typeof ReceiptAdd;
declare const index_ReceiptDiscount: typeof ReceiptDiscount;
declare const index_ReceiptDisscount: typeof ReceiptDisscount;
declare const index_ReceiptEdit: typeof ReceiptEdit;
declare const index_ReceiptItem: typeof ReceiptItem;
declare const index_ReceiptMinus: typeof ReceiptMinus;
declare const index_ReceiptSearch: typeof ReceiptSearch;
declare const index_ReceiptSquare: typeof ReceiptSquare;
declare const index_ReceiptText: typeof ReceiptText;
declare const index_ReceiveSquare: typeof ReceiveSquare;
declare const index_ReceiveSquare2: typeof ReceiveSquare2;
declare const index_Received: typeof Received;
declare const index_Reciept: typeof Reciept;
declare const index_RecordCircle: typeof RecordCircle;
declare const index_RecoveryConvert: typeof RecoveryConvert;
declare const index_Recycle: typeof Recycle;
declare const index_Redo: typeof Redo;
declare const index_RedoAlt: typeof RedoAlt;
declare const index_Refresh: typeof Refresh;
declare const index_Refresh2: typeof Refresh2;
declare const index_RefreshCircle: typeof RefreshCircle;
declare const index_RefreshLeftSquare: typeof RefreshLeftSquare;
declare const index_RefreshRightSquare: typeof RefreshRightSquare;
declare const index_RefreshSquare2: typeof RefreshSquare2;
declare const index_Repeat: typeof Repeat;
declare const index_RepeatCircle: typeof RepeatCircle;
declare const index_RepeateMusic: typeof RepeateMusic;
declare const index_RepeateOne: typeof RepeateOne;
declare const index_Replace: typeof Replace;
declare const index_Reserve: typeof Reserve;
declare const index_RotateLeft: typeof RotateLeft;
declare const index_RotateLeftAlt: typeof RotateLeftAlt;
declare const index_RotateRight: typeof RotateRight;
declare const index_RotateRightAlt: typeof RotateRightAlt;
declare const index_RouteSquare: typeof RouteSquare;
declare const index_Routing: typeof Routing;
declare const index_Routing2: typeof Routing2;
declare const index_RowHorizontal: typeof RowHorizontal;
declare const index_RowVertical: typeof RowVertical;
declare const index_Ruler: typeof Ruler;
declare const index_RulerPen: typeof RulerPen;
declare const index_SafeHome: typeof SafeHome;
declare const index_Sagittarius: typeof Sagittarius;
declare const index_Save: typeof Save;
declare const index_Save2: typeof Save2;
declare const index_SaveAdd: typeof SaveAdd;
declare const index_SaveMinus: typeof SaveMinus;
declare const index_SaveRemove: typeof SaveRemove;
declare const index_Scan: typeof Scan;
declare const index_ScanBarcode: typeof ScanBarcode;
declare const index_Scanner: typeof Scanner;
declare const index_Scanning: typeof Scanning;
declare const index_Scissor: typeof Scissor;
declare const index_ScissorAlt: typeof ScissorAlt;
declare const index_Screenmirroring: typeof Screenmirroring;
declare const index_Scroll: typeof Scroll;
declare const index_Search: typeof Search;
declare const index_SearchFavorite: typeof SearchFavorite;
declare const index_SearchFavorite1: typeof SearchFavorite1;
declare const index_SearchNormal: typeof SearchNormal;
declare const index_SearchNormal1: typeof SearchNormal1;
declare const index_SearchStatus: typeof SearchStatus;
declare const index_SearchStatus1: typeof SearchStatus1;
declare const index_SearchZoomIn: typeof SearchZoomIn;
declare const index_SearchZoomIn1: typeof SearchZoomIn1;
declare const index_SearchZoomOut: typeof SearchZoomOut;
declare const index_SearchZoomOut1: typeof SearchZoomOut1;
declare const index_Security: typeof Security;
declare const index_SecurityCard: typeof SecurityCard;
declare const index_SecuritySafe: typeof SecuritySafe;
declare const index_SecurityTime: typeof SecurityTime;
declare const index_SecurityUser: typeof SecurityUser;
declare const index_Send: typeof Send;
declare const index_Send2: typeof Send2;
declare const index_SendAlt: typeof SendAlt;
declare const index_SendSqaure2: typeof SendSqaure2;
declare const index_SendSquare: typeof SendSquare;
declare const index_SendSubmitSuccess: typeof SendSubmitSuccess;
declare const index_Setting: typeof Setting;
declare const index_Setting2: typeof Setting2;
declare const index_Setting3: typeof Setting3;
declare const index_Setting4: typeof Setting4;
declare const index_Setting5: typeof Setting5;
declare const index_Settings: typeof Settings;
declare const index_SettingsAlt: typeof SettingsAlt;
declare const index_Shapes: typeof Shapes;
declare const index_Shapes2: typeof Shapes2;
declare const index_Share: typeof Share;
declare const index_ShareAlt: typeof ShareAlt;
declare const index_Sheet: typeof Sheet;
declare const index_Shield: typeof Shield;
declare const index_ShieldCross: typeof ShieldCross;
declare const index_ShieldSearch: typeof ShieldSearch;
declare const index_ShieldSecurity: typeof ShieldSecurity;
declare const index_ShieldSlash: typeof ShieldSlash;
declare const index_ShieldTick: typeof ShieldTick;
declare const index_Ship: typeof Ship;
declare const index_Shop: typeof Shop;
declare const index_ShopAdd: typeof ShopAdd;
declare const index_ShopRemove: typeof ShopRemove;
declare const index_ShoppingBag: typeof ShoppingBag;
declare const index_ShoppingCart: typeof ShoppingCart;
declare const index_SiacoinSc: typeof SiacoinSc;
declare const index_SidebarBottom: typeof SidebarBottom;
declare const index_SidebarLeft: typeof SidebarLeft;
declare const index_SidebarRight: typeof SidebarRight;
declare const index_SidebarTop: typeof SidebarTop;
declare const index_Signpost: typeof Signpost;
declare const index_Simcard: typeof Simcard;
declare const index_Simcard1: typeof Simcard1;
declare const index_Simcard2: typeof Simcard2;
declare const index_Size: typeof Size;
declare const index_Slack: typeof Slack;
declare const index_Slash: typeof Slash;
declare const index_Slider: typeof Slider;
declare const index_SliderHorizontal: typeof SliderHorizontal;
declare const index_SliderHorizontal1: typeof SliderHorizontal1;
declare const index_SliderVertical: typeof SliderVertical;
declare const index_SliderVertical1: typeof SliderVertical1;
declare const index_Smallcaps: typeof Smallcaps;
declare const index_SmartCar: typeof SmartCar;
declare const index_SmartHome: typeof SmartHome;
declare const index_Smileys: typeof Smileys;
declare const index_Snapchat: typeof Snapchat;
declare const index_SoapShampoo: typeof SoapShampoo;
declare const index_SolanaSol: typeof SolanaSol;
declare const index_Sort: typeof Sort;
declare const index_Sound: typeof Sound;
declare const index_Speaker: typeof Speaker;
declare const index_Speedometer: typeof Speedometer;
declare const index_Spotify: typeof Spotify;
declare const index_StacksStx: typeof StacksStx;
declare const index_Star: typeof Star;
declare const index_Star1: typeof Star1;
declare const index_StarAlt: typeof StarAlt;
declare const index_StarSlash: typeof StarSlash;
declare const index_Status: typeof Status;
declare const index_StatusUp: typeof StatusUp;
declare const index_StellarXlm: typeof StellarXlm;
declare const index_Sticker: typeof Sticker;
declare const index_Stickynote: typeof Stickynote;
declare const index_Stop: typeof Stop;
declare const index_StopCircle: typeof StopCircle;
declare const index_Store: typeof Store;
declare const index_Story: typeof Story;
declare const index_Strongbox: typeof Strongbox;
declare const index_Strongbox2: typeof Strongbox2;
declare const index_Subtitle: typeof Subtitle;
declare const index_Sun: typeof Sun;
declare const index_Sun1: typeof Sun1;
declare const index_SunFog: typeof SunFog;
declare const index_Tag: typeof Tag;
declare const index_Tag2: typeof Tag2;
declare const index_TagCross: typeof TagCross;
declare const index_TagRight: typeof TagRight;
declare const index_TagUser: typeof TagUser;
declare const index_Task: typeof Task;
declare const index_TaskSquare: typeof TaskSquare;
declare const index_Teacher: typeof Teacher;
declare const index_TenxPay: typeof TenxPay;
declare const index_TetherUsdt: typeof TetherUsdt;
declare const index_Text: typeof Text;
declare const index_TextBlock: typeof TextBlock;
declare const index_TextBold: typeof TextBold;
declare const index_TextItalic: typeof TextItalic;
declare const index_TextUnderline: typeof TextUnderline;
declare const index_TextalignCenter: typeof TextalignCenter;
declare const index_TextalignJustifycenter: typeof TextalignJustifycenter;
declare const index_TextalignJustifyleft: typeof TextalignJustifyleft;
declare const index_TextalignJustifyright: typeof TextalignJustifyright;
declare const index_TextalignLeft: typeof TextalignLeft;
declare const index_TextalignRight: typeof TextalignRight;
declare const index_TheGraphGrt: typeof TheGraphGrt;
declare const index_ThetaTheta: typeof ThetaTheta;
declare const index_ThorchainRune: typeof ThorchainRune;
declare const index_ThreeFull: typeof ThreeFull;
declare const index_ThreeSquare: typeof ThreeSquare;
declare const index_ThreedCubeScan: typeof ThreedCubeScan;
declare const index_ThreedRotate: typeof ThreedRotate;
declare const index_ThreedSquare: typeof ThreedSquare;
declare const index_Threedcube: typeof Threedcube;
declare const index_ThumpDown: typeof ThumpDown;
declare const index_ThumpUp: typeof ThumpUp;
declare const index_TickCircle: typeof TickCircle;
declare const index_TickSquare: typeof TickSquare;
declare const index_Ticket: typeof Ticket;
declare const index_Ticket2: typeof Ticket2;
declare const index_TicketDiscount: typeof TicketDiscount;
declare const index_TicketExpired: typeof TicketExpired;
declare const index_TicketStar: typeof TicketStar;
declare const index_Time: typeof Time;
declare const index_Timer: typeof Timer;
declare const index_Timer1: typeof Timer1;
declare const index_TimerPause: typeof TimerPause;
declare const index_TimerStart: typeof TimerStart;
declare const index_ToggleOff: typeof ToggleOff;
declare const index_ToggleOffCircle: typeof ToggleOffCircle;
declare const index_ToggleOn: typeof ToggleOn;
declare const index_ToggleOnCircle: typeof ToggleOnCircle;
declare const index_ToothbrushToothpaste: typeof ToothbrushToothpaste;
declare const index_Trade: typeof Trade;
declare const index_TransactionMinus: typeof TransactionMinus;
declare const index_Translate: typeof Translate;
declare const index_Trash: typeof Trash;
declare const index_Tree: typeof Tree;
declare const index_Trello: typeof Trello;
declare const index_TrendDown: typeof TrendDown;
declare const index_TrendUp: typeof TrendUp;
declare const index_Triangle: typeof Triangle;
declare const index_TriangleAlt: typeof TriangleAlt;
declare const index_TrontronTrx: typeof TrontronTrx;
declare const index_Truck: typeof Truck;
declare const index_TruckFast: typeof TruckFast;
declare const index_TruckRemove: typeof TruckRemove;
declare const index_TruckTick: typeof TruckTick;
declare const index_TruckTime: typeof TruckTime;
declare const index_Trush: typeof Trush;
declare const index_TrushSquare: typeof TrushSquare;
declare const index_TwentyFourSupport: typeof TwentyFourSupport;
declare const index_Twitch: typeof Twitch;
declare const index_Ui8: typeof Ui8;
declare const index_Undo: typeof Undo;
declare const index_Unlimited: typeof Unlimited;
declare const index_Unlock: typeof Unlock;
declare const index_UsdCoinUsdc: typeof UsdCoinUsdc;
declare const index_User: typeof User;
declare const index_UserAdd: typeof UserAdd;
declare const index_UserCirlceAdd: typeof UserCirlceAdd;
declare const index_UserEdit: typeof UserEdit;
declare const index_UserMinus: typeof UserMinus;
declare const index_UserOctagon: typeof UserOctagon;
declare const index_UserRemove: typeof UserRemove;
declare const index_UserSearch: typeof UserSearch;
declare const index_UserSquare: typeof UserSquare;
declare const index_UserTag: typeof UserTag;
declare const index_UserTick: typeof UserTick;
declare const index_VelasVlx: typeof VelasVlx;
declare const index_Verify: typeof Verify;
declare const index_Vespa: typeof Vespa;
declare const index_VibeVibe: typeof VibeVibe;
declare const index_Video: typeof Video;
declare const index_VideoAdd: typeof VideoAdd;
declare const index_VideoCallCamera: typeof VideoCallCamera;
declare const index_VideoCircle: typeof VideoCircle;
declare const index_VideoHorizontal: typeof VideoHorizontal;
declare const index_VideoOctagon: typeof VideoOctagon;
declare const index_VideoPlay: typeof VideoPlay;
declare const index_VideoRemove: typeof VideoRemove;
declare const index_VideoSlash: typeof VideoSlash;
declare const index_VideoSquare: typeof VideoSquare;
declare const index_VideoTick: typeof VideoTick;
declare const index_VideoTime: typeof VideoTime;
declare const index_VideoVertical: typeof VideoVertical;
declare const index_VillaHome: typeof VillaHome;
declare const index_VoiceCricle: typeof VoiceCricle;
declare const index_VoiceSquare: typeof VoiceSquare;
declare const index_VolumeCross: typeof VolumeCross;
declare const index_VolumeHigh: typeof VolumeHigh;
declare const index_VolumeLow: typeof VolumeLow;
declare const index_VolumeLow1: typeof VolumeLow1;
declare const index_VolumeMute: typeof VolumeMute;
declare const index_VolumeSlash: typeof VolumeSlash;
declare const index_VolumeUp: typeof VolumeUp;
declare const index_Vouchers: typeof Vouchers;
declare const index_Vuesax: typeof Vuesax;
declare const index_Wallet: typeof Wallet;
declare const index_Wallet1: typeof Wallet1;
declare const index_Wallet2: typeof Wallet2;
declare const index_Wallet3: typeof Wallet3;
declare const index_WalletAdd: typeof WalletAdd;
declare const index_WalletAdd1: typeof WalletAdd1;
declare const index_WalletCheck: typeof WalletCheck;
declare const index_WalletMinus: typeof WalletMinus;
declare const index_WalletMoney: typeof WalletMoney;
declare const index_WalletRemove: typeof WalletRemove;
declare const index_WalletSearch: typeof WalletSearch;
declare const index_WanchainWan: typeof WanchainWan;
declare const index_WanchainWan1: typeof WanchainWan1;
declare const index_Warning2: typeof Warning2;
declare const index_Watch: typeof Watch;
declare const index_WatchStatus: typeof WatchStatus;
declare const index_Weight: typeof Weight;
declare const index_Whatsapp: typeof Whatsapp;
declare const index_Wifi: typeof Wifi;
declare const index_WifiAlt: typeof WifiAlt;
declare const index_WifiSquare: typeof WifiSquare;
declare const index_Wind: typeof Wind;
declare const index_Wind2: typeof Wind2;
declare const index_Windows: typeof Windows;
declare const index_WingWing: typeof WingWing;
declare const index_Woman: typeof Woman;
declare const index_Wristwatch: typeof Wristwatch;
declare const index_Xd: typeof Xd;
declare const index_Xiaomi: typeof Xiaomi;
declare const index_XrpXrp: typeof XrpXrp;
declare const index_Youtube: typeof Youtube;
declare const index_ZelZel: typeof ZelZel;
declare const index_Zoom: typeof Zoom;
declare namespace index {
  export {
    index_Aave as Aave,
    index_Activity as Activity,
    index_Add as Add,
    index_AddCircle as AddCircle,
    index_AddSquare as AddSquare,
    index_Additem as Additem,
    index_Airdrop as Airdrop,
    index_Airplane as Airplane,
    index_AirplaneSquare as AirplaneSquare,
    index_Airpod as Airpod,
    index_Airpods as Airpods,
    index_Alarm as Alarm,
    index_AlignBottom as AlignBottom,
    index_AlignHorizontally as AlignHorizontally,
    index_AlignLeft as AlignLeft,
    index_AlignRight as AlignRight,
    index_AlignVertically as AlignVertically,
    index_Alternative as Alternative,
    index_Amount as Amount,
    index_Android as Android,
    index_AnkrAnkr as AnkrAnkr,
    index_ApartmentHome as ApartmentHome,
    index_Apple as Apple,
    index_Aquarius as Aquarius,
    index_Archive as Archive,
    index_ArchiveAdd as ArchiveAdd,
    index_ArchiveAlt as ArchiveAlt,
    index_ArchiveBook as ArchiveBook,
    index_ArchiveMinus as ArchiveMinus,
    index_ArchiveSlash as ArchiveSlash,
    index_ArchiveTick as ArchiveTick,
    index_ArrangeCircle as ArrangeCircle,
    index_ArrangeCircle2 as ArrangeCircle2,
    index_ArrangeSquare as ArrangeSquare,
    index_ArrangeSquare2 as ArrangeSquare2,
    index_Arrow as Arrow,
    index_Arrow2 as Arrow2,
    index_Arrow3 as Arrow3,
    index_ArrowBottom as ArrowBottom,
    index_ArrowCircleDown as ArrowCircleDown,
    index_ArrowCircleLeft as ArrowCircleLeft,
    index_ArrowCircleRight as ArrowCircleRight,
    index_ArrowDown as ArrowDown,
    index_ArrowDown1 as ArrowDown1,
    index_ArrowDown2 as ArrowDown2,
    index_ArrowLeft as ArrowLeft,
    index_ArrowLeft1 as ArrowLeft1,
    index_ArrowLeft2 as ArrowLeft2,
    index_ArrowLeft3 as ArrowLeft3,
    index_ArrowRight as ArrowRight,
    index_ArrowRight1 as ArrowRight1,
    index_ArrowRight2 as ArrowRight2,
    index_ArrowRight3 as ArrowRight3,
    index_ArrowSquare as ArrowSquare,
    index_ArrowSquareDown as ArrowSquareDown,
    index_ArrowSquareLeft as ArrowSquareLeft,
    index_ArrowSquareRight as ArrowSquareRight,
    index_ArrowSquareUp as ArrowSquareUp,
    index_ArrowSwapHorizontal as ArrowSwapHorizontal,
    index_ArrowUp as ArrowUp,
    index_ArrowUp1 as ArrowUp1,
    index_ArrowUp2 as ArrowUp2,
    index_ArrowUp3 as ArrowUp3,
    index_ArrowUpCircle as ArrowUpCircle,
    index_AttachCircle as AttachCircle,
    index_AttachSquare as AttachSquare,
    index_Attention as Attention,
    index_AudioSquare as AudioSquare,
    index_AugurRep as AugurRep,
    index_Autobrightness as Autobrightness,
    index_AutonioNiox as AutonioNiox,
    index_AvalancheAvax as AvalancheAvax,
    index_Award as Award,
    index_Baby as Baby,
    index_Baby2 as Baby2,
    index_BackIconsUia as BackIconsUia,
    index_BackSquare as BackSquare,
    index_Backarrow as Backarrow,
    index_Backward as Backward,
    index_Backward10Seconds as Backward10Seconds,
    index_Backward15Seconds as Backward15Seconds,
    index_Backward5Seconds as Backward5Seconds,
    index_BackwardItem as BackwardItem,
    index_Bag as Bag,
    index_Bag2 as Bag2,
    index_BagAlt as BagAlt,
    index_BagCross as BagCross,
    index_BagCross1 as BagCross1,
    index_BagHappy as BagHappy,
    index_BagTick as BagTick,
    index_BagTick2 as BagTick2,
    index_BagTimer as BagTimer,
    index_Balance as Balance,
    index_Bank as Bank,
    index_Barcode as Barcode,
    index_BatteryCharging as BatteryCharging,
    index_BatteryDisable as BatteryDisable,
    index_BatteryEmpty as BatteryEmpty,
    index_BatteryEmpty1 as BatteryEmpty1,
    index_BatteryFull as BatteryFull,
    index_Be as Be,
    index_Bell as Bell,
    index_Bezier as Bezier,
    index_Bicycle as Bicycle,
    index_Bicycle2 as Bicycle2,
    index_Bill as Bill,
    index_BinanceCoinBnb as BinanceCoinBnb,
    index_BinanceUsdBusd as BinanceUsdBusd,
    index_Birthday as Birthday,
    index_BitcoinBtc as BitcoinBtc,
    index_BitcoinCard as BitcoinCard,
    index_BitcoinConvert as BitcoinConvert,
    index_BitcoinRefresh as BitcoinRefresh,
    index_Blend as Blend,
    index_Blend2 as Blend2,
    index_Blogger as Blogger,
    index_Bluetooth as Bluetooth,
    index_Bluetooth2 as Bluetooth2,
    index_BluetoothCircle as BluetoothCircle,
    index_BluetoothRectangle as BluetoothRectangle,
    index_Blur as Blur,
    index_Book as Book,
    index_Book1 as Book1,
    index_BookSaved as BookSaved,
    index_BookSquare as BookSquare,
    index_Bookmark as Bookmark,
    index_Bookmark2 as Bookmark2,
    index_Bootsrap as Bootsrap,
    index_Box as Box,
    index_Box1 as Box1,
    index_Box2 as Box2,
    index_BoxAdd as BoxAdd,
    index_BoxAlt as BoxAlt,
    index_BoxRemove as BoxRemove,
    index_BoxSearch as BoxSearch,
    index_BoxTick as BoxTick,
    index_BoxTime as BoxTime,
    index_Briefcase as Briefcase,
    index_BrifecaseCross as BrifecaseCross,
    index_BrifecaseTick as BrifecaseTick,
    index_BrifecaseTimer as BrifecaseTimer,
    index_Broom as Broom,
    index_Brush as Brush,
    index_Brush1 as Brush1,
    index_Brush2 as Brush2,
    index_Brush3 as Brush3,
    index_BrushAlt as BrushAlt,
    index_Bubble as Bubble,
    index_BucketCircle as BucketCircle,
    index_BucketSquare as BucketSquare,
    index_Building as Building,
    index_Building3 as Building3,
    index_Building4 as Building4,
    index_Buildings as Buildings,
    index_Buildings2 as Buildings2,
    index_Buliding as Buliding,
    index_Bus as Bus,
    index_BusinessCompanyBuilding as BusinessCompanyBuilding,
    index_BuyCrypto as BuyCrypto,
    index_Cake as Cake,
    index_Calculator as Calculator,
    index_Calendar as Calendar,
    index_Calendar1 as Calendar1,
    index_Calendar2 as Calendar2,
    index_CalendarAdd as CalendarAdd,
    index_CalendarCircle as CalendarCircle,
    index_CalendarEdit as CalendarEdit,
    index_CalendarRemove as CalendarRemove,
    index_CalendarSearch as CalendarSearch,
    index_CalendarTick as CalendarTick,
    index_CalenderTimeAppointment as CalenderTimeAppointment,
    index_Call as Call,
    index_CallAdd as CallAdd,
    index_CallCalling as CallCalling,
    index_CallIncoming as CallIncoming,
    index_CallOutgoing as CallOutgoing,
    index_CallReceived as CallReceived,
    index_CallSlash as CallSlash,
    index_CallcentarHelp as CallcentarHelp,
    index_Camera as Camera,
    index_CameraAlt as CameraAlt,
    index_CameraSlash as CameraSlash,
    index_Candle as Candle,
    index_Candle2 as Candle2,
    index_Car as Car,
    index_Card as Card,
    index_CardAdd as CardAdd,
    index_CardCoin as CardCoin,
    index_CardEdit as CardEdit,
    index_CardPos as CardPos,
    index_CardReceive as CardReceive,
    index_CardRemove as CardRemove,
    index_CardRemove1 as CardRemove1,
    index_CardSend as CardSend,
    index_CardSlash as CardSlash,
    index_CardTick as CardTick,
    index_CardTick1 as CardTick1,
    index_CardanoAda as CardanoAda,
    index_Cards as Cards,
    index_Cart as Cart,
    index_Cash as Cash,
    index_Category as Category,
    index_Category2 as Category2,
    index_CategoryDashboard as CategoryDashboard,
    index_Cd as Cd,
    index_CeloCelo as CeloCelo,
    index_CelsiusCel as CelsiusCel,
    index_ChainlinkLink as ChainlinkLink,
    index_Chart as Chart,
    index_Chart1 as Chart1,
    index_Chart2 as Chart2,
    index_Chart21 as Chart21,
    index_ChartAlt as ChartAlt,
    index_ChartAlt2 as ChartAlt2,
    index_ChartSquare as ChartSquare,
    index_ChartSuccess as ChartSuccess,
    index_Chat as Chat,
    index_Check as Check,
    index_Checkbox as Checkbox,
    index_Checked as Checked,
    index_Chrome as Chrome,
    index_CivicCvc as CivicCvc,
    index_Clipboard as Clipboard,
    index_ClipboardClose as ClipboardClose,
    index_ClipboardExport as ClipboardExport,
    index_ClipboardImport as ClipboardImport,
    index_ClipboardText as ClipboardText,
    index_ClipboardTick as ClipboardTick,
    index_Clock as Clock,
    index_Close as Close,
    index_CloseCircle as CloseCircle,
    index_CloseNa as CloseNa,
    index_CloseSquare as CloseSquare,
    index_Cloud as Cloud,
    index_CloudAdd as CloudAdd,
    index_CloudChange as CloudChange,
    index_CloudConnection as CloudConnection,
    index_CloudCross as CloudCross,
    index_CloudDrizzle as CloudDrizzle,
    index_CloudFog as CloudFog,
    index_CloudLightning as CloudLightning,
    index_CloudMinus as CloudMinus,
    index_CloudNotif as CloudNotif,
    index_CloudPlus as CloudPlus,
    index_CloudRemove as CloudRemove,
    index_CloudSnow as CloudSnow,
    index_CloudSunny as CloudSunny,
    index_CloudUploadDownload as CloudUploadDownload,
    index_Code as Code,
    index_Code1 as Code1,
    index_CodeCircle as CodeCircle,
    index_Coffee as Coffee,
    index_Coin as Coin,
    index_Coin1 as Coin1,
    index_ColorSwatch as ColorSwatch,
    index_Colorfilter as Colorfilter,
    index_ColorsSquare as ColorsSquare,
    index_Command as Command,
    index_CommandSquare as CommandSquare,
    index_Component as Component,
    index_Compound as Compound,
    index_Computing as Computing,
    index_Convert as Convert,
    index_ConvertThreeDCube as ConvertThreeDCube,
    index_Convertshape as Convertshape,
    index_Convertshape2 as Convertshape2,
    index_Copy as Copy,
    index_CopyAlt as CopyAlt,
    index_CopySuccess as CopySuccess,
    index_Copyright as Copyright,
    index_Courthouse as Courthouse,
    index_Cpu as Cpu,
    index_CpuCharge as CpuCharge,
    index_CpuSetting as CpuSetting,
    index_CreativeCommons as CreativeCommons,
    index_CreditCard as CreditCard,
    index_CreditCardPlus as CreditCardPlus,
    index_Crop as Crop,
    index_Crown as Crown,
    index_Crown1 as Crown1,
    index_Cup as Cup,
    index_CupAlt as CupAlt,
    index_Cursor as Cursor,
    index_DaiDai as DaiDai,
    index_Danger as Danger,
    index_DashDash as DashDash,
    index_Data as Data,
    index_Data2 as Data2,
    index_DecredDcr as DecredDcr,
    index_Deliverybox as Deliverybox,
    index_DentDent as DentDent,
    index_Designtools as Designtools,
    index_Devices as Devices,
    index_DevicesAlt as DevicesAlt,
    index_Diagram as Diagram,
    index_Diamonds as Diamonds,
    index_DirectDown as DirectDown,
    index_DirectLeft as DirectLeft,
    index_DirectRight as DirectRight,
    index_DirectUp as DirectUp,
    index_DiscountCircle as DiscountCircle,
    index_DiscountShape as DiscountShape,
    index_Discover as Discover,
    index_DiscoverAlt as DiscoverAlt,
    index_Dislike as Dislike,
    index_DoctorEarphone as DoctorEarphone,
    index_Document as Document,
    index_DocumentAlt as DocumentAlt,
    index_DocumentCloud as DocumentCloud,
    index_DocumentCode as DocumentCode,
    index_DocumentCode2 as DocumentCode2,
    index_DocumentCopy as DocumentCopy,
    index_DocumentDownload as DocumentDownload,
    index_DocumentFavorite as DocumentFavorite,
    index_DocumentFilter as DocumentFilter,
    index_DocumentForward as DocumentForward,
    index_DocumentLike as DocumentLike,
    index_DocumentPrevious as DocumentPrevious,
    index_DocumentSketch as DocumentSketch,
    index_DocumentText as DocumentText,
    index_DocumentText1 as DocumentText1,
    index_DocumentUpload as DocumentUpload,
    index_DollarCircle as DollarCircle,
    index_DollarSquare as DollarSquare,
    index_DotsMenu as DotsMenu,
    index_Dribbble as Dribbble,
    index_Driver as Driver,
    index_Driver2 as Driver2,
    index_DriverRefresh as DriverRefresh,
    index_Driving as Driving,
    index_Drop as Drop,
    index_Dropbox as Dropbox,
    index_EPrescriptions as EPrescriptions,
    index_EPrescriptions2 as EPrescriptions2,
    index_Edit as Edit,
    index_Edit2 as Edit2,
    index_EditAlt as EditAlt,
    index_EditPen as EditPen,
    index_EducareEkt as EducareEkt,
    index_Electricity as Electricity,
    index_Element1 as Element1,
    index_Element2 as Element2,
    index_Element3 as Element3,
    index_Element4 as Element4,
    index_ElementEqual as ElementEqual,
    index_ElementPlus as ElementPlus,
    index_Email as Email,
    index_EmercoinEmc as EmercoinEmc,
    index_EmojiHappy as EmojiHappy,
    index_EmojiNormal as EmojiNormal,
    index_EmojiSad as EmojiSad,
    index_EmptyWallet as EmptyWallet,
    index_EmptyWalletAdd as EmptyWalletAdd,
    index_EmptyWalletChange as EmptyWalletChange,
    index_EmptyWalletRemove as EmptyWalletRemove,
    index_EmptyWalletTick as EmptyWalletTick,
    index_EmptyWalletTime as EmptyWalletTime,
    index_EnjinCoinEnj as EnjinCoinEnj,
    index_Enter as Enter,
    index_EosEos as EosEos,
    index_Equal as Equal,
    index_Eraser as Eraser,
    index_EraserAlt as EraserAlt,
    index_Erlenmeyer as Erlenmeyer,
    index_EthereumClassicEtc as EthereumClassicEtc,
    index_EthereumEth as EthereumEth,
    index_Exchange as Exchange,
    index_Exclamation as Exclamation,
    index_Export as Export,
    index_Export1 as Export1,
    index_Export2 as Export2,
    index_Export3 as Export3,
    index_ExternalDrive as ExternalDrive,
    index_Eye as Eye,
    index_EyeSlash as EyeSlash,
    index_Facebook as Facebook,
    index_Faq as Faq,
    index_Fatrows as Fatrows,
    index_FavoriteChart as FavoriteChart,
    index_FemaleWomenGender as FemaleWomenGender,
    index_Figma as Figma,
    index_Figma1 as Figma1,
    index_Filter as Filter,
    index_Filter2 as Filter2,
    index_FilterAdd as FilterAdd,
    index_FilterAlt as FilterAlt,
    index_FilterEdit as FilterEdit,
    index_FilterRemove as FilterRemove,
    index_FilterSearch as FilterSearch,
    index_FilterSquare as FilterSquare,
    index_FilterTick as FilterTick,
    index_FingerCricle as FingerCricle,
    index_FingerScan as FingerScan,
    index_Firstline as Firstline,
    index_Flag as Flag,
    index_Flag2 as Flag2,
    index_Flash as Flash,
    index_FlashAlt as FlashAlt,
    index_FlashCircle as FlashCircle,
    index_FlashCircleAlt as FlashCircleAlt,
    index_FlashSlash as FlashSlash,
    index_Folder as Folder,
    index_Folder2 as Folder2,
    index_FolderAdd as FolderAdd,
    index_FolderCloud as FolderCloud,
    index_FolderConnection as FolderConnection,
    index_FolderCross as FolderCross,
    index_FolderFavorite as FolderFavorite,
    index_FolderMinus as FolderMinus,
    index_FolderOpen as FolderOpen,
    index_FormatCircle as FormatCircle,
    index_FormatSquare as FormatSquare,
    index_Forward as Forward,
    index_Forward10Seconds as Forward10Seconds,
    index_Forward15Seconds as Forward15Seconds,
    index_Forward5Seconds as Forward5Seconds,
    index_ForwardItem as ForwardItem,
    index_ForwardSquare as ForwardSquare,
    index_Frame as Frame,
    index_Frame1 as Frame1,
    index_Frame2 as Frame2,
    index_FrameAlt as FrameAlt,
    index_Framer as Framer,
    index_FtxTokenFtt as FtxTokenFtt,
    index_FullRedo as FullRedo,
    index_Gallery as Gallery,
    index_GalleryAdd as GalleryAdd,
    index_GalleryEdit as GalleryEdit,
    index_GalleryExport as GalleryExport,
    index_GalleryFavorite as GalleryFavorite,
    index_GalleryImport as GalleryImport,
    index_GalleryRemove as GalleryRemove,
    index_GallerySlash as GallerySlash,
    index_GalleryTick as GalleryTick,
    index_Game as Game,
    index_Gameboy as Gameboy,
    index_GasStation as GasStation,
    index_Gemini as Gemini,
    index_Gemini2 as Gemini2,
    index_Gender as Gender,
    index_Gender2Comp as Gender2Comp,
    index_Gender2Female as Gender2Female,
    index_Gender2Man as Gender2Man,
    index_GenderChange as GenderChange,
    index_GenderComp as GenderComp,
    index_GenderFaceMan as GenderFaceMan,
    index_GenderFaceWoman as GenderFaceWoman,
    index_Ghost as Ghost,
    index_Gift as Gift,
    index_Glass as Glass,
    index_Global as Global,
    index_GlobalCountries as GlobalCountries,
    index_GlobalEdit as GlobalEdit,
    index_GlobalRefresh as GlobalRefresh,
    index_GlobalSearch as GlobalSearch,
    index_Google as Google,
    index_Google1 as Google1,
    index_GooglePlay as GooglePlay,
    index_Gps as Gps,
    index_GpsSlash as GpsSlash,
    index_Grammerly as Grammerly,
    index_Graph as Graph,
    index_Grid1 as Grid1,
    index_Grid2 as Grid2,
    index_Grid3 as Grid3,
    index_Grid4 as Grid4,
    index_Grid5 as Grid5,
    index_Grid6 as Grid6,
    index_Grid7 as Grid7,
    index_Grid8 as Grid8,
    index_Grid9 as Grid9,
    index_GridEdit as GridEdit,
    index_GridEraser as GridEraser,
    index_GridLock as GridLock,
    index_Happyemoji as Happyemoji,
    index_HarmonyOne as HarmonyOne,
    index_Hashtag as Hashtag,
    index_HashtagDown as HashtagDown,
    index_HashtagUp as HashtagUp,
    index_Headphone as Headphone,
    index_Headphones as Headphones,
    index_Health as Health,
    index_Heart as Heart,
    index_HeartAdd as HeartAdd,
    index_HeartAlt as HeartAlt,
    index_HeartCircle as HeartCircle,
    index_HeartEdit as HeartEdit,
    index_HeartRemove as HeartRemove,
    index_HeartSearch as HeartSearch,
    index_HeartSlash as HeartSlash,
    index_HeartTick as HeartTick,
    index_HederaHashgraphHbar as HederaHashgraphHbar,
    index_Help as Help,
    index_HexHex as HexHex,
    index_Hierarchy as Hierarchy,
    index_Hierarchy2 as Hierarchy2,
    index_Hierarchy3 as Hierarchy3,
    index_HierarchySquare as HierarchySquare,
    index_HierarchySquare2 as HierarchySquare2,
    index_HierarchySquare3 as HierarchySquare3,
    index_Home as Home,
    index_Home2 as Home2,
    index_HomeAlt as HomeAlt,
    index_HomeHashtag as HomeHashtag,
    index_HomeTrendDown as HomeTrendDown,
    index_HomeTrendUp as HomeTrendUp,
    index_HomeWifi as HomeWifi,
    index_Hospital as Hospital,
    index_HospitalAlt as HospitalAlt,
    index_House as House,
    index_House2 as House2,
    index_Html3 as Html3,
    index_Html5 as Html5,
    index_HuobiTokenHt as HuobiTokenHt,
    index_IconIcx as IconIcx,
    index_Id as Id,
    index_Illustrator as Illustrator,
    index_Image as Image,
    index_Import as Import,
    index_Import1 as Import1,
    index_Import2 as Import2,
    index_InfoCircle as InfoCircle,
    index_Information as Information,
    index_Instagram as Instagram,
    index_IostIost as IostIost,
    index_JavaScript as JavaScript,
    index_Js as Js,
    index_Judge as Judge,
    index_Kanban as Kanban,
    index_Key as Key,
    index_KeySquare as KeySquare,
    index_Keyboard as Keyboard,
    index_KeyboardOpen as KeyboardOpen,
    index_KyberNetworkKnc as KyberNetworkKnc,
    index_Lamp as Lamp,
    index_LampCharge as LampCharge,
    index_LampOn as LampOn,
    index_LampSlash as LampSlash,
    index_LanguageCircle as LanguageCircle,
    index_LanguageSquare as LanguageSquare,
    index_Languages as Languages,
    index_Layer as Layer,
    index_Level as Level,
    index_Lifebuoy as Lifebuoy,
    index_Like as Like,
    index_Like1 as Like1,
    index_LikeDislike as LikeDislike,
    index_LikeShapes as LikeShapes,
    index_LikeTag as LikeTag,
    index_Link as Link,
    index_Link1 as Link1,
    index_Link2 as Link2,
    index_Link21 as Link21,
    index_LinkAlt as LinkAlt,
    index_LinkCircle as LinkCircle,
    index_LinkSquare as LinkSquare,
    index_LitecoinLtc as LitecoinLtc,
    index_Location as Location,
    index_LocationAdd as LocationAdd,
    index_LocationAlt as LocationAlt,
    index_LocationCross as LocationCross,
    index_LocationMinus as LocationMinus,
    index_LocationSlash as LocationSlash,
    index_LocationTarget as LocationTarget,
    index_LocationTick as LocationTick,
    index_Lock as Lock,
    index_Lock1 as Lock1,
    index_LockCircle as LockCircle,
    index_LockPassword as LockPassword,
    index_LockSlash as LockSlash,
    index_Login as Login,
    index_Login1 as Login1,
    index_Logout as Logout,
    index_Logout1 as Logout1,
    index_LogoutAlt as LogoutAlt,
    index_Lovely as Lovely,
    index_LowWifi as LowWifi,
    index_Machine as Machine,
    index_MagicStar as MagicStar,
    index_Magicpen as Magicpen,
    index_MainComponent as MainComponent,
    index_MakerMkr as MakerMkr,
    index_Makeup as Makeup,
    index_MaleManGender as MaleManGender,
    index_Man as Man,
    index_Map as Map,
    index_Map1 as Map1,
    index_MapNavigation as MapNavigation,
    index_Mask as Mask,
    index_Mask2 as Mask2,
    index_Mask3 as Mask3,
    index_MaskAlt as MaskAlt,
    index_Math as Math,
    index_Maximize as Maximize,
    index_Maximize1 as Maximize1,
    index_Maximize2 as Maximize2,
    index_Maximize3 as Maximize3,
    index_Maximize4 as Maximize4,
    index_MaximizeAlt as MaximizeAlt,
    index_MaximizeCircle as MaximizeCircle,
    index_Medal as Medal,
    index_MedalStar as MedalStar,
    index_MedicineBottle as MedicineBottle,
    index_Menu as Menu,
    index_MenuAlt as MenuAlt,
    index_MenuBoard as MenuBoard,
    index_MenuCircles as MenuCircles,
    index_Message as Message,
    index_MessageProgramming as MessageProgramming,
    index_MessageQuestion as MessageQuestion,
    index_Messenger as Messenger,
    index_Microphone as Microphone,
    index_Microphone2 as Microphone2,
    index_MicrophoneSlash as MicrophoneSlash,
    index_MicrophoneSlash1 as MicrophoneSlash1,
    index_Microscope as Microscope,
    index_Milk as Milk,
    index_MiniMusicSqaure as MiniMusicSqaure,
    index_Minus as Minus,
    index_MinusAlt as MinusAlt,
    index_MinusCirlce as MinusCirlce,
    index_MinusSquare as MinusSquare,
    index_Mirror as Mirror,
    index_MirroringScreen as MirroringScreen,
    index_Mobile as Mobile,
    index_MobileProgramming as MobileProgramming,
    index_MoneroXmr as MoneroXmr,
    index_Money as Money,
    index_Money2 as Money2,
    index_Money3 as Money3,
    index_Money4 as Money4,
    index_MoneyAdd as MoneyAdd,
    index_MoneyChange as MoneyChange,
    index_MoneyForbidden as MoneyForbidden,
    index_MoneyRecive as MoneyRecive,
    index_MoneyRemove as MoneyRemove,
    index_MoneySend as MoneySend,
    index_MoneyTick as MoneyTick,
    index_MoneyTime as MoneyTime,
    index_Moneys as Moneys,
    index_Monitor as Monitor,
    index_MonitorMobbile as MonitorMobbile,
    index_MonitorRecorder as MonitorRecorder,
    index_Moon as Moon,
    index_More as More,
    index_More2 as More2,
    index_MoreCircle as MoreCircle,
    index_MoreSquare as MoreSquare,
    index_Mouse as Mouse,
    index_MouseCircle as MouseCircle,
    index_MouseSquare as MouseSquare,
    index_Music as Music,
    index_MusicCircle as MusicCircle,
    index_MusicDashboard as MusicDashboard,
    index_MusicFilter as MusicFilter,
    index_MusicLibrary2 as MusicLibrary2,
    index_MusicPlay as MusicPlay,
    index_MusicPlaylist as MusicPlaylist,
    index_MusicSquare as MusicSquare,
    index_MusicSquareAdd as MusicSquareAdd,
    index_MusicSquareRemove as MusicSquareRemove,
    index_MusicSquareSearch as MusicSquareSearch,
    index_Musicnote as Musicnote,
    index_NebulasNas as NebulasNas,
    index_NemXem as NemXem,
    index_NexoNexo as NexoNexo,
    index_Next as Next,
    index_NoLocation as NoLocation,
    index_Not as Not,
    index_NotAlt as NotAlt,
    index_NotCoveredLocation as NotCoveredLocation,
    index_Note as Note,
    index_Note1 as Note1,
    index_Note2 as Note2,
    index_NoteAdd as NoteAdd,
    index_NoteAlt as NoteAlt,
    index_NoteFavorite as NoteFavorite,
    index_NoteRemove as NoteRemove,
    index_NoteSquare as NoteSquare,
    index_NoteText as NoteText,
    index_Notification as Notification,
    index_Notification1 as Notification1,
    index_NotificationBing as NotificationBing,
    index_NotificationCircle as NotificationCircle,
    index_NotificationFavorite as NotificationFavorite,
    index_NotificationStatus as NotificationStatus,
    index_OceanProtocolOcean as OceanProtocolOcean,
    index_Offer as Offer,
    index_OfficeBagHome as OfficeBagHome,
    index_OkbOkb as OkbOkb,
    index_OmegaCircle as OmegaCircle,
    index_OmegaSquare as OmegaSquare,
    index_OntologyOnt as OntologyOnt,
    index_Paint as Paint,
    index_Paintbucket as Paintbucket,
    index_Paperclip as Paperclip,
    index_Paperclip2 as Paperclip2,
    index_PaperclipAttach as PaperclipAttach,
    index_PasswordCheck as PasswordCheck,
    index_Path as Path,
    index_Path2 as Path2,
    index_PathSquare as PathSquare,
    index_Pause as Pause,
    index_PauseCircle as PauseCircle,
    index_Paypal as Paypal,
    index_PenAdd as PenAdd,
    index_PenClose as PenClose,
    index_PenRemove as PenRemove,
    index_PenTool as PenTool,
    index_PenTool2 as PenTool2,
    index_People as People,
    index_PercentCircle as PercentCircle,
    index_PercentageSquare as PercentageSquare,
    index_Personalcard as Personalcard,
    index_Pet as Pet,
    index_Pharagraphspacing as Pharagraphspacing,
    index_Phone as Phone,
    index_Photoshop as Photoshop,
    index_PictureFrame as PictureFrame,
    index_Play as Play,
    index_PlayAdd as PlayAdd,
    index_PlayCircle as PlayCircle,
    index_PlayCricle as PlayCricle,
    index_PlayRemove as PlayRemove,
    index_Plus as Plus,
    index_PlusSquare as PlusSquare,
    index_PolkadotDot as PolkadotDot,
    index_PolygonMatic as PolygonMatic,
    index_PolyswarmNct as PolyswarmNct,
    index_PresentionChart as PresentionChart,
    index_Previous as Previous,
    index_Printer as Printer,
    index_PrinterSlash as PrinterSlash,
    index_Profile as Profile,
    index_Profile2User as Profile2User,
    index_ProfileAdd as ProfileAdd,
    index_ProfileAlt as ProfileAlt,
    index_ProfileCircle as ProfileCircle,
    index_ProfileDelete as ProfileDelete,
    index_ProfileRemove as ProfileRemove,
    index_ProfileTick as ProfileTick,
    index_ProgrammingArrow as ProgrammingArrow,
    index_ProgrammingArrows as ProgrammingArrows,
    index_Python as Python,
    index_QrCode as QrCode,
    index_QuantQnt as QuantQnt,
    index_QuestionMark as QuestionMark,
    index_QuoteDown as QuoteDown,
    index_QuoteDownCircle as QuoteDownCircle,
    index_QuoteDownSquare as QuoteDownSquare,
    index_QuoteUp as QuoteUp,
    index_QuoteUpCircle as QuoteUpCircle,
    index_QuoteUpSquare as QuoteUpSquare,
    index_Radar as Radar,
    index_Radar2 as Radar2,
    index_RadarAlt as RadarAlt,
    index_Radio as Radio,
    index_RadioCircles as RadioCircles,
    index_Ram as Ram,
    index_Ram2 as Ram2,
    index_Ranking as Ranking,
    index_RankingAlt as RankingAlt,
    index_Receipt as Receipt,
    index_Receipt1 as Receipt1,
    index_Receipt2 as Receipt2,
    index_Receipt21 as Receipt21,
    index_ReceiptAdd as ReceiptAdd,
    index_ReceiptDiscount as ReceiptDiscount,
    index_ReceiptDisscount as ReceiptDisscount,
    index_ReceiptEdit as ReceiptEdit,
    index_ReceiptItem as ReceiptItem,
    index_ReceiptMinus as ReceiptMinus,
    index_ReceiptSearch as ReceiptSearch,
    index_ReceiptSquare as ReceiptSquare,
    index_ReceiptText as ReceiptText,
    index_ReceiveSquare as ReceiveSquare,
    index_ReceiveSquare2 as ReceiveSquare2,
    index_Received as Received,
    index_Reciept as Reciept,
    Record$1 as Record,
    index_RecordCircle as RecordCircle,
    index_RecoveryConvert as RecoveryConvert,
    index_Recycle as Recycle,
    index_Redo as Redo,
    index_RedoAlt as RedoAlt,
    index_Refresh as Refresh,
    index_Refresh2 as Refresh2,
    index_RefreshCircle as RefreshCircle,
    index_RefreshLeftSquare as RefreshLeftSquare,
    index_RefreshRightSquare as RefreshRightSquare,
    index_RefreshSquare2 as RefreshSquare2,
    index_Repeat as Repeat,
    index_RepeatCircle as RepeatCircle,
    index_RepeateMusic as RepeateMusic,
    index_RepeateOne as RepeateOne,
    index_Replace as Replace,
    index_Reserve as Reserve,
    index_RotateLeft as RotateLeft,
    index_RotateLeftAlt as RotateLeftAlt,
    index_RotateRight as RotateRight,
    index_RotateRightAlt as RotateRightAlt,
    index_RouteSquare as RouteSquare,
    index_Routing as Routing,
    index_Routing2 as Routing2,
    index_RowHorizontal as RowHorizontal,
    index_RowVertical as RowVertical,
    index_Ruler as Ruler,
    index_RulerPen as RulerPen,
    index_SafeHome as SafeHome,
    index_Sagittarius as Sagittarius,
    index_Save as Save,
    index_Save2 as Save2,
    index_SaveAdd as SaveAdd,
    index_SaveMinus as SaveMinus,
    index_SaveRemove as SaveRemove,
    index_Scan as Scan,
    index_ScanBarcode as ScanBarcode,
    index_Scanner as Scanner,
    index_Scanning as Scanning,
    index_Scissor as Scissor,
    index_ScissorAlt as ScissorAlt,
    index_Screenmirroring as Screenmirroring,
    index_Scroll as Scroll,
    index_Search as Search,
    index_SearchFavorite as SearchFavorite,
    index_SearchFavorite1 as SearchFavorite1,
    index_SearchNormal as SearchNormal,
    index_SearchNormal1 as SearchNormal1,
    index_SearchStatus as SearchStatus,
    index_SearchStatus1 as SearchStatus1,
    index_SearchZoomIn as SearchZoomIn,
    index_SearchZoomIn1 as SearchZoomIn1,
    index_SearchZoomOut as SearchZoomOut,
    index_SearchZoomOut1 as SearchZoomOut1,
    index_Security as Security,
    index_SecurityCard as SecurityCard,
    index_SecuritySafe as SecuritySafe,
    index_SecurityTime as SecurityTime,
    index_SecurityUser as SecurityUser,
    index_Send as Send,
    index_Send2 as Send2,
    index_SendAlt as SendAlt,
    index_SendSqaure2 as SendSqaure2,
    index_SendSquare as SendSquare,
    index_SendSubmitSuccess as SendSubmitSuccess,
    index_Setting as Setting,
    index_Setting2 as Setting2,
    index_Setting3 as Setting3,
    index_Setting4 as Setting4,
    index_Setting5 as Setting5,
    index_Settings as Settings,
    index_SettingsAlt as SettingsAlt,
    index_Shapes as Shapes,
    index_Shapes2 as Shapes2,
    index_Share as Share,
    index_ShareAlt as ShareAlt,
    index_Sheet as Sheet,
    index_Shield as Shield,
    index_ShieldCross as ShieldCross,
    index_ShieldSearch as ShieldSearch,
    index_ShieldSecurity as ShieldSecurity,
    index_ShieldSlash as ShieldSlash,
    index_ShieldTick as ShieldTick,
    index_Ship as Ship,
    index_Shop as Shop,
    index_ShopAdd as ShopAdd,
    index_ShopRemove as ShopRemove,
    index_ShoppingBag as ShoppingBag,
    index_ShoppingCart as ShoppingCart,
    index_SiacoinSc as SiacoinSc,
    index_SidebarBottom as SidebarBottom,
    index_SidebarLeft as SidebarLeft,
    index_SidebarRight as SidebarRight,
    index_SidebarTop as SidebarTop,
    index_Signpost as Signpost,
    index_Simcard as Simcard,
    index_Simcard1 as Simcard1,
    index_Simcard2 as Simcard2,
    index_Size as Size,
    index_Slack as Slack,
    index_Slash as Slash,
    index_Slider as Slider,
    index_SliderHorizontal as SliderHorizontal,
    index_SliderHorizontal1 as SliderHorizontal1,
    index_SliderVertical as SliderVertical,
    index_SliderVertical1 as SliderVertical1,
    index_Smallcaps as Smallcaps,
    index_SmartCar as SmartCar,
    index_SmartHome as SmartHome,
    index_Smileys as Smileys,
    index_Snapchat as Snapchat,
    index_SoapShampoo as SoapShampoo,
    index_SolanaSol as SolanaSol,
    index_Sort as Sort,
    index_Sound as Sound,
    index_Speaker as Speaker,
    index_Speedometer as Speedometer,
    index_Spotify as Spotify,
    index_StacksStx as StacksStx,
    index_Star as Star,
    index_Star1 as Star1,
    index_StarAlt as StarAlt,
    index_StarSlash as StarSlash,
    index_Status as Status,
    index_StatusUp as StatusUp,
    index_StellarXlm as StellarXlm,
    index_Sticker as Sticker,
    index_Stickynote as Stickynote,
    index_Stop as Stop,
    index_StopCircle as StopCircle,
    index_Store as Store,
    index_Story as Story,
    index_Strongbox as Strongbox,
    index_Strongbox2 as Strongbox2,
    index_Subtitle as Subtitle,
    index_Sun as Sun,
    index_Sun1 as Sun1,
    index_SunFog as SunFog,
    index_Tag as Tag,
    index_Tag2 as Tag2,
    index_TagCross as TagCross,
    index_TagRight as TagRight,
    index_TagUser as TagUser,
    index_Task as Task,
    index_TaskSquare as TaskSquare,
    index_Teacher as Teacher,
    index_TenxPay as TenxPay,
    index_TetherUsdt as TetherUsdt,
    index_Text as Text,
    index_TextBlock as TextBlock,
    index_TextBold as TextBold,
    index_TextItalic as TextItalic,
    index_TextUnderline as TextUnderline,
    index_TextalignCenter as TextalignCenter,
    index_TextalignJustifycenter as TextalignJustifycenter,
    index_TextalignJustifyleft as TextalignJustifyleft,
    index_TextalignJustifyright as TextalignJustifyright,
    index_TextalignLeft as TextalignLeft,
    index_TextalignRight as TextalignRight,
    index_TheGraphGrt as TheGraphGrt,
    index_ThetaTheta as ThetaTheta,
    index_ThorchainRune as ThorchainRune,
    index_ThreeFull as ThreeFull,
    index_ThreeSquare as ThreeSquare,
    index_ThreedCubeScan as ThreedCubeScan,
    index_ThreedRotate as ThreedRotate,
    index_ThreedSquare as ThreedSquare,
    index_Threedcube as Threedcube,
    index_ThumpDown as ThumpDown,
    index_ThumpUp as ThumpUp,
    index_TickCircle as TickCircle,
    index_TickSquare as TickSquare,
    index_Ticket as Ticket,
    index_Ticket2 as Ticket2,
    index_TicketDiscount as TicketDiscount,
    index_TicketExpired as TicketExpired,
    index_TicketStar as TicketStar,
    index_Time as Time,
    index_Timer as Timer,
    index_Timer1 as Timer1,
    index_TimerPause as TimerPause,
    index_TimerStart as TimerStart,
    index_ToggleOff as ToggleOff,
    index_ToggleOffCircle as ToggleOffCircle,
    index_ToggleOn as ToggleOn,
    index_ToggleOnCircle as ToggleOnCircle,
    index_ToothbrushToothpaste as ToothbrushToothpaste,
    index_Trade as Trade,
    index_TransactionMinus as TransactionMinus,
    index_Translate as Translate,
    index_Trash as Trash,
    index_Tree as Tree,
    index_Trello as Trello,
    index_TrendDown as TrendDown,
    index_TrendUp as TrendUp,
    index_Triangle as Triangle,
    index_TriangleAlt as TriangleAlt,
    index_TrontronTrx as TrontronTrx,
    index_Truck as Truck,
    index_TruckFast as TruckFast,
    index_TruckRemove as TruckRemove,
    index_TruckTick as TruckTick,
    index_TruckTime as TruckTime,
    index_Trush as Trush,
    index_TrushSquare as TrushSquare,
    index_TwentyFourSupport as TwentyFourSupport,
    index_Twitch as Twitch,
    index_Ui8 as Ui8,
    index_Undo as Undo,
    index_Unlimited as Unlimited,
    index_Unlock as Unlock,
    index_UsdCoinUsdc as UsdCoinUsdc,
    index_User as User,
    index_UserAdd as UserAdd,
    index_UserCirlceAdd as UserCirlceAdd,
    index_UserEdit as UserEdit,
    index_UserMinus as UserMinus,
    index_UserOctagon as UserOctagon,
    index_UserRemove as UserRemove,
    index_UserSearch as UserSearch,
    index_UserSquare as UserSquare,
    index_UserTag as UserTag,
    index_UserTick as UserTick,
    index_VelasVlx as VelasVlx,
    index_Verify as Verify,
    index_Vespa as Vespa,
    index_VibeVibe as VibeVibe,
    index_Video as Video,
    index_VideoAdd as VideoAdd,
    index_VideoCallCamera as VideoCallCamera,
    index_VideoCircle as VideoCircle,
    index_VideoHorizontal as VideoHorizontal,
    index_VideoOctagon as VideoOctagon,
    index_VideoPlay as VideoPlay,
    index_VideoRemove as VideoRemove,
    index_VideoSlash as VideoSlash,
    index_VideoSquare as VideoSquare,
    index_VideoTick as VideoTick,
    index_VideoTime as VideoTime,
    index_VideoVertical as VideoVertical,
    index_VillaHome as VillaHome,
    index_VoiceCricle as VoiceCricle,
    index_VoiceSquare as VoiceSquare,
    index_VolumeCross as VolumeCross,
    index_VolumeHigh as VolumeHigh,
    index_VolumeLow as VolumeLow,
    index_VolumeLow1 as VolumeLow1,
    index_VolumeMute as VolumeMute,
    index_VolumeSlash as VolumeSlash,
    index_VolumeUp as VolumeUp,
    index_Vouchers as Vouchers,
    index_Vuesax as Vuesax,
    index_Wallet as Wallet,
    index_Wallet1 as Wallet1,
    index_Wallet2 as Wallet2,
    index_Wallet3 as Wallet3,
    index_WalletAdd as WalletAdd,
    index_WalletAdd1 as WalletAdd1,
    index_WalletCheck as WalletCheck,
    index_WalletMinus as WalletMinus,
    index_WalletMoney as WalletMoney,
    index_WalletRemove as WalletRemove,
    index_WalletSearch as WalletSearch,
    index_WanchainWan as WanchainWan,
    index_WanchainWan1 as WanchainWan1,
    index_Warning2 as Warning2,
    index_Watch as Watch,
    index_WatchStatus as WatchStatus,
    index_Weight as Weight,
    index_Whatsapp as Whatsapp,
    index_Wifi as Wifi,
    index_WifiAlt as WifiAlt,
    index_WifiSquare as WifiSquare,
    index_Wind as Wind,
    index_Wind2 as Wind2,
    index_Windows as Windows,
    index_WingWing as WingWing,
    index_Woman as Woman,
    index_Wristwatch as Wristwatch,
    index_Xd as Xd,
    index_Xiaomi as Xiaomi,
    index_XrpXrp as XrpXrp,
    index_Youtube as Youtube,
    index_ZelZel as ZelZel,
    index_Zoom as Zoom,
  };
}

export { Aave, Activity, Add, AddCircle, AddSquare, Additem, Airdrop, Airplane, AirplaneSquare, Airpod, Airpods, Alarm, AlignBottom, AlignHorizontally, AlignLeft, AlignRight, AlignVertically, Alternative, Amount, Android, AnkrAnkr, ApartmentHome, Apple, Aquarius, Archive, ArchiveAdd, ArchiveAlt, ArchiveBook, ArchiveMinus, ArchiveSlash, ArchiveTick, ArrangeCircle, ArrangeCircle2, ArrangeSquare, ArrangeSquare2, Arrow, Arrow2, Arrow3, ArrowBottom, ArrowCircleDown, ArrowCircleLeft, ArrowCircleRight, ArrowDown, ArrowDown1, ArrowDown2, ArrowLeft, ArrowLeft1, ArrowLeft2, ArrowLeft3, ArrowRight, ArrowRight1, ArrowRight2, ArrowRight3, ArrowSquare, ArrowSquareDown, ArrowSquareLeft, ArrowSquareRight, ArrowSquareUp, ArrowSwapHorizontal, ArrowUp, ArrowUp1, ArrowUp2, ArrowUp3, ArrowUpCircle, AttachCircle, AttachSquare, Attention, AudioSquare, AugurRep, Autobrightness, AutonioNiox, AvalancheAvax, Award, Baby, Baby2, BackIconsUia, BackSquare, Backarrow, Backward, Backward10Seconds, Backward15Seconds, Backward5Seconds, BackwardItem, Bag, Bag2, BagAlt, BagCross, BagCross1, BagHappy, BagTick, BagTick2, BagTimer, Balance, Bank, Barcode, BatteryCharging, BatteryDisable, BatteryEmpty, BatteryEmpty1, BatteryFull, Be, Bell, Bezier, Bicycle, Bicycle2, Bill, BinanceCoinBnb, BinanceUsdBusd, Birthday, BitcoinBtc, BitcoinCard, BitcoinConvert, BitcoinRefresh, Blend, Blend2, Blogger, Bluetooth, Bluetooth2, BluetoothCircle, BluetoothRectangle, Blur, Book, Book1, BookSaved, BookSquare, Bookmark, Bookmark2, Bootsrap, Box, Box1, Box2, BoxAdd, BoxAlt, BoxRemove, BoxSearch, BoxTick, BoxTime, Briefcase, BrifecaseCross, BrifecaseTick, BrifecaseTimer, Broom, Brush, Brush1, Brush2, Brush3, BrushAlt, Bubble, BucketCircle, BucketSquare, Building, Building3, Building4, Buildings, Buildings2, Buliding, Bus, BusinessCompanyBuilding, BuyCrypto, Cake, Calculator, Calendar, Calendar1, Calendar2, CalendarAdd, CalendarCircle, CalendarEdit, CalendarRemove, CalendarSearch, CalendarTick, CalenderTimeAppointment, Call, CallAdd, CallCalling, CallIncoming, CallOutgoing, CallReceived, CallSlash, CallcentarHelp, Camera, CameraAlt, CameraSlash, Candle, Candle2, Car, Card, CardAdd, CardCoin, CardEdit, CardPos, CardReceive, CardRemove, CardRemove1, CardSend, CardSlash, CardTick, CardTick1, CardanoAda, Cards, Cart, Cash, Category, Category2, CategoryDashboard, Cd, CeloCelo, CelsiusCel, ChainlinkLink, Chart, Chart1, Chart2, Chart21, ChartAlt, ChartAlt2, ChartSquare, ChartSuccess, Chat, Check, Checkbox, Checked, Chrome, CivicCvc, Clipboard, ClipboardClose, ClipboardExport, ClipboardImport, ClipboardText, ClipboardTick, Clock, Close, CloseCircle, CloseNa, CloseSquare, Cloud, CloudAdd, CloudChange, CloudConnection, CloudCross, CloudDrizzle, CloudFog, CloudLightning, CloudMinus, CloudNotif, CloudPlus, CloudRemove, CloudSnow, CloudSunny, CloudUploadDownload, Code, Code1, CodeCircle, Coffee, Coin, Coin1, ColorSwatch, Colorfilter, ColorsSquare, Command, CommandSquare, Component, Compound, Computing, Convert, ConvertThreeDCube, Convertshape, Convertshape2, Copy, CopyAlt, CopySuccess, Copyright, Courthouse, Cpu, CpuCharge, CpuSetting, CreativeCommons, CreditCard, CreditCardPlus, Crop, Crown, Crown1, Cup, CupAlt, Cursor, DaiDai, Danger, DashDash, Data, Data2, DecredDcr, Deliverybox, DentDent, Designtools, Devices, DevicesAlt, Diagram, Diamonds, DirectDown, DirectLeft, DirectRight, DirectUp, DiscountCircle, DiscountShape, Discover, DiscoverAlt, Dislike, DoctorEarphone, Document, DocumentAlt, DocumentCloud, DocumentCode, DocumentCode2, DocumentCopy, DocumentDownload, DocumentFavorite, DocumentFilter, DocumentForward, DocumentLike, DocumentPrevious, DocumentSketch, DocumentText, DocumentText1, DocumentUpload, DollarCircle, DollarSquare, DotsMenu, Dribbble, Driver, Driver2, DriverRefresh, Driving, Drop, Dropbox, EPrescriptions, EPrescriptions2, Edit, Edit2, EditAlt, EditPen, EducareEkt, Electricity, Element1, Element2, Element3, Element4, ElementEqual, ElementPlus, Email, EmercoinEmc, EmojiHappy, EmojiNormal, EmojiSad, EmptyWallet, EmptyWalletAdd, EmptyWalletChange, EmptyWalletRemove, EmptyWalletTick, EmptyWalletTime, EnjinCoinEnj, Enter, EosEos, Equal, Eraser, EraserAlt, Erlenmeyer, EthereumClassicEtc, EthereumEth, Exchange, Exclamation, Export, Export1, Export2, Export3, ExternalDrive, Eye, EyeSlash, Facebook, Faq, Fatrows, FavoriteChart, FemaleWomenGender, Figma, Figma1, Filter, Filter2, FilterAdd, FilterAlt, FilterEdit, FilterRemove, FilterSearch, FilterSquare, FilterTick, FingerCricle, FingerScan, Firstline, Flag, Flag2, Flash, FlashAlt, FlashCircle, FlashCircleAlt, FlashSlash, Folder, Folder2, FolderAdd, FolderCloud, FolderConnection, FolderCross, FolderFavorite, FolderMinus, FolderOpen, FormatCircle, FormatSquare, Forward, Forward10Seconds, Forward15Seconds, Forward5Seconds, ForwardItem, ForwardSquare, Frame, Frame1, Frame2, FrameAlt, Framer, FtxTokenFtt, FullRedo, Gallery, GalleryAdd, GalleryEdit, GalleryExport, GalleryFavorite, GalleryImport, GalleryRemove, GallerySlash, GalleryTick, Game, Gameboy, GasStation, Gemini, Gemini2, Gender, Gender2Comp, Gender2Female, Gender2Man, GenderChange, GenderComp, GenderFaceMan, GenderFaceWoman, Ghost, Gift, Glass, Global, GlobalCountries, GlobalEdit, GlobalRefresh, GlobalSearch, Google, Google1, GooglePlay, Gps, GpsSlash, Grammerly, Graph, Grid1, Grid2, Grid3, Grid4, Grid5, Grid6, Grid7, Grid8, Grid9, GridEdit, GridEraser, GridLock, Happyemoji, HarmonyOne, Hashtag, HashtagDown, HashtagUp, Headphone, Headphones, Health, Heart, HeartAdd, HeartAlt, HeartCircle, HeartEdit, HeartRemove, HeartSearch, HeartSlash, HeartTick, HederaHashgraphHbar, Help, HexHex, Hierarchy, Hierarchy2, Hierarchy3, HierarchySquare, HierarchySquare2, HierarchySquare3, Home, Home2, HomeAlt, HomeHashtag, HomeTrendDown, HomeTrendUp, HomeWifi, Hospital, HospitalAlt, House, House2, Html3, Html5, HuobiTokenHt, IconIcx, Id, Illustrator, Image, Import, Import1, Import2, InfoCircle, Information, Instagram, IostIost, JavaScript, Js, Judge, Kanban, Key, KeySquare, Keyboard, KeyboardOpen, KyberNetworkKnc, Lamp, LampCharge, LampOn, LampSlash, LanguageCircle, LanguageSquare, Languages, Layer, Level, Lifebuoy, Like, Like1, LikeDislike, LikeShapes, LikeTag, Link, Link1, Link2, Link21, LinkAlt, LinkCircle, LinkSquare, LitecoinLtc, Location, LocationAdd, LocationAlt, LocationCross, LocationMinus, LocationSlash, LocationTarget, LocationTick, Lock, Lock1, LockCircle, LockPassword, LockSlash, Login, Login1, Logout, Logout1, LogoutAlt, Lovely, LowWifi, Machine, MagicStar, Magicpen, MainComponent, MakerMkr, Makeup, MaleManGender, Man, Map, Map1, MapNavigation, Mask, Mask2, Mask3, MaskAlt, Math, Maximize, Maximize1, Maximize2, Maximize3, Maximize4, MaximizeAlt, MaximizeCircle, Medal, MedalStar, MedicineBottle, Menu, MenuAlt, MenuBoard, MenuCircles, Message, MessageProgramming, MessageQuestion, Messenger, Microphone, Microphone2, MicrophoneSlash, MicrophoneSlash1, Microscope, Milk, MiniMusicSqaure, Minus, MinusAlt, MinusCirlce, MinusSquare, Mirror, MirroringScreen, Mobile, MobileProgramming, MoneroXmr, Money, Money2, Money3, Money4, MoneyAdd, MoneyChange, MoneyForbidden, MoneyRecive, MoneyRemove, MoneySend, MoneyTick, MoneyTime, Moneys, Monitor, MonitorMobbile, MonitorRecorder, Moon, More, More2, MoreCircle, MoreSquare, Mouse, MouseCircle, MouseSquare, Music, MusicCircle, MusicDashboard, MusicFilter, MusicLibrary2, MusicPlay, MusicPlaylist, MusicSquare, MusicSquareAdd, MusicSquareRemove, MusicSquareSearch, Musicnote, NebulasNas, NemXem, NexoNexo, Next, NoLocation, Not, NotAlt, NotCoveredLocation, Note, Note1, Note2, NoteAdd, NoteAlt, NoteFavorite, NoteRemove, NoteSquare, NoteText, Notification, Notification1, NotificationBing, NotificationCircle, NotificationFavorite, NotificationStatus, OceanProtocolOcean, Offer, OfficeBagHome, OkbOkb, OmegaCircle, OmegaSquare, OntologyOnt, Paint, Paintbucket, Paperclip, Paperclip2, PaperclipAttach, PasswordCheck, Path, Path2, PathSquare, Pause, PauseCircle, Paypal, PenAdd, PenClose, PenRemove, PenTool, PenTool2, People, PercentCircle, PercentageSquare, Personalcard, Pet, Pharagraphspacing, Phone, Photoshop, PictureFrame, Play, PlayAdd, PlayCircle, PlayCricle, PlayRemove, Plus, PlusSquare, PolkadotDot, PolygonMatic, PolyswarmNct, PresentionChart, Previous, Printer, PrinterSlash, Profile, Profile2User, ProfileAdd, ProfileAlt, ProfileCircle, ProfileDelete, ProfileRemove, ProfileTick, ProgrammingArrow, ProgrammingArrows, Python, QrCode, QuantQnt, QuestionMark, QuoteDown, QuoteDownCircle, QuoteDownSquare, QuoteUp, QuoteUpCircle, QuoteUpSquare, Radar, Radar2, RadarAlt, Radio, RadioCircles, Ram, Ram2, Ranking, RankingAlt, Receipt, Receipt1, Receipt2, Receipt21, ReceiptAdd, ReceiptDiscount, ReceiptDisscount, ReceiptEdit, ReceiptItem, ReceiptMinus, ReceiptSearch, ReceiptSquare, ReceiptText, ReceiveSquare, ReceiveSquare2, Received, Reciept, Record$1 as Record, RecordCircle, RecoveryConvert, Recycle, Redo, RedoAlt, Refresh, Refresh2, RefreshCircle, RefreshLeftSquare, RefreshRightSquare, RefreshSquare2, Repeat, RepeatCircle, RepeateMusic, RepeateOne, Replace, Reserve, RotateLeft, RotateLeftAlt, RotateRight, RotateRightAlt, RouteSquare, Routing, Routing2, RowHorizontal, RowVertical, Ruler, RulerPen, SafeHome, Sagittarius, Save, Save2, SaveAdd, SaveMinus, SaveRemove, Scan, ScanBarcode, Scanner, Scanning, Scissor, ScissorAlt, Screenmirroring, Scroll, Search, SearchFavorite, SearchFavorite1, SearchNormal, SearchNormal1, SearchStatus, SearchStatus1, SearchZoomIn, SearchZoomIn1, SearchZoomOut, SearchZoomOut1, Security, SecurityCard, SecuritySafe, SecurityTime, SecurityUser, Send, Send2, SendAlt, SendSqaure2, SendSquare, SendSubmitSuccess, Setting, Setting2, Setting3, Setting4, Setting5, Settings, SettingsAlt, Shapes, Shapes2, Share, ShareAlt, Sheet, Shield, ShieldCross, ShieldSearch, ShieldSecurity, ShieldSlash, ShieldTick, Ship, Shop, ShopAdd, ShopRemove, ShoppingBag, ShoppingCart, SiacoinSc, SidebarBottom, SidebarLeft, SidebarRight, SidebarTop, Signpost, Simcard, Simcard1, Simcard2, Size, Slack, Slash, Slider, SliderHorizontal, SliderHorizontal1, SliderVertical, SliderVertical1, Smallcaps, SmartCar, SmartHome, Smileys, Snapchat, SoapShampoo, SolanaSol, Sort, Sound, Speaker, Speedometer, Spotify, StacksStx, Star, Star1, StarAlt, StarSlash, Status, StatusUp, StellarXlm, Sticker, Stickynote, Stop, StopCircle, Store, Story, Strongbox, Strongbox2, Subtitle, Sun, Sun1, SunFog, Tag, Tag2, TagCross, TagRight, TagUser, Task, TaskSquare, Teacher, TenxPay, TetherUsdt, Text, TextBlock, TextBold, TextItalic, TextUnderline, TextalignCenter, TextalignJustifycenter, TextalignJustifyleft, TextalignJustifyright, TextalignLeft, TextalignRight, TheGraphGrt, ThetaTheta, ThorchainRune, ThreeFull, ThreeSquare, ThreedCubeScan, ThreedRotate, ThreedSquare, Threedcube, ThumpDown, ThumpUp, TickCircle, TickSquare, Ticket, Ticket2, TicketDiscount, TicketExpired, TicketStar, Time, Timer, Timer1, TimerPause, TimerStart, ToggleOff, ToggleOffCircle, ToggleOn, ToggleOnCircle, ToothbrushToothpaste, Trade, TransactionMinus, Translate, Trash, Tree, Trello, TrendDown, TrendUp, Triangle, TriangleAlt, TrontronTrx, Truck, TruckFast, TruckRemove, TruckTick, TruckTime, Trush, TrushSquare, TwentyFourSupport, Twitch, Ui8, Undo, Unlimited, Unlock, UsdCoinUsdc, User, UserAdd, UserCirlceAdd, UserEdit, UserMinus, UserOctagon, UserRemove, UserSearch, UserSquare, UserTag, UserTick, VelasVlx, Verify, Vespa, VibeVibe, Video, VideoAdd, VideoCallCamera, VideoCircle, VideoHorizontal, VideoOctagon, VideoPlay, VideoRemove, VideoSlash, VideoSquare, VideoTick, VideoTime, VideoVertical, VillaHome, VoiceCricle, VoiceSquare, VolumeCross, VolumeHigh, VolumeLow, VolumeLow1, VolumeMute, VolumeSlash, VolumeUp, Vouchers, Vuesax, Wallet, Wallet1, Wallet2, Wallet3, WalletAdd, WalletAdd1, WalletCheck, WalletMinus, WalletMoney, WalletRemove, WalletSearch, WanchainWan, WanchainWan1, Warning2, Watch, WatchStatus, Weight, Whatsapp, Wifi, WifiAlt, WifiSquare, Wind, Wind2, Windows, WingWing, Woman, Wristwatch, Xd, Xiaomi, XrpXrp, Youtube, ZelZel, Zoom, createBravyIconsComponent, index as icons };
export type { BravyIconsIcon, BravyIconsProps, IconSvgObject };
