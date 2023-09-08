import { NextRequest } from "next/server";

export const FromUrlToObject = (req: NextRequest): Record<string, any> => {
  const urlSearchParams: URLSearchParams = req.nextUrl.searchParams;
  let queryObj: Record<string, any> = {};

  urlSearchParams.forEach((value, key) => {
    if (key.includes("[")) {
      // Split the key into property and operator (e.g., 'hourlyRate[gte]' => ['hourlyRate', 'gte'])
      const [property, operator] = key.split("[");

      // Remove ']' from the operator
      const cleanOperator = operator.replace("]", "");

      // Check if the property already exists in the queryObj
      if (!queryObj[property]) {
        queryObj[property] = {};
      }

      // Add the operator and value to the property object
      queryObj[property][cleanOperator] = value;
    } else {
      // If there are no brackets, simply add the key and value to queryObj
      queryObj[key] = value;
    }
  });

  // Now we gonna convert it as an mongoose object

  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
  queryObj = JSON.parse(queryStr);

  return queryObj;
};

export class APIFeatures {
  query: any;
  queryReq: Record<string, any>;
  constructor(query: any, queryReq: Record<string, any>) {
    this.query = query;
    this.queryReq = queryReq;
  }

  filter() {
    const queryObj = { ...this.queryReq };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);
    this.query = this.query.find(queryObj);
    return this;
  }

  sort() {
    if (this.queryReq.sort) {
      const sortBy = this.queryReq.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    }
    return this;
  }
  limitFields() {
    if (this.queryReq.fields) {
      const fields = this.queryReq.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select("-__v");
    }
    return this;
  }

  paginate() {
    const page = this.queryReq.page * 1 || 1; // I multiply by 1 to transform it to a string
    const limit = this.queryReq.limit * 1 || 100;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}
