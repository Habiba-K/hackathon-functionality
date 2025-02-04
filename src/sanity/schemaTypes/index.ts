import { type SchemaTypeDefinition } from 'sanity';
import { product } from './product';
import { neutralsectionproduct } from './neutralsectionproduct';
import { vitaproduct } from './vitaproduct';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, neutralsectionproduct, vitaproduct],
}
