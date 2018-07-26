/*
Find the overlapping rectangle of two rectangles.

https://www.interviewcake.com/question/javascript/rectangular-love

var myRectangle = {

  // coordinates of bottom-left corner
  leftX: 1,
  bottomY: 5,

  // width and height
  width: 10,
  height: 4,

};
*/

export const rectangularLove = (rect1, rect2) => {
  let loveRectangle = {};

  let x1 = rect1.leftX;
  let x1width = rect1.width;
  let y1 = rect1.bottomY;
  let y1width = rect1.height;

  let x2 = rect2.leftX;
  let x2width = rect2.width;
  let y2 = rect2.bottomY;
  let y2width = rect2.height;

  let xOverlap = findXOverlap(x1, x1width, x2, x2width);
  let yOverlap = findXOverlap(y1, y1width, y2, y2width);

  if (xOverlap.bottomX && yOverlap.bottomY) {
    loveRectangle.bottomX = xOverlap.bottomX;
    loveRectangle.bottomY = yOverlap.bottomY;
    loveRectangle.width = xOverlap.width;
    loveRectangle.height = yOverlap.height;
    return loveRectangle;
  } else {
    return null;
  }
};

const findXOverlap = (x1, x1width, x2, x2width) => {
  // get the highest starting point
  let highestStartingPoint = Math.max(x1, x2);
  // get the lowest ending point
  let lowestEndingPoint = Math.min(x1 + x1width, x2 + x2width);

  if (highestStartingPoint >= lowestEndingPoint) {
    return {
      bottomX: null,
      width: null,
    };
  }

  let width = lowestEndingPoint - highestStartingPoint;

  return {
    bottomX: highestStartingPoint,
    width: width,
  };
};

const findYOverlap = (y1, y1height, y2, y2height) => {
  let highestStartingPoint = Math.max(y1, y2);
  let lowestEndingPoint = Math.min(y1 + y1height, y2 + y2height);

  if (highestStartingPoint >= lowestEndingPoint) {
    return {
      bottomY: null,
      height: null,
    };
  }

  let height = lowestEndingPoint - highestStartingPoint;

  return {
    bottomY: highestStartingPoint,
    height: height,
  };
};
