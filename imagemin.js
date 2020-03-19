const imagemin = require("image-2-min");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");

(async () => {
  await imagemin(["img/**/*.{jpg,png}"], "static", {
    plugins: [
      imageminMozjpeg({ quality: 70 }),
      imageminPngquant({ quality: [0.65, 0.8] })
    ]
  });
})();
