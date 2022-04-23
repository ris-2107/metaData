window.onload = getExif;

function getExif() {
  var img1 = document.getElementById("img1");
  EXIF.getData(img1, function () {
    var make = EXIF.getTag(this, "Make");
    var model = EXIF.getTag(this, "Model");
    var makeAndModel = document.getElementById("makeAndModel");
    makeAndModel.innerHTML = `Make: ${make} \n Model: ${model}`;
  });

  var img2 = document.getElementById("img2");
  EXIF.getData(img2, function () {
    var allMetaData = EXIF.getAllTags(this);
    var allMetaDataDiv = document.getElementById("allMetaDataDiv");
    var spanIn = document.getElementById("spanIn");
    delete allMetaData.MakerNote;
    delete allMetaData.undefined;
    //console.log(allMetaData);
    spanIn.innerHTML = `The Image Metadata is as shown Below: \n `;
    allMetaDataDiv.innerHTML = JSON.stringify(allMetaData, null, "\t");
  });
}
