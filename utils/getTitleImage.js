export const getTitleImage=(global)=>{
  console.log("ttimg",global)
  let imgSrc = global.attributes.title_image.data.attributes.url;
  console.log("ttimg",imgSrc)
  return imgSrc
}