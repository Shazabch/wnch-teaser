"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Smartphone } from "lucide-react";

export function AppScreenshotSlider({
  slides,
  accent = "bg-[#1a3bc7]",
  autoPlayDelay = 3500,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false }, [
    Autoplay({ delay: autoPlayDelay, stopOnInteraction: true }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi]);

  return (
    <div className="relative w-full select-none mt-10 max-w-[100vw] overflow-hidden">
      {/* Viewport */}
      <div className="overflow-hidden px-10 md:px-20 py-10" ref={emblaRef}>
        <div className="flex gap-4 md:gap-6">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="shrink-0 flex flex-col items-center"
              style={{ flex: "0 0 240px" }}
            >
              {/* Clean card — no fake phone chrome */}
              <div className="relative w-[240px] h-[520px] rounded-[1.25rem] overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-black/10 transition-transform duration-300 hover:-translate-y-1 bg-neutral-900">
                {slide.src ? (
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={slide.src}
                      alt={slide.alt ?? `Screenshot ${i + 1}`}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#1a3bc7]/20 to-neutral-900">
                    <PlaceholderScreen index={i + 1} />
                  </div>
                )}
              </div>
              <p className="mt-6 text-sm font-semibold text-neutral-600 dark:text-neutral-400 tracking-wide uppercase">{slide.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next Buttons */}
      <button
        onClick={scrollPrev}
        aria-label="Previous screenshot"
        className={`absolute left-2 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full ${accent} text-white flex items-center justify-center shadow-xl hover:opacity-90 active:scale-95 transition-all disabled:opacity-30 z-10`}
        disabled={!canScrollPrev}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next screenshot"
        className={`absolute right-2 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full ${accent} text-white flex items-center justify-center shadow-xl hover:opacity-90 active:scale-95 transition-all disabled:opacity-30 z-10`}
        disabled={!canScrollNext}
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === selectedIndex
                ? `${accent} w-8 opacity-100`
                : "bg-neutral-300 dark:bg-neutral-700 w-2 opacity-60 hover:opacity-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function PlaceholderScreen({ index }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-4 text-center h-full">
      <div className="w-12 h-12 rounded-2xl bg-[#1a3bc7]/15 flex items-center justify-center">
        <Smartphone size={24} className="text-[#1a3bc7]/50" />
      </div>
      <p className="font-mono text-[10px] text-neutral-400 leading-tight">
        Screenshot {index}
      </p>
      <p className="font-mono text-[9px] text-neutral-500">Add real image</p>
    </div>
  );
}
