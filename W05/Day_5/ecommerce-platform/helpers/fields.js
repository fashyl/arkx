function excludeIrrelevantProductFields(req) {
  // excludes irrelevant req.body fields to only process schema defined ones.
  // The boolean value array specifies if the input is a single product or many products. 
  if (Array.isArray(req.body)) {
    const functionalDataArray = []
    req.body.forEach( product => {
      const functionalData = { owner: req.user.userId }
      if(product.title) functionalData.title = product.title; 
      if(product.description) functionalData.description = product.description;
      if(product.price) functionalData.price = product.price;
      if(product.stock) functionalData.stock = product.stock;
      if(product.brand) functionalData.brand = product.brand;
      if(product.category) functionalData.category = product.category;
      if(product.images) functionalData.images = product.images;
      functionalDataArray.push(functionalData);
    })
    return functionalDataArray;
  } else {
    console.log(req.user);
    const functionalData = { owner: req.user.userId }
          if(req.body.title) functionalData.title = req.body.title; 
          if(req.body.description) functionalData.description = req.body.description;
          if(req.body.price) functionalData.price = req.body.price;
          if(req.body.stock) functionalData.stock = req.body.stock;
          if(req.body.brand) functionalData.brand = req.body.brand;
          if(req.body.category) functionalData.category = req.body.category;
          if(req.body.images) functionalData.images = req.body.images;
          if(req.body.owner) functionalData.owner = req.body.owner;
      return functionalData;
  }
}

async function excludeIrrelevantUserFields(req) {
    const update = {
        updatedAt: Date.now(),
      };
      const options = {
        returnNewDocument: true,
        projection: { _id: 0 }, // STILL INCLUDES THE ID
      };
    if (req.body.username) { update.username = req.body.username; options.projection.username = 1; }
    if (req.body.email) { update.email = req.body.email; options.projection.email = 1; }
    if (req.body.password) { update.password = await hashiL(req.body.password); options.projection.password = 1; }
    if (req.body.age) { update.age = req.body.age; options.projection.age = 1; }
    if (req.body.country) { update.country = req.body.country; options.projection.country = 1; }
    if (req.body.sex) { update.sex = req.body.sex; options.projection.sex = 1; }
    if (req.body.phoneNumber) { update.phoneNumber = req.body.phoneNumber; options.projection.phoneNumber = 1; }
    if (req.body.bio) { update.fields = { bio: req.body.bio }; options.projection.fields = 1; }
    if (req.body.profile_pic) { update.picture = req.body.profile_pic; options.projection.picture = 1; }
    return update;
}
module.exports = {
  excludeIrrelevantProductFields,
  excludeIrrelevantUserFields
}