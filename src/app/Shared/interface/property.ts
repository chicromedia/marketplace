import { IFeatures } from "./features";
import { ILocation } from "./location";

export interface IProperty
{
  _id: string;
  title: string;
  description: string;
  address: string;
  currency: string;
  features: IFeatures;
  isFavorite: boolean;
  location: ILocation;
  price: number;
  tags: string[];
}
