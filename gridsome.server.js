module.exports = function (api) {
  api.loadSource(store => {
    const properties = store.getContentType('Property');
    //console.log(properties);

    if (properties) {
      properties.addSchemaField('id', ({ graphql }) => ({
        type: graphql.GraphQLString,
      }));
      properties.addSchemaField('image', ({ graphql }) => ({
        type: graphql.GraphQLString,
      }));
      properties.addSchemaField('imageId', ({ graphql }) => ({
        type: graphql.GraphQLString,
      }));
      properties.addSchemaField('galleryFolder', ({ graphql }) => ({
        type: graphql.GraphQLString,
      }));
      properties.addSchemaField('gallery', ({ graphql }) => {
        const galleryType = new graphql.GraphQLObjectType({
          name: 'GalleryImage',
          fields: {
            id: { type: graphql.GraphQLString },
            src: { type: graphql.GraphQLString },
            caption: { type: graphql.GraphQLString },
            subCaption: { type: graphql.GraphQLString },
            featured: { type: graphql.GraphQLBoolean },
          }
        });

        return { type: galleryType }
      });
      properties.addSchemaField('link', ({ graphql }) => ({
        type: graphql.GraphQLString,
      }));
      properties.addSchemaField('linkText', ({ graphql }) => ({
        type: graphql.GraphQLString,
      }));
      properties.addSchemaField('title', ({ graphql }) => ({
        type: graphql.GraphQLString,
      }));
      properties.addSchemaField('metaKeywords', ({ graphql }) => ({
        type: graphql.GraphQLString,
      }));
      properties.addSchemaField('metaDescription', ({ graphql }) => ({
        type: graphql.GraphQLString,
      }));
      properties.addSchemaField('summary', ({ graphql }) => ({
        type: graphql.GraphQLString,
      }));
      properties.addSchemaField('description', ({ graphql }) => ({
        type: graphql.GraphQLString,
      }));
      properties.addSchemaField('address', ({ graphql }) => {
        const addressType = new graphql.GraphQLObjectType({
          name: 'Address',
          fields: {
            line1: { type: graphql.GraphQLString },
            line2: { type: graphql.GraphQLString },
            city: { type: graphql.GraphQLString },
            zone: { type: graphql.GraphQLString },
            country: { type: graphql.GraphQLString },
            postCode: { type: graphql.GraphQLString },
          }
        });

        return { type: addressType }
      });
      properties.addSchemaField('price', ({ graphql }) => {
        const priceType = new graphql.GraphQLObjectType({
          name: 'Price',
          fields: {
            amount: { type: graphql.GraphQLFloat },
            currency: { type: graphql.GraphQLString },
            //dateStart: { type: graphql.GraphQLDate },
            //dateEnd: { type: graphql.GraphQLDate },
            name: { type: graphql.GraphQLString }
          }
        });

        return { type: priceType }
      });
    }
  })
};


