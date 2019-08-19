module.exports = function (api) {
  api.loadSource(store => {
    const properties = store.getContentType('Property');
    console.log(properties);

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
            // TODO: Fix me I am broken!
            //subCaption: { type: graphql.GraphQLString },
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
    }
  })
};


