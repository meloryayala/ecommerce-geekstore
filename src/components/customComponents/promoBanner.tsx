import Image, {ImageProps} from "next/image";

const PromoBanner = ({src, alt}: ImageProps) => {
    return (
        <Image
            src={src}
            width={0}
            height={0}
            className="h-auto w-full px-5"
            sizes="100vw"
            alt={alt}
        />
    );
};
export default PromoBanner;
