// {
//   paletteName: "Material UI Colors",
//     id: "material-ui-colors",
//       emoji: "🎨",
//         colors: [
//           { name: "red", color: "#F44336" },
//           { name: "pink", color: "#E91E63" },
//           { name: "purple", color: "#9C27B0" },
//           { name: "deeppurple", color: "#673AB7" },
//           { name: "indigo", color: "#3F51B5" },
//           { name: "blue", color: "#2196F3" },
//           { name: "lightblue", color: "#03A9F4" },
//           { name: "cyan", color: "#00BCD4" },
//           { name: "teal", color: "#009688" },
//           { name: "green", color: "#4CAF50" },
//           { name: "lightgreen", color: "#8BC34A" },
//           { name: "lime", color: "#CDDC39" },
//           { name: "yellow", color: "#FFEB3B" },
//           { name: "amber", color: "#FFC107" },
//           { name: "orange", color: "#FF9800" },
//           { name: "deeporange", color: "#FF5722" },
//           { name: "brown", color: "#795548" },
//           { name: "grey", color: "#9E9E9E" },
//           { name: "bluegrey", color: "#607D8B" }
//         ]
// }

// HELPERS 
//imports
import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];


//helper for generator  ----------------------------------
function getRange(hexColor){
  const end = "#fff";
  return [ //range of #hex colors
    // darken , color , white => pretending a rgb();
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    end
  ];
}

function generator(hexColor , num){
  //generate num colors of this range
  return chroma.scale(getRange(hexColor)).mode("lab").colors(num);
}

function generatePalette(starter) {
  let nuePalette = {
    name: starter.paletteName,
    id: starter.id,
    emoji: starter.emoji,
    colors: {}
  }
  //set level for every color
  for (let level of levels) {
    nuePalette.colors[level] = [];
  }
  //create color and assign them
  for (let color of starter.colors) {
    let scale = generator(color.color, 10).reverse();
    for (let i in scale) {
      nuePalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(), //give me an rgb color
        rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ",1.0)")
      });
    }
  }
  return nuePalette;
};
//  --------------------------------------------------------------------

export {generatePalette}