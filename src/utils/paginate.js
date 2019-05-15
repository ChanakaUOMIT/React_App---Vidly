import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  console.log("***** paginate - utils  *********");
  console.log("StartIndex : ", startIndex);

  console.log("_(items) ", _(items));
  console.log("_(items).slice(startIndex) ", _(items).slice(startIndex));
  console.log(
    "_(items).slice(startIndex).take(pageSize) ",
    _(items)
      .slice(startIndex)
      .take(pageSize)
  );

  console.log(
    "_(items).slice(startIndex).take(pageSize).value() ",
    _(items)
      .slice(startIndex)
      .take(pageSize)
      .value()
  );

  console.log("************************");

  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
  // _.slice(items, startIndex)
  // _.take()
}
