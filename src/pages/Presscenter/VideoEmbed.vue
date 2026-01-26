<template>
  <div class="video-frame">
    <iframe
      v-if="embedUrl"
      :src="embedUrl"
      title="Video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      loading="lazy"
      referrerpolicy="strict-origin-when-cross-origin"
    ></iframe>

    <video v-else controls playsinline preload="metadata" :poster="poster">
      <source :src="src" />
    </video>
  </div>
</template>

<script>
export default {
  name: "VideoEmbed",
  props: {
    src: { type: String, default: "" },
    videoUrl: { type: String, default: "" },
    poster: { type: String, default: "" },
  },
  computed: {
    embedUrl() {
      const url = (this.videoUrl || "").trim();
      if (!url) return "";

      const yt = url.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/,
      );
      if (yt?.[1]) return `https://www.youtube.com/embed/${yt[1]}`;
      const vimeo = url.match(/vimeo\.com\/(\d+)/);
      if (vimeo?.[1]) return `https://player.vimeo.com/video/${vimeo[1]}`;
      const rutube = url.match(/rutube\.ru\/video\/([A-Za-z0-9]+)/);
      if (rutube?.[1]) return `https://rutube.ru/play/embed/${rutube[1]}`;
      if (url.includes("/embed/")) return url;
      return "";
    },
  },
};
</script>

<style scoped>
.video-frame {
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background: #000;
}

.video-frame iframe,
.video-frame video {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
</style>
