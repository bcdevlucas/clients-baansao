function getImageSrcSet(path) {
  const parts = path.split('.');
  let ext = parts.pop();
  let base = parts.join('.');


  // Load srcset small to large
  return `${base}-small.${ext} 100vw, ${base}-small@2x.${ext} 100vw 2x, ${base}-small@3x.${ext} 100vw 3x, ${base}.${ext} 1280px, ${base}@2x.${ext} 1280px 2x, ${base}@3x.${ext} 1280px 3x`;
}

export { getImageSrcSet }
