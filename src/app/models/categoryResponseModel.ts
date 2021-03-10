import { Category } from "./category";
import { ProductResponseModel } from "./productResponseModel";

export interface CategoryResponseModel extends ProductResponseModel{
    data:Category[]
}