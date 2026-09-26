{/* center - vídeo ajustado sem barras pretas */}
            <div className="relative">
              <div className="relative aspect-[2/3] w-48 sm:w-52 lg:w-60 overflow-hidden rounded-2xl ring-2 ring-pink shadow-[0_0_30px_-5px_rgba(255,61,129,0.5)] bg-black">
                <iframe
                  title="vimeo-player"
                  src="https://player.vimeo.com/video/1226000802?autoplay=1&muted=1&api=1&loop=1&title=0&byline=0&portrait=0"
                  className="absolute inset-0 h-full w-full border-0 object-cover scale-105"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                />
              </div>
              <span className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-xs font-semibold shadow-lg ring-1 ring-border backdrop-blur z-10 whitespace-nowrap">
                <Play className="h-3.5 w-3.5 fill-pink text-pink" /> Veja por dentro
              </span>
            </div>
