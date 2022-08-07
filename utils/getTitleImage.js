export const getTitleImage = (global, title) => {
  console.log("ttimg", global);
  let imgSrc = global.attributes.title_image.data.attributes.url;
  if (title) {
    if (global.attributes.title_image_individual) {
      let array = global.attributes.title_image_individual;
      var result = array.filter(
        (obj) => obj.title.toLowerCase() === title.toLowerCase()
      );
      if (result.length) {
        return result[0].image.data.attributes.url;
      }
    }
  }
  return imgSrc;
};
