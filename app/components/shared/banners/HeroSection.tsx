import Link from "next/link";
import Image from "next/image";

export type HeroSectionProps = Record<
  | "title"
  | "description"
  | "buttonText"
  | "buttonLink"
  | "imageSrc"
  | "imageAlt",
  string
>;

export default function HeroSection({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
}: HeroSectionProps) {
  return (
    <>
      <section className="bg-black py-12 md:py-20">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col w-full space-y-6 max-w-xl ">
            <h1 className="font-mono tracking-tight text-4xl md:text-5xl  text-white  ">
              {title}
            </h1>
            <p className="text-lg text-white leading-relaxed">{description}</p>
            <Link href={buttonLink} className={``}>
              {buttonText}
            </Link>
          </div>
        </div>
        <div
          className={`
                    w-full max-w-md md:max-w-lg aspect-video md:aspect-square relative overflow-hidden rounded-2xl shadow-xl
                    `}
        >
          <Image
            src={imageSrc}
            alt={imageAlt || "Hero Image"}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
    </>
  );
}
