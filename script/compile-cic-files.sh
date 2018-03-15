for filename in assets/js/competition-in-contracting/uncompiled-code/*; do
  npx babel "$filename" --presets=es2015 --plugins=transform-object-rest-spread --out-file assets/js/competition-in-contracting/compiled-code/`basename "$filename"`
done