import { ReactElement } from "react";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps{
    counter: number;
    maxCount?: number;
    increaseBy: (value: number) => void;
    product: Product;
}

//LEGACY
// export interface ProductCardHOCProps {
//     ({ children, product }: ProductCardProps) : JSX.Element;
//     Title: ( Props: { title?: string; className?: string }) => JSX.Element;
//     Image: ( Props: { img?: string; className?: string }) => JSX.Element;
//     Buttons: (Props: {className?: string}) => JSX.Element;
// }
export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps) : JSX.Element;
    Title: ( Props: ProductTitleProps) => JSX.Element;
    Image: ( Props: ProductImageProps) => JSX.Element;
    Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product {
    count: number;
}
export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers{
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: (value: number) => void;
    reset: () => void;
}