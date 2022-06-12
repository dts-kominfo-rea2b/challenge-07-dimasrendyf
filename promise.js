const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (result) => {
  const resultIXX = await promiseTheaterIXX();
  const resultVGC = await promiseTheaterVGC();
  let marah = 0;
  let tdkMarah = 0;

  for (let i = 0; i < resultIXX.length; i++) {
    if (resultIXX[i].hasil === 'marah') {
      marah++;
    } else {
      tdkMarah++;
    }
  }

  for (let i = 0; i < resultVGC.length; i++) {
    if (resultVGC[i].hasil === 'marah') {
        marah++;
    } else {
        tdkMarah++;
    }
}

if (result === 'marah') {
  return marah;
} else {
  return tdkMarah;
}

};

module.exports = {
  promiseOutput,
};
