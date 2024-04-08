export const smartphone = {
    name: 'smartphone',
    title: 'Smartphone',
    type: 'document',
    fields: [
      { name: 'productName', title: 'Product Name', type: 'string'},
      { name: 'simType', title: 'Sim Type', type: 'string'},
      { name: 'processor', title: 'Processor', type: 'string'},
      { name: 'memory', title: 'Memory', type: 'string'},
      { name: 'battery', title: 'Battery', type: 'string'},
      { name: 'display', title: 'Display', type: 'string'},
      { name: 'camera', title: 'Camera', type: 'string'},
      { name: 'memoryCard', title: 'Memory Card', type: 'string'},
      { name: 'version', title: 'Version', type: 'string'},
      { name: 'frontImageLink', title: 'Front Image Link', type: 'url' },
      { name: 'backImageLink', title: 'Back Image Link', type: 'url' },
      { name: 'amazon', title: 'Amazon Price', type: 'number' },
      { name: 'flipkart', title: 'Flipkart Price', type: 'number' },
      { name: 'croma', title: 'Croma Price', type: 'number' },
      { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'productName', maxLength: 90, slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 90) }},
    ]
  }