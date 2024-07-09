import { cn } from "@/lib/utils";
import Image from "next/image";
import { type FC } from "react";

type TailwindAspectRatio = "aspect-auto" | "aspect-square" | "aspect-video";
type CustomAspectRatio = `aspect-[${string}/${string}]`;
type ResponsivePrefix = "sm:" | "md:" | "lg:";
type AspectRatio = TailwindAspectRatio | CustomAspectRatio;
type ResponsiveAspectRatio = AspectRatio | `${ResponsivePrefix}${AspectRatio}`;

type AspectRatios = {
  [K in ResponsivePrefix | "default"]?: ResponsiveAspectRatio;
};

interface ResponsiveCardBackdropProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatios?: AspectRatios;
  priority?: boolean;
  quality?: number;
}

const defaultAspectRatios: Required<Pick<AspectRatios, "default">> = {
  default: "aspect-auto",
};

const ResponsiveCardBackdrop: FC<ResponsiveCardBackdropProps> = ({
  src,
  alt,
  className = "",
  aspectRatios = {},
  priority = true,
  quality = 75,
}) => {
  const overrideAspectRatios: AspectRatios =
    aspectRatios ?? defaultAspectRatios;

  const aspectRatioClasses = Object.entries(overrideAspectRatios)
    .map(([key, value]) => (key === "default" ? value : `${key}${value}`))
    .join(" ");

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        aspectRatioClasses,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 50vw"
        priority={priority}
        quality={quality}
      />
    </div>
  );
};

export default ResponsiveCardBackdrop;
