import {createElement, forwardRef, ForwardRefExoticComponent, ReactSVG, RefAttributes, SVGProps} from "react";
import defaultAttributes from "./defaultAttributes";

export type IconSvgElement = [elementName: keyof ReactSVG, attrs: Record<string, string>][];

export type IconSvgObject = IconSvgElement

export type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;

export interface BravyIconsProps extends ComponentAttributes {
  size?: string | number;
  className?: string;
  color?: string;
  strokeWidth?: string | number;
}

export type BravyIconsIcon = ForwardRefExoticComponent<BravyIconsProps>;

const createBravyIconsComponent = (iconName: string, svgObject: IconSvgObject): BravyIconsIcon => {
  const Component = forwardRef<SVGSVGElement, BravyIconsProps>(
    (
      {
        color = 'currentColor',
        size = 24,
        strokeWidth = 1.5,
        className = '',
        children,
        ...rest
      },
      ref,
    ) => {
      const elementProps = {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        strokeWidth: strokeWidth,
        color,
        className,
        ...rest,
      };

      return createElement(
        'svg',
        elementProps,
        svgObject?.map(([tag, attrs]) => createElement(tag, {key: attrs.id, ...attrs})) ?? [],
        ...(Array.isArray(children) ? children : [children]),
      );
    },
  );

  Component.displayName = `${iconName}Icon`;

  return Component
}

export default createBravyIconsComponent;
